import { StyleSheet } from 'react-native';

const commandSize = 32;

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginLeft: 6,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		borderRadius: 32,
		padding: 4,
	},
	infoContainer: {
		flex: 1,
		paddingLeft: 8,
		marginRight: 6,
		alignItems: 'flex-end',
	},
	inlineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	inlineIcon: {
		marginRight: 2,
		width: 14,
		height: 14,
	},
	primaryText: {
		color: '#FFFFFF',
		fontWeight: '300',
		lineHeight: 16,
	},
	secondaryText: {
		color: 'rgba(255, 255, 255, 0.46)',
		fontSize: 11,
		fontWeight: '300',
	},
	commandContainer: {
		width: commandSize,
		height: commandSize,
		borderRadius: commandSize / 2,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
