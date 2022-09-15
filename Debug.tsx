import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

export const Debug: FC = () => {
	return (
		<View style={styles.container}>
			<Text>Debug</Text>
		</View>
	);
};

export default Debug;

const styles = StyleSheet.create({
	container: {

	},
});
