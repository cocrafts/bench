import { Platform, StyleSheet } from 'react-native';
import { ThemeState } from '@metacraft/ui';

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

export const benchTheme: ThemeState = {
	id: 'paper',
	dark: false,
	defaultFontFamily: 'Poppins',
	defaultFontSize: 14,
	colors: {
		primary: '#2C879B',
		secondary: '#EB5757',
		background: '#FFFFFF',
		card: '#FFFFFF',
		border: '#D8D8D8',
		notification: '#FF3B30',
		text: '#222222',
		link: '#2C879B',
		alt: '#8f8f9d',
		altText: '#222222',
	},
	sizes: {
		topNavigation: 70,
		leftNavigation: 70,
	},
};
