import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootParamList } from 'stacks/shared';
import { lightBlueWhale } from 'utils/colors';
import { iStyles } from 'utils/styles';

type StackProp = NavigationProp<RootParamList>;

const InternalNav = () => {
	const navigation = useNavigation<StackProp>();
	const onBenchLogoPress = () => navigation.navigate('Dashboard');

	return (
		<View style={styles.container}>
			<View style={[iStyles.contentContainer, { paddingHorizontal: 15 }]}>
				<TouchableOpacity onPress={onBenchLogoPress} activeOpacity={0.7}>
					<Text style={styles.benchLogo}>Metacraft Bench</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default InternalNav;

const styles = StyleSheet.create({
	container: {
		backgroundColor: lightBlueWhale,
		paddingVertical: 10,
	},
	benchLogo: {
		fontSize: 26,
		fontWeight: '600',
	},
});
