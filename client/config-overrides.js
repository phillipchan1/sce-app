const rewireMobX = require('react-app-rewire-mobx');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
	config = rewireMobX(config, env);
	config = rewireReactHotLoader(config, env);

	return config;
};
