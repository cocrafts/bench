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
import { blueWhale, grey, midnightDream, noti } from 'utils/colors';
import { createThread } from 'utils/graphql';
import { createComment } from 'utils/graphql/comment';
import { useInput, useSnapshot } from 'utils/hook';

interface Props {
	config: ModalConfigs;
}

interface ModalContext {
	threadId?: string;
	isThreadEditing: boolean;
}

const Editing: FC<Props> = ({ config }) => {
	const { threadId, isThreadEditing } = config.context as ModalContext;
	const bodyInputRef = useRef<TextInput>(null);
	const titleInputRef = useRef<TextInput>(null);
	const body = useInput();
	const title = useInput();
	const MAX_CHARACTER_SIZE = 150;
	const nbCharacterLeft = MAX_CHARACTER_SIZE - (title.value?.length || 0);
	const color = nbCharacterLeft === 0 ? { color: noti } : { color: grey };
	const isDisabledComment = isThreadEditing
		? title.value === ''
		: body.value === '';
	const { windowSize, isMobile } = useSnapshot(dimensionState);
	const typingWidth = isMobile ? '100%' : '50%';
	const { width } = windowSize;
	const container = {
		width: width - 30,
		height: 400,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		backgroundColor: midnightDream,
	} as ViewStyle;

	const onCloseModal = () => {
		modalActions.hide(config.id as string);
	};

	const onClosePress = () => {
		if (body.value !== '' || title.value !== '') {
			modalActions.show({
				id: 'CloseWarning',
				component: CloseModal,
				context: {
					typeEditing: isThreadEditing ? 'Post' : 'Comment',
					onDiscard: () => onCloseModal(),
					onContinueEditing: () =>
						isThreadEditing
							? titleInputRef.current?.focus()
							: bodyInputRef.current?.focus(),
				},
			});
		} else {
			onCloseModal();
		}
	};

	const onPostPress = () => {
		createThread({
			title: title.value,
			body: body.value,
		});
	};

	const onCommentPress = () => {
		createComment(
			{
				parentId: threadId || '',
				body: body.value,
			},
			threadId || '',
		);

		onCloseModal();
	};

	const actionBtn = isThreadEditing ? (
		<Button
			style={[styles.button, isDisabledComment && styles.disabledButton]}
			title="Post"
			onPress={isDisabledComment ? undefined : onPostPress}
		/>
	) : (
		<Button
			style={[styles.button, isDisabledComment && styles.disabledButton]}
			title="Comment"
			onPress={isDisabledComment ? undefined : onCommentPress}
		/>
	);

	return (
		<View style={container} pointerEvents="box-none">
			<View style={styles.headerContainer}>
				<TouchableOpacity onPress={onClosePress}>
					<Text style={styles.closeIcon}>&times;</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bodyContainer}>
				<View style={[styles.typingContainer, { width: typingWidth }]}>
					{isThreadEditing && (
						<View style={styles.headingContainer}>
							<TextInput
								maxLength={MAX_CHARACTER_SIZE}
								style={[styles.input, styles.headingText]}
								placeholder="Your disscussion topic in short sentence*"
								placeholderTextColor={grey}
								autoFocus
								ref={titleInputRef}
								{...title}
							/>
							<Text
								style={[color, { paddingLeft: 15 }]}
							>{`${nbCharacterLeft}/${MAX_CHARACTER_SIZE}`}</Text>
						</View>
					)}
					<TextInput
						multiline
						style={[styles.input, { flex: 1 }]}
						placeholder="Write your comment..."
						placeholderTextColor={grey}
						autoFocus={isThreadEditing ? false : true}
						ref={bodyInputRef}
						{...body}
					/>
				</View>

				{!isMobile && (
					<ScrollView style={styles.previewContainer}>
						{body.value && <Markdown content={body.value} />}
					</ScrollView>
				)}
			</View>
			<View style={styles.footerContainer}>{actionBtn}</View>
		</View>
	);
};

export default Editing;

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
	headingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headingText: {
		flex: 1,
		fontSize: 16,
		fontWeight: '600',
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
