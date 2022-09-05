import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserIcon from 'components/icons/feather/User';
import { useSnapshot } from 'valtio';

import Avatar from '../../../components/Avatar';
import BellIcon from '../../../components/icons/feather/Bell';
import SearchIcon from '../../../components/icons/feather/Search';
import { appState } from '../../../utils/state/app';

const ICON_SIZE = 22;
export const ControllerRow: FC = () => {
	const { user } = useSnapshot(appState);
	const navigation = useNavigation();

	const onPress = () => {
		if (!user) {
			navigation.navigate('SignIn');
		}
	};

	return (
		<View style={styles.container}>
			<SearchIcon size={ICON_SIZE} />
			<View style={styles.iconContainer}>
				<BellIcon size={ICON_SIZE} />
			</View>
			<View style={styles.iconContainer}>
				{user ? (
					<Avatar
						size={ICON_SIZE}
						userName={user.name || ''}
						uri={user.avatarUrl || ''}
					/>
				) : (
					<TouchableOpacity onPress={onPress}>
						<UserIcon size={ICON_SIZE} color={'#222222'} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default ControllerRow;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
	iconContainer: {
		marginLeft: 13,
	},
});
