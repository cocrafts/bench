import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSnapshot } from 'utils/hook';
import { accountState } from 'utils/state/account';

import Signed from './Signed';
import SignIn from './SignIn';

const commandSize = 32;
const styles = StyleSheet.create({
	container: {
		marginRight: 18,
		justifyContent: 'center',
	},
	loadingContainer: {
		width: commandSize,
		height: commandSize,
		marginRight: 4,
		borderRadius: commandSize / 2,
		backgroundColor: 'rgba(255, 255, 255, 0.05)',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const AuthenticationBundle: FC = () => {
	const { profile, loading } = useSnapshot(accountState);

	return (
		<View style={styles.container}>
			{loading ? (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size={commandSize - 6} />
				</View>
			) : profile?.address ? (
				<Signed profile={profile} />
			) : (
				<SignIn />
			)}
		</View>
	);
};

export default AuthenticationBundle;
