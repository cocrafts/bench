import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { useInput } from 'utils/hook';

import { blackPearl, grey, noti } from '../../../utils/colors';
import QuickThread from '../QuickThread';

import ControllerRow from './ControllerRow';

interface Props {
	onPostPress: (item: string) => void;
	onClosePress: () => void;
}

const MAX_CHARACTER_SIZE = 100;

const NewsFeedTypingModal: FC<Props> = ({
	onPostPress,
	onClosePress,
}: Props) => {
	const { value, onChangeText } = useInput('');
	const nbCharacterLeft = MAX_CHARACTER_SIZE - value.length;
	return (
		<View style={styles.container}>
			<ControllerRow
				onPostPress={() => onPostPress(value)}
				onClosePress={onClosePress}
				isPostDisable={value === ''}
			/>
			<View style={styles.quickThreadContainer}>
				<QuickThread
					size={302}
					value={value}
					onChangeText={onChangeText}
					maxLength={MAX_CHARACTER_SIZE}
				/>
			</View>
			<Text
				style={[
					styles.characterCount,
					nbCharacterLeft === 0 && { color: noti },
				]}
			>
				{nbCharacterLeft}
			</Text>
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
