import React, { FC, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';

import ControllerRow from '../../components/ControllerRow';
import Post from '../../components/Post';
import SearchModal from '../../components/SearchModal';
import { StackParamList } from '../../stack';
import { blackPearl } from '../../utils/colors';
import { MAX_WIDTH } from '../../utils/constants';

type DetailPostStackRouteProp = RouteProp<StackParamList, 'DetailPost'>;
type DetailPostNavigationProp = NavigationProp<StackParamList, 'DetailPost'>;
interface Props {
	route?: DetailPostStackRouteProp;
}

export const DetailPostScreen: FC<Props> = () => {
	const route = useRoute<DetailPostStackRouteProp>();
	const navigation = useNavigation<DetailPostNavigationProp>();
	const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

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

	const onCloseSearchModal = () => {
		setIsSearchModalVisible(false);
	};

	const onSearchPress = () => {
		setIsSearchModalVisible(true);
	};

	return (
		<View style={styles.container}>
			<Modal visible={isSearchModalVisible} animationType={'slide'}>
				<SearchModal onCancelSearchModal={onCloseSearchModal} />
			</Modal>
			<ControllerRow
				canGoBack={true}
				onAvatarPress={onAvatarPress}
				onSearchPress={onSearchPress}
			/>
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
