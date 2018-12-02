const express = require('express');
const router = express.Router();
const Outtage = require('./OuttageModel');

router.get('/', (req, res, next) => {
	Outtage.find({}, (err, Outtages) => {
		if (!err) {
			res.json({
				success: true,
				data: Outtages
			});
		} else {
			res.status(400).json({ success: false, message: err });
		}
	});
});

router.get('/:id', (req, res, next) => {
	var id = req.params.id;

	Outtage.findOne({ _id: id }, (err, Outtage) => {
		if (Outtage) {
			res.status(200).json({
				success: true,
				data: Outtage
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

	Outtage.findOneAndDelete(
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

		Outtage.findOneAndUpdate(
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
		var newOuttage = new Outtage(req.body);

		newOuttage.markModified('categories');

		newOuttage.save((err, Outtage) => {
			if (!err) {
				res.json({ success: true, Outtage: Outtage });
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
