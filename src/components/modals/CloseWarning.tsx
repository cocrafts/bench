import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { modalActions, ModalConfigs, Text } from '@metacraft/ui';
import { grey, midnightDream, noti } from 'utils/colors';

interface Props {
	config: ModalConfigs;
}

interface ModalContext {
	onDiscard: () => void;
	onContinueEditing?: () => void;
	typeEditing: string;
}

const CloseModal: FC<Props> = ({ config }) => {
	const { onDiscard, onContinueEditing, typeEditing } =
		config.context as ModalContext;

	const onCloseModal = () => {
		modalActions.hide(config.id as string);
	};

	const onDiscardPress = () => {
		onDiscard();
		onCloseModal();
	};

	const onKeepEditingPress = () => {
		onContinueEditing?.();
		onCloseModal();
	};

	return (
		<View style={styles.container}>
			<View style={styles.alertContainer}>
				<Text style={styles.alertTitle}>
					If you close now, {'\n'}you will lose this {typeEditing}
				</Text>
				<View style={styles.divider} />
				<TouchableOpacity
					onPress={onDiscardPress}
					style={styles.buttonContainer}
				>
					<Text style={styles.discardPostText}>Discard {typeEditing}</Text>
				</TouchableOpacity>
				<View style={styles.divider} />
				<TouchableOpacity
					onPress={onKeepEditingPress}
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
	},
	discardPostText: {
		color: noti,
	},
	container: {
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	alertContainer: {
		backgroundColor: midnightDream,
		borderRadius: 5,
	},
	alertTitle: {
		marginHorizontal: 20,
		marginVertical: 15,
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 24,
		color: 'white',
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
