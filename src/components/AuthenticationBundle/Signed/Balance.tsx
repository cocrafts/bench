import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from '@metacraft/ui';
import EyeIcon from 'components/icons/feather/Eye';
import EyeClosedIcon from 'components/icons/feather/EyeClosed';
import { formatNumber, memiToUSD } from 'utils/helper';
import { useSnapshot } from 'utils/hook';
import resources from 'utils/resources';
import { appActions, appState } from 'utils/state/app';
import { Profile } from 'utils/types';

import { styles } from './internal';

interface Props {
	profile: Profile;
}

export const Balance: FC<Props> = ({ profile }) => {
	const { mineral } = profile;
	const { privacy } = useSnapshot(appState);

	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<View style={styles.inlineContainer}>
					<Image style={styles.inlineIcon} source={resources.icons.shard} />
					<Text style={styles.primaryText}>
						{privacy ? '....... ' : formatNumber(mineral)}
					</Text>
				</View>
				<Text style={styles.secondaryText}>
					{privacy ? 'SECRET' : `${formatNumber(memiToUSD(mineral))} USD`}
				</Text>
			</View>
			<TouchableOpacity
				style={styles.commandContainer}
				onPress={() => appActions.setPrivacy(!privacy)}
			>
				{privacy ? (
					<EyeIcon size={20} style={{ marginTop: 10 }} />
				) : (
					<EyeClosedIcon size={20} />
				)}
			</TouchableOpacity>
		</View>
	);
};

export default Balance;
