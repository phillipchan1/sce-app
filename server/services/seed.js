var seeder = require('mongoose-seed');
var Outtage = require('../components/Outtage/OuttageModel');
let dbURL = `mongodb://localhost/sce-app`;

seeder.connect(
	dbURL,
	() => {
		// Load Mongoose models
		seeder.loadModels(['../components/Outtage/OuttageModel']);

		// Clear specified collections
		seeder.clearModels(['Outtage'], function() {
			// Callback to populate DB once collections have been cleared
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
						type: 'planned'
					},
					{
						id: 5678,
						type: 'planned'
					}
				]
			}
		];
	}
);
