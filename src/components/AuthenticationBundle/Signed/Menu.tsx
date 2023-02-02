import React, { FC } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import {
	Hyperlink,
	modalActions,
	ModalConfigs,
	Text,
	themeState,
} from '@metacraft/ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSnapshot } from 'utils/hook';
import { signOut } from 'utils/lib';
import { accountState } from 'utils/state/account';

interface Props {
	config: ModalConfigs;
}

export const SignedMenu: FC<Props> = ({ config }) => {
	const { colors } = useSnapshot(themeState);
	const { profile } = useSnapshot(accountState);
	const { disconnect } = useWallet();

	const innerSignOut = async () => {
		await signOut();
		await disconnect();
		modalActions.hide(config.id as string);
	};

	const onMyProfilePress = () => {
		Linking.openURL(`https://stormgate.io/profile/${profile.address}`);
		modalActions.hide(config.id as string);
	};

	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<Text style={styles.heading}>Signed Menu</Text>
			<Hyperlink
				style={styles.hyperLink}
				onPress={onMyProfilePress}
				title="My Profile"
			/>
			<Hyperlink
				style={styles.hyperLink}
				onPress={innerSignOut}
				title="Sign Out"
			/>
		</View>
	);
};

export default SignedMenu;

const styles = StyleSheet.create({
	container: {
		minWidth: 120,
		backgroundColor: 'rgba(255, 255, 255, 0.05)',
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 18,
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.025)',
	},
	heading: {
		fontSize: 11,
		color: 'rgba(255, 255, 255, 0.5)',
		textAlign: 'center',
		marginVertical: 6,
	},
	hyperLink: {
		fontSize: 11,
		textAlign: 'center',
		marginVertical: 6,
	},
});
