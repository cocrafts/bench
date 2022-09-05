import React, { FC, memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { useNavigation } from '@react-navigation/native';

import BellIcon from '../../../../components/icons/feather/Bell';
import PinIcon from '../../../../components/icons/feather/Pin';
import { blackPearl } from '../../../../utils/colors';

import SocialRow from './SocialRow';
import UserInfo from './UserInfo';

interface Props {
	avatarUrl: string;
	name: string;
	postedTime: string;
	thread: string;
	nbLikes: number;
	nbComments: number;
	isPinned: boolean;
	isFollowed: boolean;
	isLiked: boolean;
}

const ThreadItem: FC<Props> = ({
	avatarUrl = '',
	name = '',
	postedTime = '',
	thread = '',
	nbLikes = 0,
	nbComments = 0,
	isPinned = false,
	isFollowed = false,
	isLiked = false,
}: Props) => {
	const navigation = useNavigation();
	const onThreadPress = () => {
		navigation.navigate('DetailPost');
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerRow}>
				<UserInfo
					avatarUrl={avatarUrl}
					name={name}
					postedTime={new Date(postedTime)}
				/>
				<View style={styles.pinAndAlert}>
					<PinIcon size={15} isFilled={isPinned} />
					<BellIcon size={15} isFilled={isFollowed} style={styles.bellIcon} />
				</View>
			</View>
			<TouchableOpacity
				onPress={onThreadPress}
				style={styles.shortenedTextContainer}
			>
				<Text numberOfLines={4} style={styles.shortenedText}>
					{thread}
				</Text>
			</TouchableOpacity>
			<View style={styles.socialRowContainer}>
				<SocialRow
					nbLikes={nbLikes}
					nbComments={nbComments}
					isLiked={isLiked}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: blackPearl,
		paddingVertical: 12,
		paddingHorizontal: 16,
		marginTop: 12,
		borderRadius: 5,
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
	bellIcon: {
		marginLeft: 10,
	},
	shortenedTextContainer: {
		marginTop: 7,
	},
	shortenedText: {
		fontSize: 12,
		fontWeight: '400',
		color: 'rgba(255,255,255,0.6)',
		lineHeight: 18,
	},
	socialRowContainer: {
		marginTop: 8,
	},
});

export default memo(ThreadItem);
