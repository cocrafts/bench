import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import UserIcon from 'components/icons/feather/User';
import { useSnapshot } from 'valtio';

import Avatar from '../../../components/Avatar';
import BellIcon from '../../../components/icons/feather/Bell';
import SearchIcon from '../../../components/icons/feather/Search';
import { threads } from '../../../utils/mockupData';
import { appState } from '../../../utils/state/app';
import { Thread } from '../../../utils/types/thread';

import ThreadItem from './ThreadItem';

const ICON_SIZE = 29;
export const ThreadList: FC = () => {
	const [simpleThreads, setSimpleThreads] = useState<Array<Thread>>([]);

	useEffect(() => {
		setTimeout(() => {
			setSimpleThreads(threads);
		}, 1000);
	}, []);

	if (simpleThreads.length === 0) {
		return <ActivityIndicator />;
	}

	return (
		<FlatList
			data={simpleThreads}
			renderItem={({ item }) => (
				<ThreadItem
					avatarUrl={item.avatarUrl}
					name={item.name}
					postedTime={item.postedTime}
					thread={item.thread}
					nbLikes={item.nbLikes}
					nbComments={item.nbComments}
					isPinned={item.isPinned}
					isFollowed={item.isFollowed}
				/>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default ThreadList;

const styles = StyleSheet.create({});
