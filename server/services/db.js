const mongoose = require('mongoose');
const config = require('../config/config');
const seeder = require('mongoose-seed');
let dbURL;

if (process.env.NODE_ENV === 'dev') {
	dbURL = `mongodb://${config.host}/${config.db_name}`;
} else if (process.env.NODE_ENV === 'production') {
	mLabUsername = process.env.MLAB_USERNAME;
	mLabPassword = process.env.MLAB_PASSWORD;

	dbURL = `mongodb://${mLabUsername}:${mLabPassword}@${config.host}:${
		config.port
	}/${config.db_name}`;
}

mongoose.connect(
	dbURL,
	err => {
		if (err) {
			console.log('Failed to connect to mongodb at ' + dbURL);
		} else {
			console.log('Successfully connected to mongodb at ' + dbURL);
		}
	}
);

// seed data
seeder.connect(
	dbURL,
	() => {
		seeder.loadModels(['server/components/Outtage/OuttageModel']);

		seeder.clearModels(['Outtage'], function() {
			seeder.populateModels(outtages, function() {
				seeder.disconnect();
			});
		});

		var outtages = [
			{
				model: 'Outtage',
				documents: [
					{
						id: 1234,
						type: 'planned',
						city: 'Chicago',
						address: '920 S Rosemead Ave',
						customersImpacted: 12,
						outageStartTime: 123213,
						reason: 'Equipmenet Upgrade',
						status: 'Not Started'
					},
					{
						id: 5678,
						type: 'planned',
						city: 'Chicago',
						address: '920 S Rosemead Ave',
						customersImpacted: 10,
						outageStartTime: 124124,
						reason: 'Equipmenet Break',
						status: 'Not Started'
					},
					{
						id: 567118,
						type: 'planned',
						city: 'Chicago',
						address: '920 S Rosemead Ave',
						customersImpacted: 10,
						outageStartTime: 124124,
						reason: 'Equipmenet Break',
						status: 'Not Started'
					}
				]
			}
		];
	}
);
