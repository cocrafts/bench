import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import { MAX_WIDTH } from '../../utils/constants';

import MainButton from './Button';
import Header from './Header';
const windowHeight = Dimensions.get('window').height;

const SignInScreen = () => {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.contentContainer}>
				<Text style={styles.titleText}>Simple Sign-in</Text>
				<View style={styles.buttonContainer}>
					<MainButton text="Sign-in with Google" />
				</View>
				<Text style={[styles.titleText, styles.walletSignIn]}>
					Wallet Sign-in
				</Text>
				<View style={styles.buttonContainer}>
					<MainButton text="Phantom" />
				</View>
				<View style={styles.buttonContainer}>
					<MainButton text="Solflare" />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		paddingTop: 32,
		paddingHorizontal: 15,
		height: '100%',
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: windowHeight / 3,
	},
	titleText: {
		fontSize: 16,
		fontFamily: 'Poppins',
		fontWeight: '400',
		color: 'rgba(255,255,255,0.5)',
	},
	buttonContainer: {
		marginTop: 6,
		width: '100%',
	},
	walletSignIn: {
		marginTop: 40,
	},
});

export default SignInScreen;
