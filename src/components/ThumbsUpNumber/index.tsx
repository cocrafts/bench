import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import ThumbsUpIcon from '../../components/icons/feather/ThumbsUp';
import { blueGrey, grey } from '../../utils/colors';
import { abbreviateNumber } from '../../utils/functions';

interface Props {
	number: number;
	isLiked?: boolean;
}

export const ThumbsUpNumber: FC<Props> = ({
	number = 0,
	isLiked = false,
}: Props) => {
	return (
		<View style={styles.container}>
			<ThumbsUpIcon isFilled={isLiked} size={12} color={blueGrey} />
			<Text style={styles.textStyle}>{abbreviateNumber(number)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textStyle: {
		marginLeft: 2,
		fontFamily: 'Poppins',
		fontWeight: '400',
		fontSize: 13,
		lineHeight: 19.5,
		color: grey,
	},
});

export default ThumbsUpNumber;
