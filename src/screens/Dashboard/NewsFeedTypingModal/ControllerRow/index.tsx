import React, { FC, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from '@metacraft/ui';

import CloseIcon from '../../../../components/icons/feather/Close';
import { blue, grey } from '../../../../utils/colors';

import CloseModal from './CloseModal';

interface Props {
	onPostPress: () => void;
	onClosePress: () => void;
	isPostDisable?: boolean;
}

const ControllerRow: FC<Props> = ({
	onPostPress,
	onClosePress,
	isPostDisable = false,
}: Props) => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);

	const displayClosePopup = () => setIsPopupVisible(true);

	const hideClosePopup = () => setIsPopupVisible(false);

	const onDiscardPost = () => {
		hideClosePopup();
		onClosePress();
	};

	return (
		<View style={styles.container}>
			<Modal visible={isPopupVisible} transparent={true} animationType={'fade'}>
				<CloseModal
					onDiscardPost={onDiscardPost}
					onContinueEditing={hideClosePopup}
				/>
			</Modal>

			<TouchableOpacity
				onPress={isPostDisable ? onClosePress : displayClosePopup}
			>
				<CloseIcon color={'rgba(255,255,255,0.7)'} />
			</TouchableOpacity>
			<Button
				onPress={isPostDisable ? undefined : onPostPress}
				style={[styles.button, isPostDisable && styles.disabled]}
				title={'Post'}
				titleStyle={[styles.title, isPostDisable && styles.titleDisabled]}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	popupContainer: {},
	titleDisabled: {
		color: 'rgba(255,255,255,0.5)',
	},
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		width: 64,
		height: 32,
		borderRadius: 10,
		backgroundColor: blue,
	},
	disabled: {
		backgroundColor: 'rgba(128,144,153,0.3)',
	},
	title: {
		color: 'white',
		fontSize: 12,
		fontWeight: '600',
		lineHeight: 18,
		fontFamily: 'Poppins',
	},
});

export default ControllerRow;
