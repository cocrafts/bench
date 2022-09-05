import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import UserIcon from 'components/icons/feather/User';
import { useSnapshot } from 'valtio';

import { appState } from '../../utils/state/app';
import Avatar from '../Avatar';
import BellIcon from '../icons/feather/Bell';
import SearchIcon from '../icons/feather/Search';

const ICON_SIZE = 22;

interface Props {
	canGoBack?: boolean;
}
export const ControllerRow: FC = ({ canGoBack = false }: Props) => {
	const { user } = useSnapshot(appState);

	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
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
						<UserIcon size={ICON_SIZE} color={'#222222'} />
					)}
				</View>
			</View>
		</View>
	);
};

export default ControllerRow;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	iconContainer: {
		marginLeft: 13,
	},
});
