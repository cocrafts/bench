import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '@metacraft/ui';
import Avatar from 'components/Avatar';
import { shortenAddress } from 'utils/helper';
import { Profile } from 'utils/types';

import { styles } from './internal';

interface Props {
	profile: Profile;
	onPress?: () => void;
	onAvatarPress?: () => void;
}

export const Account: FC<Props> = ({ profile, onPress, onAvatarPress }) => {
	const { address, name, avatarUrl } = profile;

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			style={styles.container}
		>
			<View style={styles.infoContainer}>
				<Text style={styles.primaryText}>{name}</Text>
				<Text style={styles.secondaryText}>
					{shortenAddress(address as string)}
				</Text>
			</View>
			<Avatar
				imageUri={avatarUrl as string}
				characters={address}
				onPress={onAvatarPress}
			/>
		</TouchableOpacity>
	);
};

export default Account;
