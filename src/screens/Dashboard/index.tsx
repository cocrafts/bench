import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import QuickThread from './QuickThread';

export const BuildDashboard: FC = () => {
	return (
		<View style={styles.container}>
			<QuickThread />
		</View>
	);
};

export default BuildDashboard;

const styles = StyleSheet.create({
	container: {},
});
