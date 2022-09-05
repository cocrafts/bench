import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import ControllerRow from '../../components/ControllerRow';
import { MAX_WIDTH } from '../../utils/constants';

export const DetailPostScreen: FC = () => {
	return (
		<View style={styles.container}>
			<ControllerRow />
		</View>
	);
};

export default DetailPostScreen;

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
