const express = require('express');
const router = express.Router();
const JobUpdate = require('./JobUpdateModel');

router.get('/', (req, res, next) => {
	JobUpdate.find({}, (err, JobUpdates) => {
		if (!err) {
			res.json({
				success: true,
				data: JobUpdates
			});
		} else {
			res.status(400).json({ success: false, message: err });
		}
	});
});

router.get('/:id', (req, res, next) => {
	var id = req.params.id;

	JobUpdate.findOne({ _id: id }, (err, JobUpdate) => {
		if (JobUpdate) {
			res.status(200).json({
				success: true,
				data: JobUpdate
			});
		} else {
			res.status(200).json({
				success: false,
				message: 'Not Found'
			});
		}
	});
});

router.delete('/', (req, res, next) => {
	var id = req.body._id;

	JobUpdate.findOneAndDelete(
		{
			_id: id
		},
		(err, query) => {
			if (query) {
				res.json({ success: true, data: query });
			} else {
				res.status(400).json({ success: false, message: 'Not found' });
			}
		}
	);
});

router.post('/', (req, res, next) => {
	var id = req.body._id;

	if (id) {
		let updateParams = req.body;

		delete updateParams.id;

		JobUpdate.findOneAndUpdate(
			{
				_id: id
			},
			updateParams,
			(err, query) => {
				if (!err) {
					if (query) {
						res.json({ success: true, data: query });
					} else {
						res.status(200).json({
							success: false,
							message: 'Not found'
						});
					}
				} else {
					res.status(200).json({
						success: false,
						message: err
					});
				}
			}
		);
	} else {
		var newJobUpdate = new JobUpdate(req.body);

		newJobUpdate.markModified('categories');

		newJobUpdate.save((err, JobUpdate) => {
			if (!err) {
				res.json({ success: true, JobUpdate: JobUpdate });
			} else {
				res.status(200).json({
					success: false,
					err
				});
			}
		});
	}
});

module.exports = router;
