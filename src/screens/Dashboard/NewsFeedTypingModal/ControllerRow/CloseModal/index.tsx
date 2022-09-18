import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { grey, midnightDream, noti } from 'utils/colors';

interface Props {
	onDiscardPost: () => void;
	onContinueEditing: () => void;
}

const CloseModal: FC<Props> = ({ onDiscardPost, onContinueEditing }: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.alertContainer}>
				<Text style={styles.alertTitle}>
					If you close now, {'\n'}you will lose this post
				</Text>
				<View style={styles.divider} />
				<TouchableOpacity
					onPress={onDiscardPost}
					style={styles.buttonContainer}
				>
					<Text style={styles.discardPostText}>Discard Post</Text>
				</TouchableOpacity>
				<View style={styles.divider} />
				<TouchableOpacity
					onPress={onContinueEditing}
					style={styles.buttonContainer}
				>
					<Text style={styles.keepEditingText}>Keep Editing</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	keepEditingText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '400',
	},
	discardPostText: {
		color: noti,
		fontSize: 14,
		fontWeight: '400',
	},
	container: {
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		height: '100%',
		width: '100%',
	},
	alertContainer: {
		height: 172,
		width: 276,
		backgroundColor: midnightDream,
		borderRadius: 5,
	},
	alertTitle: {
		marginHorizontal: 33,
		marginVertical: 12,
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 24,
		color: 'white',
		fontWeight: '400',
		fontFamily: 'Poppins',
	},
	divider: {
		height: 1,
		width: '100%',
		backgroundColor: grey,
	},
	buttonContainer: {
		paddingVertical: 14,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default CloseModal;
