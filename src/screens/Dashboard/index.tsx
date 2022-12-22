import React, { FC, useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	ImageBackground,
	Linking,
	Modal,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { dimensionState, Text } from '@metacraft/ui';
import ScrollLayout from 'components/layouts/Scroll';
import Post from 'components/Post';
import SearchModal from 'components/SearchModal';
import { blackPearl, blueWhale, grey, midnightDream } from 'utils/colors';
import * as queries from 'utils/graphql/query';
import { onEdit } from 'utils/helper';
import { useBuildActivities, useSnapshot } from 'utils/hook';
import { threads } from 'utils/mockupData';
import resources from 'utils/resources';
import { iStyles } from 'utils/styles';
import { Thread } from 'utils/types/thread';

import BuildHistory from './History';

export const BuildDashboard: FC = () => {
	const buildActivities = useBuildActivities();
	const [simpleThreads, setSimpleThreads] = useState<Array<Thread>>([]);
	const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
	const { windowSize } = useSnapshot(dimensionState);
	const isHidingBuildHistory = windowSize.width < 1280 ? true : false;
	const { data, loading } = useQuery(queries.feedThreads);

	const onQuickThreadPress = () => {
		onEdit({
			isThreadEditing: true,
		});
	};

	const onCloseSearchModal = () => {
		setIsSearchModalVisible(false);
	};

	const onStartedPress = () => {
		Linking.openURL('https://docs.stormgate.io/guide/community/bench');
	};

	useEffect(() => {
		setTimeout(() => {
			setSimpleThreads(threads);
		}, 1000);
	}, []);

	return (
		<ScrollLayout
			style={styles.mainContainer}
			contentContainerStyle={{ width: '100%' }}
		>
			<ImageBackground
				source={resources.bannerBackground}
				style={styles.bannerContainer}
			>
				<Text style={styles.bannerTitle}>Welcome to Metacraft Bench</Text>
				<Text style={styles.bannerSubText}>
					A virtual game-centric social collaboration platform where Game devs,
					devs, Fictional storytellers, artists, or simply anyone interested in
					joining opensource game development process
				</Text>
			</ImageBackground>
			<View style={[iStyles.contentContainer, styles.rowContainer]}>
				<FlatList
					style={styles.container}
					showsVerticalScrollIndicator={false}
					ListHeaderComponent={
						<View>
							<Modal visible={isSearchModalVisible} animationType={'slide'}>
								<SearchModal onCancelSearchModal={onCloseSearchModal} />
							</Modal>
							<TouchableOpacity
								style={styles.quickThreadContainer}
								onPress={onQuickThreadPress}
							>
								<Text style={styles.placeHolderText}>
									What{"'"}s your thoughts
								</Text>
							</TouchableOpacity>
							<View style={styles.activityIndicatorContainer}>
								{loading && <ActivityIndicator />}
							</View>
						</View>
					}
					ListFooterComponent={<View style={styles.footer} />}
					data={data?.feedThreads}
					renderItem={({ item }) => <Post item={item} />}
					keyExtractor={(item) => item.id}
				/>
				{!isHidingBuildHistory && (
					<View style={styles.buildHistoryContainer}>
						<View style={styles.titleBackground}>
							<TouchableOpacity onPress={onStartedPress}>
								<Text style={styles.buildHistoryTitle}>
									🎓 How to get started
								</Text>
							</TouchableOpacity>
						</View>
						<Text style={[styles.titleBackground, styles.buildHistoryTitle]}>
							🎬 Build Activities
						</Text>
						<BuildHistory
							data={buildActivities}
							style={{ height: windowSize.height }}
						/>
					</View>
				)}
			</View>
		</ScrollLayout>
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
		paddingTop: 32,
		paddingHorizontal: 15,
		backgroundColor: blackPearl,
	},
	quickThreadContainer: {
		backgroundColor: blueWhale,
		justifyContent: 'center',
		paddingLeft: 15,
		paddingVertical: 14,
		borderRadius: 10,
	},
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: blackPearl,
		width: '100%',
	},
	bannerContainer: {
		paddingVertical: 40,
		paddingHorizontal: 15,
		alignItems: 'center',
	},
	bannerTitle: {
		fontSize: 30,
		fontWeight: '600',
		marginBottom: 10,
	},
	bannerSubText: {
		maxWidth: 800,
		textAlign: 'center',
	},
	rowContainer: {
		flexDirection: 'row',
	},
	buildHistoryContainer: {
		width: 300,
		marginTop: 32,
		marginRight: 15,
		marginLeft: 40,
	},
	titleBackground: {
		backgroundColor: midnightDream,
		borderRadius: 5,
		marginBottom: 15,
	},
	buildHistoryTitle: {
		padding: 15,
		fontWeight: '500',
	},
});
