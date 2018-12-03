const mongoose = require('mongoose');

var jobUpdateSchema = new mongoose.Schema({
	arrivalTime: {
		type: String
	},
	estimatedWorkTime: {
		type: Number
	},
	delayCode: String,
	completeTime: String,
	outtageId: Number
});

var JobUpdate = mongoose.model('JobUpdate', jobUpdateSchema);

module.exports = JobUpdate;
