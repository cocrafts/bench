import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Markdown } from '@metacraft/ui';

import { blueWhale, grey } from '../../../utils/colors';
import { useInput } from '../../../utils/hook';

export const QuickThread: FC = () => {
	const input = useInput('');

	return (
		<View style={styles.container}>
			<TextInput
				multiline
				numberOfLines={6}
				style={styles.input}
				placeholder="What's your thoughts"
				placeholderTextColor={grey}
				{...input}
			/>
			<Markdown style={styles.markdownContainer} content={input.value || ' '} />
		</View>
	);
};

export default QuickThread;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderRadius: 8,
		backgroundColor: blueWhale,
	},
	input: {
		fontFamily: 'Poppins',
		fontSize: 15,
		paddingTop: 12,
		paddingBottom: 24,
		paddingHorizontal: 18,
		height: 60,
		color: '#FFFFFF',
	},
	markdownContainer: {
		borderTopWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.02)',
		marginHorizontal: 18,
		marginBottom: 6,
	},
});
