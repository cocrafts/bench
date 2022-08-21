import React, { FC } from 'react';
import { StyleSheet, TextInput, TextStyle, View } from 'react-native';
import { themeState } from '@metacraft/ui';
import { darken } from 'color2k';
import { useSnapshot } from 'valtio';

export const QuickThread: FC = () => {
	const { colors } = useSnapshot(themeState);
	const backgroundColor = darken(colors.background, 0.05);
	const input: TextStyle = {
		paddingTop: 12,
		paddingBottom: 24,
		paddingHorizontal: 18,
		marginHorizontal: 18,
		backgroundColor,
		borderRadius: 8,
		color: '#FFFFFF',
	};

	return (
		<View style={styles.container}>
			<TextInput
				multiline
				numberOfLines={5}
				style={input}
				placeholder="What's your thoughts"
				placeholderTextColor="rgba(255, 255, 255, 0.2)"
			/>
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
	input: {},
});
