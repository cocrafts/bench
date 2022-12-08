import React, { FC, RefObject, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BindDirections, Markdown, modalActions, Text } from '@metacraft/ui';
import ThreeDots from 'components/icons/feather/ThreeDots';
import InteractingMenu from 'components/modals/InteractingMenu';
import UserInfo from 'components/UserInfo';
import { grey, midnightDream, yellow } from 'utils/colors';
import { useSnapshot } from 'utils/hook';
import { accountState } from 'utils/state/account';
import { Comment } from 'utils/types';

// temporaly hiding
// import Avatar from 'components/Avatar';
// import ThumbsUpNumber from '../../../components/ThumbsUpNumber/index';

interface Props {
	item: Comment;
	scrollRef?: RefObject<ScrollView>;
}

const Reply: FC<Props> = ({ item, scrollRef }: Props) => {
	const bindingRef = useRef(null);
	const { body, upCount, owner, timestamp } = item;
	const postedTime = new Date(timestamp || '');
	const isActive = false;
	const { profile } = useSnapshot(accountState);
	const isOwner = profile.id === owner?.id;

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

	useEffect(() => {
		if (item.id === 'temp-id') scrollRef?.current?.scrollToEnd();
	}, []);

	return (
		<View style={styles.container}>
			{/* {originReply && (
				<View style={styles.originalReplyContainer}>
					<View style={styles.directionContainer} />
					<View style={styles.originalShortReplyContainer}>
						<Avatar imageUri={originReply.avatarUrl} size={16} />
						<Text style={styles.nameText}>{originReply.name}</Text>
						<View style={styles.originalReplyContentContainer}>
							<Text numberOfLines={1} style={styles.originalReplyContent}>
								{originReply.content}
							</Text>
						</View>
					</View>
				</View>
			)} */}
			<View
				style={[styles.mainReplyContainer, isActive && styles.activeBorder]}
			>
				<View style={styles.headerRow}>
					<UserInfo
						avatarUrl={owner?.avatarUrl || ''}
						name={owner?.name || owner?.address || ''}
						postedTime={postedTime}
					/>
					{isOwner && (
						<TouchableOpacity ref={bindingRef} onPress={onThreeDotsPress}>
							<ThreeDots size={20} />
						</TouchableOpacity>
					)}
				</View>
				<View style={styles.textContainer}>
					{body && <Markdown configs={{ fontSize: 14 }} content={body} />}
				</View>
				{/* <View style={styles.socialContainer}>
					<ThumbsUpNumber number={upCount || 0} />
					<TouchableOpacity onPress={onReplyPress}>
						<Text style={styles.replyText}>Reply</Text>
					</TouchableOpacity>
				</View> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	activeBorder: {
		borderWidth: 1,
		borderColor: yellow,
		borderRadius: 5,
	},
	replyText: {
		marginLeft: 35,
		fontSize: 13,
		fontWeight: '400',
		fontStyle: 'normal',
		lineHeight: 15,
		color: grey,
	},
	container: {
		flex: 1,
		paddingTop: 10,
	},
	mainReplyContainer: {
		paddingHorizontal: 14,
		paddingVertical: 10,
		borderRadius: 5,
		backgroundColor: midnightDream,
	},
	headerRow: {
		width: '100%',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		color: 'rgba(255,255,255, 1)',
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 21,
	},
	textContainer: {
		marginTop: 3,
	},
	socialContainer: {
		marginTop: 14,
		flexDirection: 'row',
		alignItems: 'center',
	},
	originalReplyContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 18,
		marginHorizontal: 14,
	},
	directionContainer: {
		borderWidth: 0.5,
		borderColor: 'rgba(255,255,255,0.7)',
		borderBottomColor: 'transparent',
		borderRightColor: 'transparent',
		borderRadius: 5,
		borderBottomLeftRadius: 0,
		width: 25,
		height: 25,
		marginLeft: 11,
	},
	originalShortReplyContainer: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 5,
		height: 39,
		marginTop: -21,
		marginLeft: -3,
		backgroundColor: midnightDream,
		paddingHorizontal: 7,
	},
	nameText: {
		fontWeight: '700',
		fontSize: 10,
		lineHeight: 15,
		marginLeft: 4,
		color: grey,
	},
	originalReplyContent: {
		color: 'rgba(255,255,255,0.5)',
		fontWeight: '400',
		fontSize: 10,
		lineHeight: 15,
	},
	originalReplyContentContainer: { flex: 1, marginLeft: 4 },
});

export default Reply;
