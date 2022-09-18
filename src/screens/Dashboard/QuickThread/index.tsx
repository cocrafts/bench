import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { blueWhale, grey } from '../../../utils/colors';

interface Props {
	size?: number;
	value?: string;
	onChangeText?: (text: string) => void;
	maxLength?: number;
}

export const QuickThread: FC<Props> = ({
	size,
	value,
	onChangeText,
	maxLength,
}: Props) => {
	return (
		<View style={styles.container}>
			<TextInput
				maxLength={maxLength}
				multiline
				numberOfLines={6}
				style={[styles.input, { height: size }]}
				placeholder="What's your thoughts"
				placeholderTextColor={grey}
				onChangeText={onChangeText}
				value={value}
			/>
			{/* <Markdown style={styles.markdownContainer} content={input.value || ' '} /> */}
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
		fontSize: 16,
		paddingTop: 12,
		paddingBottom: 24,
		paddingHorizontal: 18,
		height: 60,
		color: '#FFFFFF',
		fontWeight: '400',
	},
	markdownContainer: {
		borderTopWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.02)',
		marginHorizontal: 18,
		marginBottom: 6,
	},
});
