import React, { FC } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';

import { useInput } from '../../utils/hook';

interface Props {
	style?: ViewStyle;
	containerStyle?: ViewStyle;
}

export const CommentInput: FC = ({
	style = {},
	containerStyle = {},
}: Props) => {
	const input = useInput('');
	return (
		<View style={[styles.container, containerStyle]}>
			<TextInput
				multiline
				numberOfLines={6}
				style={[styles.input, style]}
				placeholder="Write your comment..."
				placeholderTextColor="rgba(255, 255, 255, 0.2)"
				{...input}
			/>
		</View>
	);
};

export default CommentInput;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 32,
		backgroundColor: 'rgba(5,52,73,0.3)',
		borderRadius: 10,
	},
	input: {
		fontFamily: 'Poppins',
		fontSize: 12,
		paddingVertical: 7,
		paddingHorizontal: 14,
		height: 32,
		lineHeight: 18,
		color: 'rgba(255,255,255,0.5)',
		fontWeight: '400',
	},
	markdownContainer: {
		borderTopWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.02)',
		marginHorizontal: 18,
		marginBottom: 6,
	},
});
