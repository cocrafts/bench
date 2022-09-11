import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import ThumbsUpNumber from '../../../components/ThumbsUpNumber';

interface Props {
	nbLikes: number;
	nbComments: number;
	isLiked: boolean;
}

const SocialRow: FC<Props> = ({
	nbLikes = 0,
	nbComments = 0,
	isLiked = false,
}: Props) => {
	return (
		<View style={styles.container}>
			<ThumbsUpNumber number={nbLikes} isLiked={isLiked} />
			<View style={styles.commentNumber}>
				<Text style={styles.commentNumberText}>
					{nbComments}{' '}
					{nbComments === 0 || nbComments === 1 ? 'Comment' : 'Comments'}
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
		fontSize: 10,
	},
});

export default memo(SocialRow);
