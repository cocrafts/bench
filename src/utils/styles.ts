import { Platform, StyleSheet } from 'react-native';

export const noSelect = Platform.select({
	web: { userSelect: 'none' },
	default: {},
});

export const iStyles = StyleSheet.create({
	contentContainer: {
		width: '100%',
		maxWidth: 1280,
		marginHorizontal: 'auto',
	},
});
