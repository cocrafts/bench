import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSnapshot } from 'valtio';

import Avatar from '../../../components/avatar';
import BellIcon from '../../../components/icons/feather/Bell';
import SearchIcon from '../../../components/icons/feather/Search';
import { appState } from '../../../utils/state/app';

const ICON_SIZE = 29;
export const ControllerRow: FC = () => {
	const { user } = useSnapshot(appState);

	return (
		<View style={styles.container}>
			<SearchIcon size={ICON_SIZE} />
			<View style={styles.iconContainer}>
				<BellIcon size={ICON_SIZE} />
			</View>
			<View style={styles.iconContainer}>
				{user && (
					<Avatar
						size={ICON_SIZE}
						userName={user.firstName}
						uri={user.avatarUrl}
					/>
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
