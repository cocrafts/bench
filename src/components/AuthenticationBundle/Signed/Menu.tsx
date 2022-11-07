import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Hyperlink, modalActions, Text, themeState } from '@metacraft/ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSnapshot } from 'utils/hook';
import { signOut } from 'utils/lib';

export const SignedMenu: FC = () => {
	const { colors } = useSnapshot(themeState);
	const { disconnect } = useWallet();

	const innerSignOut = async () => {
		await signOut();
		await disconnect();
		modalActions.hide('signedOptions');
	};

	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<Text style={styles.heading}>Signed Menu</Text>
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
