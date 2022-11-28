import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useInput } from 'utils/hook';
import { CreateThreadInput } from 'utils/types';

import { blackPearl, grey } from '../../../utils/colors';
import QuickThread from '../QuickThread';

import ControllerRow from './ControllerRow';

interface Props {
	onPostPress: (item: CreateThreadInput) => void;
	onClosePress: () => void;
}

const NewsFeedTypingModal: FC<Props> = ({
	onPostPress,
	onClosePress,
}: Props) => {
	const headingText = useInput();
	const contentText = useInput();
	const item = { title: headingText.value, body: contentText.value };

	return (
		<View style={styles.container}>
			<ControllerRow
				onPostPress={() => onPostPress(item)}
				onClosePress={onClosePress}
				isPostDisable={headingText.value === ''}
			/>
			<View style={styles.quickThreadContainer}>
				<QuickThread
					size={302}
					heading={headingText.value}
					onChangeHeadingText={headingText.onChangeText}
					content={contentText.value}
					onChangeContentText={contentText.onChangeText}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: blackPearl,
		paddingHorizontal: 15,
		paddingTop: 44,
	},
	quickThreadContainer: {
		width: '100%',
		marginTop: 15,
	},
	characterCount: {
		marginTop: 7,
		textAlign: 'right',
		fontWeight: '400',
		fontSize: 16,
		color: grey,
	},
});

export default NewsFeedTypingModal;
