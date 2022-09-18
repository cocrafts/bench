import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParamList } from 'src/stack';
import { useSnapshot } from 'valtio';

import UserIcon from '../../components/icons/feather/User';
import { grey } from '../../utils/colors';
import { appState } from '../../utils/state/app';
import Avatar from '../Avatar';
import BackIcon from '../icons/feather/Back';
import BellIcon from '../icons/feather/Bell';
import SearchIcon from '../icons/feather/Search';

const ICON_SIZE = 25;

interface Props {
	canGoBack?: boolean;
	onAvatarPress: () => void;
	onSearchPress: () => void;
}
type DashBoardStackProp = NavigationProp<StackParamList, 'Dashboard'>;

export const ControllerRow: FC<Props> = ({
	canGoBack = false,
	onAvatarPress,
	onSearchPress,
}: Props) => {
	const { user } = useSnapshot(appState);
	const navigation = useNavigation<DashBoardStackProp>();

	const goBack = () => navigation.goBack();
	const onNotificationPress = () => navigation.navigate('Notification');

	return (
		<View style={styles.container}>
			{canGoBack ? (
				<TouchableOpacity onPress={goBack}>
					<BackIcon size={36} color={grey} />
				</TouchableOpacity>
			) : (
				<View />
			)}
			<View style={styles.mainContainer}>
				<TouchableOpacity onPress={onSearchPress}>
					<SearchIcon size={ICON_SIZE} />{' '}
				</TouchableOpacity>

				<TouchableOpacity
					onPress={onNotificationPress}
					style={styles.iconContainer}
				>
					<BellIcon size={ICON_SIZE} isFilled={true} color={'white'} />
				</TouchableOpacity>
				<TouchableOpacity onPress={onAvatarPress} style={styles.iconContainer}>
					{user ? (
						<Avatar
							size={ICON_SIZE}
							userName={user.name || ''}
							uri={user.avatarUrl || ''}
						/>
					) : (
						<UserIcon size={ICON_SIZE} color={'white'} isFilled={true} />
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ControllerRow;

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	iconContainer: {
		marginLeft: 13,
	},
});
