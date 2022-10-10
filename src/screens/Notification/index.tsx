import React, { FC, useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Modal,
	StyleSheet,
	View,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParamList } from 'src/stack';

import ControllerRow from '../../components/ControllerRow';
import SearchModal from '../../components/SearchModal';
import { blackPearl, blue } from '../../utils/colors';
import { MAX_WIDTH } from '../../utils/constants';
import { mockupNotifications } from '../../utils/mockupData';
import { Notification } from '../../utils/types';

import NotificationItem from './NotificationItem';

type NotificationStackProp = NavigationProp<StackParamList, 'Notification'>;

const NotificationScreen: FC = () => {
	const navigation = useNavigation<NotificationStackProp>();
	const [notifications, setNotifications] = useState<Array<Notification>>([]);
	const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
	const onCloseSearchModal = () => setIsSearchModalVisible(false);
	const onSearchPress = () => setIsSearchModalVisible(true);
	const onAvatarPress = () => {
		navigation.navigate('SignIn');
	};
	useEffect(() => {
		setTimeout(() => {
			return setNotifications(mockupNotifications);
		}, 1000);
	}, []);

	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<Modal visible={isSearchModalVisible} animationType={'slide'}>
					<SearchModal onCancelSearchModal={onCloseSearchModal} />
				</Modal>
				<View style={styles.controllerRowContainer}>
					<ControllerRow
						bellIconColor={blue}
						canGoBack={true}
						onAvatarPress={onAvatarPress}
						onSearchPress={onSearchPress}
					/>
				</View>

				{notifications.length === 0 && (
					<View style={styles.activityIndicatorContainer}>
						<ActivityIndicator />
					</View>
				)}
				<FlatList
					style={styles.flatList}
					data={notifications}
					renderItem={({ item }) => (
						<NotificationItem
							avatarUrl={item.avatarUrl}
							name={item.name}
							content={item.content}
							postedTime={item.postedTime}
							isRead={item.isRead}
						/>
					)}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: blackPearl,
	},
	flatList: {
		marginTop: 11,
	},
	controllerRowContainer: {
		paddingHorizontal: 16,
	},
	container: {
		flex: 1,
		backgroundColor: blackPearl,
		paddingTop: 32,
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		width: '100%',
	},
	activityIndicatorContainer: {
		marginTop: 24,
	},
});

export default NotificationScreen;
