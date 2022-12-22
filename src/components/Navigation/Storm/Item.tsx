import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@metacraft/ui';
import { navigationHeight } from 'components/Navigation/shared';

import { NavigationConfig } from '../shared';

interface Props {
	item: NavigationConfig;
	onNavigate?: (item: NavigationConfig) => void;
}

export const NavigationItem: FC<Props> = ({ item, onNavigate }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => onNavigate?.(item)}
		>
			<Text style={styles.title}>{item.title}</Text>
		</TouchableOpacity>
	);
};

export default NavigationItem;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 9,
		paddingHorizontal: 9,
		justifyContent: 'center',
		height: navigationHeight.storm,
	},
	title: {
		color: '#BBBBBB',
	},
});
