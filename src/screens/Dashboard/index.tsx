import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import Post from '../../components/Post';
import { MAX_WIDTH } from '../../utils/constants';
import { threads } from '../../utils/mockupData';
import { Thread } from '../../utils/types/thread';

import ControllerRow from './ControllerRow';
import QuickThread from './QuickThread';

export const BuildDashboard: FC = () => {
	const [simpleThreads, setSimpleThreads] = useState<Array<Thread>>([]);

	useEffect(() => {
		setTimeout(() => {
			setSimpleThreads(threads);
		}, 1000);
	}, []);

	return (
		<FlatList
			style={styles.container}
			showsVerticalScrollIndicator={false}
			ListHeaderComponent={
				<View>
					<ControllerRow />
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
					replies={item.replies}
				/>
			)}
			keyExtractor={(item) => item.id}
		/>
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
	},
	quickThreadContainer: {
		marginTop: 46,
	},
	threadListContainer: {
		marginTop: 24,
	},
});
