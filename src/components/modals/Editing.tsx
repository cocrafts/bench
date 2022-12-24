import React, { FC, useEffect, useRef } from 'react';
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
import { blueWhale, grey, midnightDream, noti } from 'utils/colors';
import { createThread, editThread } from 'utils/graphql';
import { createComment, editComment } from 'utils/graphql/comment';
import { useInput, useSnapshot } from 'utils/hook';
import {
	editingModalActions,
	editingModalState,
} from 'utils/state/editingModal';
import { Comment, Thread } from 'utils/types';

interface Props {
	config: ModalConfigs;
}

interface ModalContext {
	threadId?: string;
	isThreadEditing: boolean;
	item?: Thread | Comment;
}

const Editing: FC<Props> = ({ config }) => {
	const { threadId, isThreadEditing, item } = config.context as ModalContext;
	const bodyInputRef = useRef<TextInput>(null);
	const titleInputRef = useRef<TextInput>(null);
	const body = useInput();
	const title = useInput();
	const MAX_CHARACTER_SIZE = 150;
	const nbCharacterLeft = MAX_CHARACTER_SIZE - (title.value?.length || 0);
	const color = nbCharacterLeft === 0 ? { color: noti } : { color: grey };
	const isDisabledActionBtn = isThreadEditing
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

	// Valtio state
	editingModalState.isThreadEditing = isThreadEditing;
	editingModalState.title = {
		focus: () => titleInputRef.current?.focus(),
		value: title.value,
	};
	editingModalState.body = {
		focus: () => bodyInputRef.current?.focus(),
		value: body.value,
	};

	const closeModal = () => {
		modalActions.hide(config.id as string);
	};

	const onClosePress = () =>
		editingModalActions.onCloseEditingModal(closeModal);

	const onPostPress = () => {
		createThread({
			title: title.value,
			body: body.value,
		});

		closeModal();
	};

	const onCommentPress = () => {
		createComment(
			{
				parentId: threadId || '',
				body: body.value,
			},
			threadId || '',
		);

		closeModal();
	};

	const onUpdatePress = () => {
		if (item?.__typename === 'Thread') {
			editThread(
				{ ...item },
				{
					id: item.id,
					title: title.value,
					body: body.value,
				},
			);
		} else if (item?.__typename === 'Comment') {
			editComment(
				{ ...item },
				{
					id: item.id as string,
					body: body.value,
				},
			);
		}
		closeModal();
	};

	const actionBtn = item ? (
		<Button
			style={[styles.button, isDisabledActionBtn && styles.disabledButton]}
			title="Update"
			onPress={isDisabledActionBtn ? undefined : onUpdatePress}
		/>
	) : isThreadEditing ? (
		<Button
			style={[styles.button, isDisabledActionBtn && styles.disabledButton]}
			title="Post"
			onPress={isDisabledActionBtn ? undefined : onPostPress}
		/>
	) : (
		<Button
			style={[styles.button, isDisabledActionBtn && styles.disabledButton]}
			title="Comment"
			onPress={isDisabledActionBtn ? undefined : onCommentPress}
		/>
	);

	useEffect(() => {
		if (item) {
			if (item.__typename === 'Thread') {
				title.onChangeText(item.title as string);
			}
			body.onChangeText(item.body as string);
		}
	}, [item]);

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
						placeholder="Enter a message. Use Markdown to format"
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
