import React, { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import CommentInput from 'components/CommentInput';
import { blackPearl } from 'utils/colors';

import ControllerRow from '../../components/ControllerRow';
import Post from '../../components/Post';
import { StackParamList } from '../../stack';
import { MAX_WIDTH } from '../../utils/constants';

type DetailPostStackProp = RouteProp<StackParamList, 'DetailPost'>;

interface Props {
	route?: DetailPostStackProp;
}

export const DetailPostScreen: FC<Props> = () => {
	const route = useRoute<DetailPostStackProp>();
	const {
		avatarUrl = '',
		name = '',
		postedTime = '',
		thread = '',
		nbLikes = 0,
		nbComments = 0,
		isPinned = false,
		isFollowed = false,
		isLiked = false,
		replies = [],
	} = route.params;

	return (
		<FlatList
			style={styles.container}
			showsVerticalScrollIndicator={false}
			ListHeaderComponent={
				<View>
					<ControllerRow canGoBack={true} />
					<View style={styles.postDetailContainer}>
						<Post
							avatarUrl={avatarUrl}
							name={name}
							postedTime={postedTime}
							thread={thread}
							nbLikes={nbLikes}
							nbComments={nbComments}
							isPinned={isPinned}
							isFollowed={isFollowed}
							isLiked={isLiked}
							isShortForm={false}
						/>
					</View>
				</View>
			}
			ListFooterComponent={
				<View style={styles.commentInputContainer}>
					<CommentInput containerStyle={styles.commentInput} />
				</View>
			}
			data={replies}
			renderItem={({ item }) => <Reply />}
		/>
	);
};

export default DetailPostScreen;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		paddingTop: 32,
		paddingHorizontal: 15,
		height: '100%',
	},
	quickThreadContainer: {
		marginTop: 46,
	},
	threadListContainer: {
		marginTop: 24,
	},
	postDetailContainer: {
		marginTop: 13,
	},
	commentInputContainer: {
		marginTop: 12,
	},
	commentInput: {
		backgroundColor: blackPearl,
	},
});
