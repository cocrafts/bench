module.exports = {
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: true,
			},
		}),
	},
	resolver: {
		sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
	},
};
