import React, { FC, useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Modal,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { Text } from '@metacraft/ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SearchModal from 'components/SearchModal';

import { StackParamList } from '../../../src/stack';
import ControllerRow from '../../components/ControllerRow';
import Post from '../../components/Post';
import { blackPearl, blueWhale, grey } from '../../utils/colors';
import { MAX_WIDTH } from '../../utils/constants';
import { threads } from '../../utils/mockupData';
import { Thread } from '../../utils/types/thread';

import NewsFeedTypingModal from './NewsFeedTypingModal';

type DetailPostStackProp = NavigationProp<StackParamList, 'DetailPost'>;

export const BuildDashboard: FC = () => {
	const [simpleThreads, setSimpleThreads] = useState<Array<Thread>>([]);
	const navigation = useNavigation<DetailPostStackProp>();
	const [isQuickThreadModalVisible, setIsQuickThreadModalVisible] =
		useState(false);
	const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
	const onAvatarPress = () => {
		navigation.navigate('SignIn');
	};

	const onQuickThreadPress = () => {
		setIsQuickThreadModalVisible(true);
	};

	const onCloseModal = () => {
		setIsQuickThreadModalVisible(false);
	};

	const onPostPress = () => {
		setIsQuickThreadModalVisible(false);
	};

	useEffect(() => {
		setTimeout(() => {
			setSimpleThreads(threads);
		}, 1000);
	}, []);

	const onSearchPress = () => {
		setIsSearchModalVisible(true);
	};
	const onCloseSearchModal = () => {
		setIsSearchModalVisible(false);
	};

	return (
		<View style={styles.mainContainer}>
			<FlatList
				style={styles.container}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						<Modal visible={isQuickThreadModalVisible} animationType={'slide'}>
							<NewsFeedTypingModal
								onPostPress={onPostPress}
								onClosePress={onCloseModal}
							/>
						</Modal>
						<Modal visible={isSearchModalVisible} animationType={'slide'}>
							<SearchModal onCancelSearchModal={onCloseSearchModal} />
						</Modal>
						<ControllerRow
							canGoBack={false}
							onAvatarPress={onAvatarPress}
							onSearchPress={onSearchPress}
						/>
						<TouchableOpacity
							style={styles.quickThreadContainer}
							onPress={onQuickThreadPress}
						>
							<Text style={styles.placeHolderText}>
								What{"'"}s your thoughts
							</Text>
						</TouchableOpacity>
						<View style={styles.activityIndicatorContainer}>
							{simpleThreads.length === 0 && <ActivityIndicator />}
						</View>
					</View>
				}
				ListFooterComponent={<View style={styles.footer} />}
				data={simpleThreads}
				renderItem={({ item }) => (
					<Post
						avatarUrl={item.avatarUrl}
						name={item.name}
						postedTime={item.postedTime}
						thread={item.thread}
						nbLikes={item.nbLikes}
						nbComments={item.nbComments}
						isPinned={item.isPinned}
						isFollowed={item.isFollowed}
						isLiked={item.isLiked}
						replies={item.replies}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default BuildDashboard;

const styles = StyleSheet.create({
	placeHolderText: {
		color: grey,
		fontSize: 16,
		fontWeight: '400',
	},
	footer: { height: 24 },
	activityIndicatorContainer: {
		marginTop: 5,
	},
	container: {
		width: '100%',
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		paddingTop: 32,
		paddingHorizontal: 15,
		backgroundColor: blackPearl,
	},
	quickThreadContainer: {
		marginTop: 10,
		backgroundColor: blueWhale,
		justifyContent: 'center',
		paddingLeft: 15,
		paddingVertical: 14,
		borderRadius: 10,
	},
	mainContainer: { flex: 1, alignItems: 'center', backgroundColor: blackPearl },
});
