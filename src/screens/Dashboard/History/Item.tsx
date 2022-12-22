import React, { FC } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';
import Avatar from 'components/Avatar';
import { day, formatNumber } from 'utils/helper';
import { BuildActivity } from 'utils/state/buildActivities';

export interface ItemProps {
	index: number;
	item: BuildActivity;
	continued?: boolean;
	willContinue?: boolean;
	dayContinued?: boolean;
}

export const BuildItem: FC<ItemProps> = ({
	item,
	continued,
	willContinue,
	dayContinued,
}) => {
	const innerContainerStyle = [
		styles.innerContainer,
		willContinue && styles.willContinueInner,
		continued && styles.continuedInner,
	];

	return (
		<>
			{!dayContinued && (
				<Text style={styles.daySeparator}>
					{day(item.timestamp).format('MMM DD, YYYY')}
				</Text>
			)}
			<View
				style={[styles.container, willContinue && styles.continuedContainer]}
			>
				{!continued && (
					<Avatar
						style={styles.avatar}
						size={36}
						imageUri={item.account?.avatarUrl}
						characters={item.account?.name}
					/>
				)}
				<View style={innerContainerStyle}>
					<Text
						onPress={() => Linking.openURL(item.detail?.url || '/')}
						style={styles.author}
					>
						<Text style={styles.altText}>{item.account?.name} </Text>
						{item.type} {'->'} {formatNumber(item.reward)} Shards
					</Text>
					<Text numberOfLines={2} style={styles.description}>
						{item.description}
					</Text>
					<Text style={styles.timestamp}>{day(item.timestamp).fromNow()}</Text>
				</View>
			</View>
		</>
	);
};

export default BuildItem;

const avatarSize = 38;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderLeftWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.05)',
		marginLeft: avatarSize / 2,
		paddingLeft: 14,
		paddingBottom: 16,
	},
	continuedContainer: {
		paddingBottom: 0,
	},
	daySeparator: {
		fontFamily: 'JetBrains Mono',
		color: '#FFFFFF',
		fontSize: 16,
		marginTop: 8,
		marginBottom: 18,
	},
	avatar: {
		position: 'absolute',
		top: 6,
		left: -(avatarSize / 2),
	},
	innerContainer: {
		flex: 1,
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginLeft: 8,
		borderRadius: 8,
		borderTopWidth: 1,
		borderColor: 'transparent',
		backgroundColor: 'rgba(0, 0, 0, 0.12)',
	},
	continuedInner: {
		borderColor: 'rgba(255, 255, 255, 0.03)',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
	},
	willContinueInner: {
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	author: {
		color: '#555555',
		fontFamily: 'JetBrains Mono',
		fontSize: 11,
	},
	description: {
		color: '#FFFFFF',
		fontFamily: 'JetBrains Mono',
		fontWeight: '200',
		fontSize: 12,
		lineHeight: 18,
	},
	timestamp: {
		color: '#555555',
		fontFamily: 'JetBrains Mono',
		fontSize: 11,
		marginTop: 4,
	},
	altText: {
		color: '#DEDEDE',
	},
});
