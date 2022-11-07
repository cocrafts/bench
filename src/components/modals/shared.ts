import { StyleSheet } from 'react-native';
import { noSelect } from 'utils/styles';

export const modalStyles = StyleSheet.create({
	container: {
		borderRadius: 18,
		paddingTop: 32,
		paddingBottom: 24,
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.02)',
	},
	modalTitle: {
		...noSelect,
		fontSize: 11,
		color: 'rgba(255, 255, 255, 0.5)',
		textAlign: 'center',
		paddingHorizontal: 12,
		marginBottom: 8,
	},
	buttonContainer: {
		marginVertical: 4,
		marginHorizontal: 24,
	},
	hyperLink: {
		fontSize: 11,
		textAlign: 'center',
		marginVertical: 6,
	},
});

export const fantasyStyles = StyleSheet.create({
	heading: {
		color: '#CFCDB3',
		fontSize: 30,
		fontWeight: '500',
		textAlign: 'center',
		lineHeight: 32,
		marginBottom: 18,
	},
	errorHeading: {
		color: '#EA6363',
		fontSize: 25,
		fontWeight: '500',
		textAlign: 'center',
		marginBottom: 18,
	},
	icon: {
		alignSelf: 'center',
		marginTop: 32,
		marginBottom: 8,
	},
	sub: {
		fontSize: 13,
		fontWeight: '300',
		color: '#ffffff',
		textAlign: 'center',
	},
	separator: {
		alignSelf: 'center',
		marginTop: 18,
		marginBottom: 24,
	},
	commandContainer: {
		marginTop: 42,
	},
	button: {
		alignSelf: 'center',
		paddingVertical: 14,
		minWidth: 120,
	},
	longButton: {
		alignSelf: 'center',
		paddingVertical: 14,
		minWidth: 220,
	},
	actionLink: {
		color: '#ffffff',
		fontSize: 12,
		fontWeight: '300',
		textAlign: 'center',
		marginTop: 18,
	},
	hyperLink: {
		fontSize: 13,
		fontWeight: '300',
		textAlign: 'center',
		marginTop: 32,
	},
});
