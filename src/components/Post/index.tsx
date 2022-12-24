import React, { FC, memo, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
	BindDirections,
	Button,
	dimensionState,
	Markdown,
	modalActions,
	Text,
} from '@metacraft/ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ReplyIcon from 'components/icons/feather/Reply';
import ThreeDots from 'components/icons/feather/ThreeDots';
import InteractingMenu from 'components/modals/InteractingMenu';
import UserInfo from 'components/UserInfo';
import { RootParamList } from 'stacks/shared';
import { blueWhale, grey, midnightDream } from 'utils/colors';
import { closeAllModal, onEdit } from 'utils/helper';
import { useSnapshot } from 'utils/hook';
import { accountState } from 'utils/state/account';
import { editingModalActions } from 'utils/state/editingModal';
import { Thread } from 'utils/types';

// temporaly hiding
// import SocialRow from './SocialRow';
// import BellIcon from '../../components/icons/feather/Bell';
// import PinIcon from '../../components/icons/feather/Pin';

interface Props {
	item: Thread;
	isShortForm?: boolean;
}

type StackProp = NavigationProp<RootParamList>;

const Post: FC<Props> = ({ item, isShortForm = true }: Props) => {
	const navigation = useNavigation<StackProp>();
	const bindingRef = useRef(null);
	const { profile } = useSnapshot(accountState);
	const { owner, title, body, timestamp, id } = item;
	const { responsiveLevel } = useSnapshot(dimensionState);
	const nbContentCharacterDisplay = [100, 100, 100, 30][responsiveLevel];
	const shortenedBody = `${body?.slice(0, nbContentCharacterDisplay)}...`;
	const markdownContent = isShortForm ? shortenedBody : body;
	const shortenedId = id?.slice(7) || '';
	const isOwner = profile.id === owner?.id;
	const closeModal = () => {
		closeAllModal();
		navigation.navigate('DetailPost', { id: shortenedId });
	};

	const onThreadPress = () =>
		isShortForm && editingModalActions.onCloseEditingModal(closeModal);

	const onReplyPress = () => {
		onEdit({
			threadId: id || '',
			isThreadEditing: false,
		});

		if (profile.id && isShortForm) {
			onThreadPress();
		}
	};

	const onThreeDotsPress = () => {
		modalActions.show({
			id: 'InteractingMenu',
			component: InteractingMenu,
			bindingRef,
			bindingDirection: BindDirections.BottomRight,
			maskActiveOpacity: 0,
			context: {
				item,
			},
		});
	};

	return (
		<View pointerEvents="box-none">
			<TouchableOpacity style={styles.container} onPress={onThreadPress}>
				<View style={styles.headerRow}>
					<UserInfo
						avatarUrl={owner?.avatarUrl || ''}
						name={owner?.name || owner?.address}
						postedTime={new Date(timestamp || '')}
					/>
					<View style={styles.pinAndAlert}>
						{/* <BellIcon size={15} isFilled={isFollowed} />
					<PinIcon size={15} isFilled={isPinned} style={styles.pinIcon} /> */}

						{/* Temporarily hide if not owner, permanently show if have more active for user */}
						{!isShortForm && isOwner && (
							<TouchableOpacity ref={bindingRef} onPress={onThreeDotsPress}>
								<ThreeDots size={20} />
							</TouchableOpacity>
						)}
					</View>
				</View>
				<View style={styles.shortenedTextContainer}>
					<Text numberOfLines={2} style={styles.headingText}>
						{title}
					</Text>
					{markdownContent && (
						<Markdown content={markdownContent} configs={{ fontSize: 14 }} />
					)}
				</View>
				<View style={styles.socialRowContainer}>
					{/* <SocialRow
					upCount={upCount || 0}
					commentCount={commentCount}
					isUpVoted={isUpVoted}
				/> */}
					{!isShortForm && (
						<Button style={styles.replyBtn} onPress={onReplyPress}>
							<ReplyIcon
								style={styles.replyBtnInner}
								size={14}
								color="#fafafa"
							/>
							<Text style={styles.replyBtnInner}>Reply</Text>
						</Button>
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	placeholder: {
		color: grey,
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 21,
	},
	container: {
		flex: 1,
		backgroundColor: midnightDream,
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginTop: 15,
		borderRadius: 10,
	},
	headerRow: {
		width: '100%',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	pinAndAlert: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	pinIcon: {
		marginLeft: 10,
	},
	shortenedTextContainer: {
		marginTop: 7,
	},
	commentInputContainer: {
		marginTop: 13,
		height: 26,
		paddingHorizontal: 9,
		justifyContent: 'center',
		backgroundColor: blueWhale,
		borderRadius: 6,
	},
	headingText: {
		marginBottom: 5,
		fontSize: 16,
		fontWeight: '600',
		color: '#fff',
	},
	shortenedText: {
		color: 'white',
	},
	socialRowContainer: {
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	replyBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		backgroundColor: midnightDream,
	},
	replyBtnInner: {
		margin: 5,
		color: '#fafafa',
	},
});

export default memo(Post);
