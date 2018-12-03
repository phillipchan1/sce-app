const mongoose = require('mongoose');

var outtageSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true
	},
	type: {
		type: String
	},
	city: String,
	zip: Number,
	address: String,
	customersImpacted: Number,
	outtageStartTime: Date,
	estimatedRestorationTime: Date,
	reason: String,
	status: String
});

var Outtage = mongoose.model('Outtage', outtageSchema);

module.exports = Outtage;
