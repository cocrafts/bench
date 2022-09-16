import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/';
import { StackParamList } from 'src/stack';
import { appActions } from 'utils/actions';

import { blackPearl } from '../../utils/colors';
import { MAX_WIDTH } from '../../utils/constants';

import MainButton from './Button';
import Header from './Header';
const windowHeight = Dimensions.get('window').height;

const SignInScreen = () => {
	const navigation = useNavigation<StackNavigationProp<StackParamList>>();

	const onPress = () => {
		appActions.signIn();
		navigation.replace('Dashboard');
	};
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.contentContainer}>
				<Text style={styles.titleText}>Simple Sign-in</Text>
				<View style={styles.buttonContainer}>
					<MainButton text="Sign-in with Google" onPress={onPress} />
				</View>
				<Text style={[styles.titleText, styles.walletSignIn]}>
					Wallet Sign-in
				</Text>
				<View style={styles.buttonContainer}>
					<MainButton text="Phantom" onPress={onPress} />
				</View>
				<View style={styles.buttonContainer}>
					<MainButton text="Solflare" onPress={onPress} />
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
		backgroundColor: blackPearl,
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
