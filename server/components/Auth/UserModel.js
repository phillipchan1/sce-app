const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

userSchema.statics.authenticate = function(email, password, callback) {
	User.findOne({
		email: email
	}).exec(function(error, user) {
		if (error) {
			return callback(error);
		} else if (!user) {
			var err = new Error('User not found');
			err.status = 401;
			return callback(err);
		}
		// success
		// we use bcrypt compare method to check the hash of the password in DB with the hash of the pw the user inputted
		// takes 3 arguments, 1) inputted pass 2) hash pw 3) callback
		// the callback will contain the result of the comparison
		else {
			bcrypt.compare(password, user.password, function(error, result) {
				if (result === true) {
					// return null because first paramter is usually error.
					// second parameter and beyond is whatever data and beyond.
					return callback(null, user);
				} else {
					var err = new Error('Passwords dont match');
					return callback(err);
				}
			});
		}
	});
};

userSchema.pre('save', function(next) {
	// this is the object we created
	var user = this;

	if (!user.isModified('password')) return next();

	bcrypt.hash(user.password, 10, function(err, hash) {
		if (err) {
			return next(err);
		} else {
			user.password = hash;
			// calls the next function in the middleware stack
			next();
		}
	});
});

// userSchema.plugin(findOrCreate);

var User = mongoose.model('User', userSchema);

module.exports = User;
