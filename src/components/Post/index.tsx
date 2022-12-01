import React, { FC, memo, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
	AnimateDirections,
	BindDirections,
	dimensionState,
	Markdown,
	modalActions,
	Text,
} from '@metacraft/ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ReplyTyping from 'components/modals/ReplyTyping';
import SignInOptions from 'components/modals/SignInOptions';
import { RootParamList } from 'stacks/shared';
import { useSnapshot } from 'utils/hook';
import { accountState } from 'utils/state/account';
import { Thread } from 'utils/types';

import { blueWhale, grey, midnightDream } from '../../utils/colors';
import UserInfo from '../UserInfo';

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
	const { profile } = useSnapshot(accountState);
	const { owner, title, body, timestamp, id } = item;
	const shortenedId = id?.slice(7) || '';
	const { responsiveLevel } = useSnapshot(dimensionState);
	const nbContentCharacterDisplay = [100, 100, 100, 30][responsiveLevel];
	const shortenedBody = `${body?.slice(0, nbContentCharacterDisplay)}...`;
	const markdownContent = isShortForm ? shortenedBody : body;
	const onThreadPress = (comment: boolean) => {
		navigation.navigate('DetailPost', { id: shortenedId, comment });
	};

	const bindingRef = useRef(null);

	const onReplyPress = () => {
		if (profile.id) {
			if (isShortForm) {
				onThreadPress(true);
			}

			modalActions.show({
				id: 'ReplyTyping',
				bindingRef,
				component: () => (
					<ReplyTyping modalId="ReplyTyping" threadId={id || ''} />
				),
				bindingDirection: BindDirections.Bottom,
				withoutMask: true,
			});
		} else {
			modalActions.show({
				id: 'signInOptions',
				component: SignInOptions,
				animateDirection: AnimateDirections.BottomLeft,
			});
		}
	};

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => onThreadPress(false)}
		>
			<View style={styles.headerRow}>
				<UserInfo
					avatarUrl={owner?.avatarUrl || ''}
					name={owner?.name || owner?.address}
					postedTime={new Date(timestamp || '')}
				/>
				{/* <View style={styles.pinAndAlert}>
					<BellIcon size={15} isFilled={isFollowed} />
					<PinIcon size={15} isFilled={isPinned} style={styles.pinIcon} />
				</View> */}
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
				<TouchableOpacity onPress={onReplyPress}>
					<Text>Reply</Text>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
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
		marginTop: 8,
		paddingHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});

export default memo(Post);
