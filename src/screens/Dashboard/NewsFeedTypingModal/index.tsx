import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { blackPearl } from '../../../utils/colors';
import QuickThread from '../QuickThread';

import ControllerRow from './ControllerRow';

interface Props {
	onPostPress: () => void;
	onClosePress: () => void;
}

const NewsFeedTypingModal: FC<Props> = ({
	onPostPress,
	onClosePress,
}: Props) => {
	return (
		<View style={styles.container}>
			<ControllerRow onPostPress={onPostPress} onClosePress={onClosePress} />
			<View style={styles.quickThreadContainer}>
				<QuickThread size={302} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: blackPearl,
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingTop: 44,
	},
	quickThreadContainer: {
		flex: 1,
		width: '100%',
		marginTop: 15,
	},
});

export default NewsFeedTypingModal;
