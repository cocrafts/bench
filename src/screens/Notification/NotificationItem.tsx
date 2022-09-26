import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Avatar from '../../components/Avatar';
import DateDifferenceText from '../../components/DateDifferenceText';
import { blueWhale } from '../../utils/colors';

interface Props {
	avatarUrl: string;
	name: string;
	content: string;
	postedTime: string;
	isRead: boolean;
}

const NotificationItem: FC<Props> = ({
	avatarUrl,
	name,
	content,
	postedTime,
	isRead = false,
}: Props) => {
	return (
		<View
			style={[styles.container, isRead && { backgroundColor: 'transparent' }]}
		>
			<Avatar size={25} uri={avatarUrl} />
			<Text numberOfLines={2} style={styles.contentContainer}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.content}>{` ${content}`}</Text>
			</Text>
			<DateDifferenceText
				fromDate={new Date(postedTime)}
				style={styles.createdAt}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: blueWhale,
		paddingHorizontal: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 55,
	},
	contentContainer: {
		flex: 1,
		marginLeft: 6,
		fontFamily: 'Poppins',
	},
	name: {
		color: 'white',
		fontSize: 14,
		fontWeight: '700',
		lineHeight: 21,
	},
	content: {
		color: 'white',
		fontSize: 14,
		fontWeight: '400',
		lineHeight: 21,
	},
	createdAt: {
		color: 'white',
		fontSize: 10,
		fontWeight: '400',
		lineHeight: 15,
	},
});

export default NotificationItem;
