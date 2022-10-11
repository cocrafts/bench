import React, { FC, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';

import { blueWhale, grey } from '../../utils/colors';
import { useInput } from '../../utils/hook';

interface Props {
	style?: ViewStyle;
	containerStyle?: ViewStyle;
	autoFocus?: boolean;
}

export const CommentInput: FC<Props> = ({
	style,
	containerStyle,
	autoFocus = false,
}: Props) => {
	const input = useInput('');
	const inputRef = useRef<TextInput>(null);

	useEffect(() => {
		if (inputRef.current && autoFocus) {
			inputRef.current?.focus();
		}
	}, [autoFocus]);

	return (
		<View style={[styles.container, containerStyle]}>
			<TextInput
				ref={inputRef}
				multiline
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
