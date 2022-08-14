const setEnvironments = (configs, {webpack, wingsConfig}) => {
	const {DefinePlugin} = webpack;
	const env = wingsConfig.env();
	const isProduction = wingsConfig.isProduction(env);

	configs.plugins[0] = new DefinePlugin({
		process: {env: {}},
		__DEV__: !isProduction,
		ENV: JSON.stringify(env),
	});

	return configs;
};

module.exports = {
	buildId: () => 'buildApp',
	webpackConfigs: [setEnvironments],
	moduleAlias: () => {
		return {
			global: {
				'react-native': 'react-native-web',
			},
		};
	},
};
