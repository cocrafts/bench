import React, { FC, useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Modal,
	StyleSheet,
	View,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { StackParamList } from '../../../src/stack';
import ControllerRow from '../../components/ControllerRow';
import Post from '../../components/Post';
import { blackPearl } from '../../utils/colors';
import { MAX_WIDTH } from '../../utils/constants';
import { threads } from '../../utils/mockupData';
import { Thread } from '../../utils/types/thread';

import QuickThread from './QuickThread';

type DetailPostStackProp = NavigationProp<StackParamList, 'DetailPost'>;

export const BuildDashboard: FC = () => {
	const [simpleThreads, setSimpleThreads] = useState<Array<Thread>>([]);
	const navigation = useNavigation<DetailPostStackProp>();

	const onAvatarPress = () => {
		navigation.navigate('SignIn');
	};

	useEffect(() => {
		setTimeout(() => {
			setSimpleThreads(threads);
		}, 1000);
	}, []);

	return (
		<View>
			<Modal visible={false}>
				<View style={{ backgroundColor: 'white', flex: 1 }}></View>
			</Modal>
			<FlatList
				style={styles.container}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						<ControllerRow canGoBack={false} onAvatarPress={onAvatarPress} />
						<View style={styles.quickThreadContainer}>
							<QuickThread />
						</View>
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
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default BuildDashboard;

const styles = StyleSheet.create({
	footer: { height: 24 },
	activityIndicatorContainer: {
		marginTop: 24,
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
		marginTop: 46,
	},
	threadListContainer: {
		marginTop: 24,
	},
});
