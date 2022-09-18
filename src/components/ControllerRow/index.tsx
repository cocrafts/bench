import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
export const ControllerRow: FC<Props> = ({
	canGoBack = false,
	onAvatarPress,
	onSearchPress,
}: Props) => {
	const { user } = useSnapshot(appState);
	const navigation = useNavigation();

	const goBack = () => navigation.goBack();

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

				<View style={styles.iconContainer}>
					<BellIcon size={ICON_SIZE} isFilled={true} color={'white'} />
				</View>
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
