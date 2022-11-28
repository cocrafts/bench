import React, { FC, memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { dimensionState, Markdown, Text } from '@metacraft/ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParamList } from 'src/stack';
import { useSnapshot } from 'utils/hook';
import { Thread } from 'utils/types';

import { blueWhale, grey, midnightDream } from '../../utils/colors';
import UserInfo from '../UserInfo';

// temporaly hiding
// import SocialRow from './SocialRow';
// import BellIcon from '../../components/icons/feather/Bell';
// import PinIcon from '../../components/icons/feather/Pin';
type DetailPostStackProp = NavigationProp<StackParamList, 'DetailPost'>;

interface Props {
	item: Thread;
	isShortForm?: boolean;
	navigation?: DetailPostStackProp;
}

const Post: FC<Props> = ({ item, isShortForm = true }: Props) => {
	const navigation = useNavigation<DetailPostStackProp>();
	const { owner, title, body, timestamp } = item;
	const { responsiveLevel } = useSnapshot(dimensionState);
	const nbContentCharacterDisplay = [100, 100, 100, 30][responsiveLevel];
	const shortenedBody = `${body?.slice(0, nbContentCharacterDisplay)}...`;
	const markdownContent = isShortForm ? shortenedBody : body;
	const onThreadPress = (autoFocus: boolean) => {
		navigation.navigate('DetailPost', { item, autoFocus });
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
			{/* <View style={styles.socialRowContainer}>
				<SocialRow
					upCount={upCount || 0}
					commentCount={commentCount}
					isUpVoted={isUpVoted}
				/>
			</View> */}
			{isShortForm && (
				<TouchableOpacity
					onPress={() => onThreadPress(true)}
					style={styles.commentInputContainer}
				>
					<Text style={styles.placeholder}>Write your comment</Text>
				</TouchableOpacity>
			)}
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
	},
});

export default memo(Post);
