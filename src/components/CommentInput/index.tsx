import React, { FC } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';

import { blueWhale, grey } from '../../utils/colors';
import { useInput } from '../../utils/hook';

interface Props {
	style?: ViewStyle;
	containerStyle?: ViewStyle;
}

export const CommentInput: FC<Props> = ({ style, containerStyle }: Props) => {
	const input = useInput('');
	return (
		<View style={[styles.container, containerStyle]}>
			<TextInput
				multiline
				numberOfLines={6}
				style={[styles.input, style]}
				placeholder="Write your comment..."
				placeholderTextColor={grey}
				{...input}
			/>
		</View>
	);
};

export default CommentInput;

const styles = StyleSheet.create({
	container: {
		height: 26,
		backgroundColor: blueWhale,
		borderRadius: 10,
	},
	input: {
		fontFamily: 'Poppins',
		fontSize: 14,
		paddingVertical: 2,
		paddingHorizontal: 14,
		height: 32,
		lineHeight: 21,
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
