const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const setEnvironments = (configs, internal) => {
	const { webpack } = internal.modules;
	const { DefinePlugin } = webpack;
	const env = internal.configs.env();
	const isProduction = internal.configs.isProduction(env);

	configs.plugins[0] = new DefinePlugin({
		process: { env: {} },
		__DEV__: !isProduction,
		ENV: JSON.stringify(env),
	});

	return configs;
};

const copyAssets = (configs) => {
	configs.plugins.push(
		new CopyPlugin({
			patterns: [
				{
					from: resolve(process.cwd(), 'assets/'),
					to: './',
					filter: (uri) => {
						const isFont = uri.indexOf('/fonts/') >= 0;
						const isTemplate = uri.endsWith('.ejs') || uri.endsWith('.sass');

						return !isFont && !isTemplate;
					},
				},
			],
		}),
	);

	return configs;
};

const externals = (configs) => {
	configs.externals = {
		rxjs: 'rxjs',
		react: 'React',
		lodash: '_',
		'amazon-cognito-identity-js': 'AmazonCognitoIdentity',
		'react-dom': 'ReactDOM',
		'react-art': 'ReactART',
		'@blocto/sdk': 'BloctoSDK',
		'@solana/web3.js': 'solanaWeb3',
	};

	return configs;
};

module.exports = {
	useBabel: true,
	publicPath: () => process.env.PUBLIC_URL || '/',
	keepPreviousBuild: () => true,
	buildId: () => 'app',
	webpackMiddlewares: [setEnvironments, copyAssets, externals],
	moduleAlias: {
		global: {
			'react-native': 'react-native-web',
		},
	},
};
