import React, { FC } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';

import { blueWhale, grey } from '../../utils/colors';
import { useInput } from '../../utils/hook';

interface Props {
	style?: ViewStyle;
	containerStyle?: ViewStyle;
	autoFocus?: boolean;
	commentInputRef: React.RefObject<TextInput>;
}

export const CommentInput: FC<Props> = ({
	style,
	containerStyle,
	autoFocus = false,
	commentInputRef,
}: Props) => {
	const input = useInput('');

	return (
		<View style={[styles.container, containerStyle]}>
			<TextInput
				ref={commentInputRef}
				numberOfLines={6}
				style={[styles.input, style]}
				placeholder="Write your comment..."
				placeholderTextColor={grey}
				autoFocus={autoFocus}
				focusable={true}
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
		color: grey,
		fontWeight: '400',
	},
});
