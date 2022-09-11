import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import ControllerRow from '../../components/ControllerRow';
import { MAX_WIDTH } from '../../utils/constants';

import QuickThread from './QuickThread';
import ThreadList from './ThreadList';

export const BuildDashboard: FC = () => {
	return (
		<View style={styles.container}>
			<ControllerRow />
			<View style={styles.quickThreadContainer}>
				<QuickThread />
			</View>
			<View style={styles.threadListContainer}>
				<ThreadList />
			</View>
		</View>
	);
};

export default BuildDashboard;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: MAX_WIDTH,
		alignSelf: 'center',
		paddingTop: 32,
		paddingHorizontal: 15,
	},
	quickThreadContainer: {
		marginTop: 46,
	},
	threadListContainer: {
		marginTop: 24,
	},
});
