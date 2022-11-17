import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { grey } from 'utils/colors';

import ThumbsUpNumber from '../../../components/ThumbsUpNumber';

interface Props {
	upCount?: number;
	commentCount?: number;
	isUpVoted?: boolean;
}

const SocialRow: FC<Props> = ({
	upCount = 0,
	commentCount = 0,
	isUpVoted = false,
}: Props) => {
	const commentText =
		commentCount === 0 || commentCount === 1 ? 'Comment' : 'Comments';
	return (
		<View style={styles.container}>
			<ThumbsUpNumber number={upCount} isLiked={isUpVoted} />
			<View style={styles.commentNumber}>
				<Text style={styles.commentNumberText}>
					{commentCount} {commentText}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	nameTimeContainer: {
		flexDirection: 'column',
		marginLeft: 6,
	},
	name: {
		fontWeight: '600',
		fontSize: 10,
		lineHeight: 15,
		color: 'white',
		fontFamily: 'Poppins',
	},
	dateDifference: {
		fontFamily: 'Poppins',
		fontWeight: '400',
		fontSize: 7,
		lineHeight: 10.5,
		color: 'rgba(255,255,255,0.8)',
	},
	commentNumber: {
		marginLeft: 14,
	},
	commentNumberText: {
		fontFamily: 'Poppins',
		fontWeight: '400',
		color: grey,
		fontSize: 13,
		lineHeight: 20,
	},
});

export default memo(SocialRow);
