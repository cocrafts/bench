import React, { FC } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { Markdown, themeState } from '@metacraft/ui';
import { darken } from 'color2k';
import { useSnapshot } from 'valtio';

import { useInput } from '../../../utils/hook';

export const QuickThread: FC = () => {
	const input = useInput('');
	const { colors } = useSnapshot(themeState);
	const backgroundColor = darken(colors.background, 0.05);

	const innerStyle: ViewStyle = {
		backgroundColor,
		borderRadius: 8,
		marginHorizontal: 18,
	};

	return (
		<View style={styles.container}>
			<View style={innerStyle}>
				<TextInput
					multiline
					numberOfLines={6}
					style={styles.input}
					placeholder="Create a post"
					placeholderTextColor="rgba(255, 255, 255, 0.2)"
					{...input}
				/>
				<Markdown
					style={styles.markdownContainer}
					content={input.value || ' '}
				/>
			</View>
		</View>
	);
};

export default QuickThread;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: 1025,
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: 32,
	},
	input: {
		fontFamily: 'Poppins',
		fontSize: 15,
		paddingTop: 12,
		paddingBottom: 24,
		paddingHorizontal: 18,
		color: '#FFFFFF',
	},
	markdownContainer: {
		borderTopWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.02)',
		marginHorizontal: 18,
		marginBottom: 6,
	},
});
