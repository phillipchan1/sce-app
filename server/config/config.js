const env = process.env.NODE_ENV;

const environmentSettings = {
	dev: {
		host: 'localhost'
	},
	production: {
		host: 'ds123454.mlab.com',
		port: 23454
	}
};

const global = {
	jwt_secret: 'greenenergy',
	db_name: 'sce-app'
};

module.exports = Object.assign(environmentSettings[env], global);
