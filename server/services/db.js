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

// seed data
seeder.connect(
	dbURL,
	() => {
		seeder.loadModels(['server/components/Outtage/OuttageModel']);

		seeder.clearModels(['Outtage'], function() {
			seeder.populateModels(outtages, function() {
				seeder.disconnect();

				mongoose.connect(
					dbURL,
					err => {
						if (err) {
							console.log(
								'Failed to connect to mongodb at ' + dbURL
							);
						} else {
							console.log(
								'Successfully connected to mongodb at ' + dbURL
							);
						}
					}
				);
			});
		});

		var outtages = [
			{
				model: 'Outtage',
				documents: [
					{
						id: 1234,
						type: 'planned',
						city: 'Pasadena',
						address: '2920 S Colorado Ave',
						customersImpacted: 12,
						outtageStartTime: '04-12-2018 10:40',
						estimatedRestorationTime: '04-12-2018 10:40',
						reason: 'Equipment Upgrade',
						status: 'Not Started',
						zip: 91103
					},
					{
						id: 5678,
						type: 'unplanned',
						city: 'Rosemead',
						address: '1920 S Rosemead Ave',
						customersImpacted: 10,
						outtageStartTime: '04-12-2018 10:40',
						estimatedRestorationTime: '04-12-2018 10:40',
						reason: 'Equipment Break',
						status: 'Not Started',
						zip: 91103
					},
					{
						id: 567118,
						type: 'planned',
						city: 'La Puente',
						address: '9120 S Basement Ave',
						customersImpacted: 10,
						outtageStartTime: '04-12-2018 10:40',
						estimatedRestorationTime: '04-12-2018 10:40',
						reason: 'Equipment Break',
						status: 'In Progress',
						zip: 91103
					},
					{
						id: 567112,
						type: 'planned',
						city: 'Pasadena',
						address: '298 S River Ave',
						customersImpacted: 10,
						outtageStartTime: '04-12-2018 10:40',
						estimatedRestorationTime: '04-12-2018 10:40',
						reason: 'Equipment Break',
						status: 'In Progress',
						zip: 91103
					},
					{
						id: 1412,
						type: 'planned',
						city: 'Eagle Rock',
						address: '911120 S Basement Ave',
						customersImpacted: 10,
						outtageStartTime: '04-12-2018 10:40',
						estimatedRestorationTime: '04-12-2018 10:40',
						reason: 'Equipment Break',
						status: 'Not Started',
						zip: 91103
					},
					{
						id: 56711218,
						type: 'planned',
						city: 'La Puente',
						address: '9120 S Basement Ave',
						customersImpacted: 10,
						outtageStartTime: '04-12-2018 10:40',
						estimatedRestorationTime: '04-12-2018 10:40',
						reason: 'Equipment Break',
						status: 'In Progress',
						zip: 91103
					},
					{
						id: 2213,
						type: 'planned',
						city: 'Pasadena',
						address: '298 S River Ave',
						customersImpacted: 10,
						outtageStartTime: '04-12-2018 10:40',
						estimatedRestorationTime: '04-12-2018 10:40',
						reason: 'Equipment Break',
						status: 'In Progress',
						zip: 91103
					}
				]
			}
		];
	}
);
