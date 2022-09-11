import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CloseIcon from '../../../components/icons/feather/Close';
import { gray } from '../../../utils/colors';

const Header = () => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.goBack();
	};

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.signInText}>Sign-in</Text>
			</View>
			<View style={styles.closeIconContainer}>
				<CloseIcon size={16} color={gray} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		position: 'absolute',
		alignSelf: 'center',
	},
	signInText: {
		fontFamily: 'Poppins',
		fontWeight: '400',
		fontSize: 20,
	},
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 44,
	},
	closeIconContainer: {
		position: 'absolute',
		right: 0,
	},
});

export default Header;
