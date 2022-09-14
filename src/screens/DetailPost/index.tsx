import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import { blackPearl } from 'utils/colors';

import ControllerRow from '../../components/ControllerRow';
import Post from '../../components/Post';
import { StackParamList } from '../../stack';
import { MAX_WIDTH } from '../../utils/constants';

type DetailPostStackRouteProp = RouteProp<StackParamList, 'DetailPost'>;
type DetailPostNavigationProp = NavigationProp<StackParamList, 'DetailPost'>;
interface Props {
	route?: DetailPostStackRouteProp;
}

export const DetailPostScreen: FC<Props> = () => {
	const route = useRoute<DetailPostStackRouteProp>();
	const navigation = useNavigation<DetailPostNavigationProp>();

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
	} = route.params;

	const onAvatarPress = () => {
		navigation.navigate('SignIn');
	};

	return (
		<View style={styles.container}>
			<ControllerRow canGoBack={true} onAvatarPress={onAvatarPress} />
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
	);
};

export default DetailPostScreen;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		paddingTop: 32,
		paddingHorizontal: 15,
		backgroundColor: blackPearl,
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
});
