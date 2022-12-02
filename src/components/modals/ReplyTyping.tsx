import React, { FC, useRef } from 'react';
import {
	ScrollView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import {
	Button,
	dimensionState,
	Markdown,
	modalActions,
	ModalConfigs,
	Text,
} from '@metacraft/ui';
import CloseModal from 'components/modals/CloseWarning';
import { blueWhale, grey, midnightDream } from 'utils/colors';
import { createComment } from 'utils/graphql/comment';
import { useInput, useSnapshot } from 'utils/hook';

interface Props {
	config: ModalConfigs;
}

interface ModalContext {
	threadId: string;
}

const ReplyTyping: FC<Props> = ({ config }) => {
	const { threadId } = config.context as ModalContext;
	const inputRef = useRef<TextInput>(null);
	const input = useInput();
	const isDisabledComment = input.value === '';
	const { windowSize, isMobile } = useSnapshot(dimensionState);
	const { width } = windowSize;
	const container = {
		width: width - 30,
		height: 400,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		backgroundColor: midnightDream,
	} as ViewStyle;

	const typingWidth = isMobile ? '100%' : '50%';

	const onCloseModal = () => {
		modalActions.hide(config.id as string);
	};

	const onClosePress = () => {
		if (input.value !== '') {
			modalActions.show({
				id: 'CloseWarning',
				component: CloseModal,
				context: {
					typeEditing: 'Comment',
					onDiscard: () => onCloseModal(),
					onContinueEditing: () => inputRef.current?.focus(),
				},
			});
		} else {
			onCloseModal();
		}
	};

	const onCommentPress = () => {
		createComment(
			{
				parentId: threadId,
				body: input.value,
			},
			threadId,
		);

		onCloseModal();
	};

	return (
		<View style={container} pointerEvents="box-none">
			<View style={styles.headerContainer}>
				<TouchableOpacity onPress={onClosePress}>
					<Text style={styles.closeIcon}>&times;</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bodyContainer}>
				<View style={[styles.typingContainer, { width: typingWidth }]}>
					<TextInput
						multiline
						style={[styles.input, { flex: 1 }]}
						placeholder="Write your comment..."
						placeholderTextColor={grey}
						autoFocus
						ref={inputRef}
						{...input}
					/>
				</View>
				{!isMobile && (
					<ScrollView style={styles.previewContainer}>
						{input.value && <Markdown content={input.value} />}
					</ScrollView>
				)}
			</View>
			<View style={styles.footerContainer}>
				<Button
					style={[styles.button, isDisabledComment && styles.disabledButton]}
					title="Comment"
					onPress={isDisabledComment ? undefined : onCommentPress}
				/>
			</View>
		</View>
	);
};

export default ReplyTyping;

const styles = StyleSheet.create({
	headerContainer: {
		paddingVertical: 15,
		alignItems: 'flex-end',
	},
	closeIcon: {
		fontSize: 22,
		fontWeight: '300',
		lineHeight: 18,
	},
	bodyContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1,
	},
	typingContainer: {
		borderRadius: 10,
		backgroundColor: blueWhale,
		padding: 15,
	},
	input: {
		marginBottom: 5,
		fontFamily: 'Poppins',
		height: 60,
		color: '#FFFFFF',
	},
	previewContainer: {
		flex: 1,
		paddingLeft: 15,
	},
	footerContainer: {
		flexDirection: 'row',
		paddingVertical: 15,
	},
	button: {
		borderRadius: 10,
	},
	disabledButton: {
		backgroundColor: grey,
	},
});
