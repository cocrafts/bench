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
	id: 'fantasy',
	dark: false,
	defaultFontFamily: 'Poppins',
	defaultFontSize: 14,
	colors: {
		primary: '#2C879B',
		secondary: '#EB5757',
		background: '#002E46',
		card: '#FFFFFF',
		border: '#D8D8D8',
		notification: '#FF3B30',
		text: '#FFFFFF',
		link: '#2C879B',
		alt: '#FFFFFF',
		altText: '#222222',
	},
	sizes: {
		topNavigation: 70,
		leftNavigation: 70,
	},
};
