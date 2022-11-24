import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { dimensionState, Markdown, Text } from '@metacraft/ui';
import { useSnapshot } from 'utils/hook';

import { blueWhale, grey, noti } from '../../../utils/colors';

interface Props {
	size?: number;
	heading?: string;
	onChangeHeadingText?: (text: string) => void;
	content?: string;
	onChangeContentText?: (text: string) => void;
}

export const QuickThread: FC<Props> = ({
	size,
	heading,
	onChangeHeadingText,
	content,
	onChangeContentText,
}: Props) => {
	const { isMobile } = useSnapshot(dimensionState);
	const MAX_CHARACTER_SIZE = 150;
	const nbCharacterLeft = MAX_CHARACTER_SIZE - (heading?.length || 0);
	const color = nbCharacterLeft === 0 ? { color: noti } : { color: grey };
	const width = isMobile ? '100%' : '50%';

	return (
		<View style={styles.container}>
			<View style={[styles.typingContainer, { width }]}>
				<View style={styles.headingContainer}>
					<TextInput
						maxLength={MAX_CHARACTER_SIZE}
						style={[styles.input, styles.headingText]}
						placeholder="Your disscussion topic in short sentence*"
						placeholderTextColor={grey}
						onChangeText={onChangeHeadingText}
						value={heading}
					/>
					<Text
						style={[color, { paddingLeft: 15 }]}
					>{`${nbCharacterLeft}/${MAX_CHARACTER_SIZE}`}</Text>
				</View>
				<TextInput
					multiline
					style={[styles.input, { height: size }]}
					placeholder="Enter a message (optional)"
					placeholderTextColor={grey}
					onChangeText={onChangeContentText}
					value={content}
				/>
				{/* <Markdown style={styles.markdownContainer} content={input.value || ' '} /> */}
			</View>
			{!isMobile && (
				<View style={styles.previewContainer}>
					{content && <Markdown content={content} />}
				</View>
			)}
		</View>
	);
};

export default QuickThread;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	typingContainer: {
		borderRadius: 8,
		backgroundColor: blueWhale,
		paddingTop: 12,
		paddingBottom: 24,
		paddingHorizontal: 18,
	},
	headingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		marginBottom: 5,
		fontFamily: 'Poppins',
		height: 60,
		color: '#FFFFFF',
	},
	headingText: {
		flex: 1,
		fontSize: 16,
		fontWeight: '600',
	},
	markdownContainer: {
		borderTopWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.02)',
		marginHorizontal: 18,
		marginBottom: 6,
	},
	previewContainer: {
		flex: 1,
		paddingLeft: 15,
	},
});
