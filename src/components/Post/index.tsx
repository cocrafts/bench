import React, { FC, memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParamList } from 'src/stack';
import { Thread } from 'utils/types';

import { blueWhale, grey, midnightDream } from '../../utils/colors';
import UserInfo from '../UserInfo';

import SocialRow from './SocialRow';
// temporaly hiding
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
	const { owner, body, timestamp, upCount } = item;
	const onThreadPress = (autoFocus: boolean) => {
		navigation.navigate('DetailPost', { item, autoFocus });
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerRow}>
				{owner?.avatarUrl && owner.name && timestamp && (
					<UserInfo
						avatarUrl={owner?.avatarUrl}
						name={owner?.name}
						postedTime={new Date(timestamp)}
					/>
				)}
				{/* <View style={styles.pinAndAlert}>
					<BellIcon size={15} isFilled={isFollowed} />
					<PinIcon size={15} isFilled={isPinned} style={styles.pinIcon} />
				</View> */}
			</View>
			<TouchableOpacity
				disabled={!isShortForm}
				onPress={() => onThreadPress(false)}
				style={styles.shortenedTextContainer}
			>
				<Text numberOfLines={isShortForm ? 3 : 0} style={styles.shortenedText}>
					{body}
				</Text>
			</TouchableOpacity>
			<View style={styles.socialRowContainer}>
				<SocialRow
					upCount={upCount || 0}
					// commentCount={commentCount}
					// isUpVoted={isUpVoted}
				/>
			</View>
			{isShortForm && (
				<TouchableOpacity
					onPress={() => onThreadPress(true)}
					style={styles.commentInputContainer}
				>
					<Text style={styles.placeholder}>Write your comment</Text>
				</TouchableOpacity>
			)}
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
	shortenedText: {
		fontSize: 16,
		fontWeight: '400',
		color: 'white',
		lineHeight: 24,
	},
	socialRowContainer: {
		marginTop: 8,
	},
});

export default memo(Post);
