import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@metacraft/ui';

import { blackPearl } from '../../../utils/colors';

interface Props {
	text: string;
}

const MainButton: FC<Props> = ({ text = '' }: Props) => {
	return (
		<Button style={styles.container} title={text} titleStyle={styles.text} />
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		backgroundColor: blackPearl,
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'Poppins',
		fontWeight: '700',
	},
});

export default MainButton;
