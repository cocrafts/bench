import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { MAX_WIDTH } from '../../utils/constants';
import { threads } from '../../utils/mockupData';
import { Thread } from '../../utils/types/thread';

import ControllerRow from './ControllerRow';
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
