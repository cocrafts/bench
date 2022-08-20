import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

export const BuildDashboard: FC = () => {
	return (
		<View style={styles.container}>
			<Text>BuildDashboard</Text>
		</View>
	);
};

export default BuildDashboard;

const styles = StyleSheet.create({
	container: {},
});
