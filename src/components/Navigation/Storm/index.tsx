import React, { FC } from 'react';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { stormIcons } from '@metacraft/icons';
import AuthenticationBundle from 'components/AuthenticationBundle';
import { navigationHeight } from 'components/Navigation/shared';
import { iStyles } from 'utils/styles';

import { NavigationConfig, stormGateNav, stormNavigations } from '../shared';

import NavigationItem from './Item';

const { Dragon } = stormIcons;

export const StormNavigation: FC = () => {
	const onNavigate = async (item: NavigationConfig) => {
		await Linking.openURL(item.url as string);
	};

	return (
		<View style={styles.container}>
			<View style={[iStyles.contentContainer, styles.contentContainer]}>
				<TouchableOpacity
					style={styles.brandingIcon}
					onPress={() => onNavigate(stormGateNav)}
				>
					<Dragon size={18} />
				</TouchableOpacity>
				<View style={styles.navContainer}>
					{stormNavigations.map((item) => {
						return (
							<NavigationItem
								key={item.title}
								item={item}
								onNavigate={onNavigate}
							/>
						);
					})}
				</View>
				<AuthenticationBundle />
			</View>
		</View>
	);
};

export default StormNavigation;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0b0d12',
	},
	contentContainer: {
		flexDirection: 'row',
		paddingHorizontal: 15,
	},
	brandingIcon: {
		justifyContent: 'center',
		marginRight: 24,
		height: navigationHeight.storm,
	},
	navContainer: {
		flex: 1,
		flexDirection: 'row',
	},
});
