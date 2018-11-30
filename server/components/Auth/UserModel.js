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
		} else {
			bcrypt.compare(password, user.password, function(error, result) {
				if (result === true) {
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
	var user = this;

	if (!user.isModified('password')) return next();

	bcrypt.hash(user.password, 10, function(err, hash) {
		if (err) {
			return next(err);
		} else {
			user.password = hash;
			next();
		}
	});
});

var User = mongoose.model('User', userSchema);

module.exports = User;
