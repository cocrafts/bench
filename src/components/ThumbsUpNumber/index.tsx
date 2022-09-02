import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from '@metacraft/ui';
import { abbreviateNumber } from 'utils/functions';

import ThumbsUpIcon from '../../components/icons/feather/ThumbsUp';

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
			<ThumbsUpIcon
				isFilled={isLiked}
				size={7}
				color={'rgba(255,255,255,0.8)'}
			/>
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
		fontSize: 10,
		lineHeight: 15,
	},
});

export default ThumbsUpNumber;
