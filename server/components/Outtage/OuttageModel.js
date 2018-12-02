const mongoose = require('mongoose');

var updateSchema = new mongoose.Schema({
	arrivalTime: {
		type: Date
	},
	estimatedWorkTime: {
		type: Number
	},
	delayCode: String,
	completeTime: Date
});

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
	estimatedResotrationTime: Date,
	reason: String,
	status: String,
	updates: [updateSchema]
});

var Outtage = mongoose.model('Outtage', outtageSchema);

module.exports = Outtage;
