import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

import ControllerRow from '../../components/ControllerRow';
import SearchModal from '../../components/SearchModal';
import { blackPearl, blue } from '../../utils/colors';
import { mockupNotifications } from '../../utils/mockupData';
import { Notification } from '../../utils/types';

interface Props {}

const NotificationScreen: FC<Props> = ({}: Props) => {
	const [notifications, setNotifications] = useState<Array<Notification>>([]);
	const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
	const onCloseSearchModal = () => setIsSearchModalVisible(false);
	const onSearchPress = () => setIsSearchModalVisible(true);

	useEffect(() => {
		setTimeout(() => {
			return setNotifications(mockupNotifications);
		}, 1000);
	}, []);

	return (
		<View style={styles.container}>
			<Modal visible={isSearchModalVisible} animationType={'slide'}>
				<SearchModal onCancelSearchModal={onCloseSearchModal} />
			</Modal>
			<ControllerRow
				bellIconColor={blue}
				canGoBack={true}
				onAvatarPress={function (): void {
					throw new Error('Function not implemented.');
				}}
				onSearchPress={onSearchPress}
			/>
			{notifications.length === 0 && (
				<View style={styles.activityIndicatorContainer}>
					<ActivityIndicator />
				</View>
			)}
			{/* <FlatList
				data={notifications}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData={selectedId}
			/> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: blackPearl,
		paddingTop: 32,
		paddingHorizontal: 16,
	},
	activityIndicatorContainer: {
		marginTop: 24,
	},
});

export default NotificationScreen;
