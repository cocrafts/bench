import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
	number: number;
}

export const ThumbsUpNumber: FC<Props> = ({ number = 0 }: Props) => {
	return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default ThumbsUpNumber;
