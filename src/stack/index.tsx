import React, { FC, useCallback } from 'react';
import { fantasyTheme, themeActions } from '@metacraft/ui';
import { useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/Dashboard';

import { screenOptions } from './shared';

const Stack = createStackNavigator();

export const BuildStack: FC = () => {
	useFocusEffect(
		useCallback(() => {
			themeActions.setTheme(fantasyTheme);
		}, []),
	);

	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name="Dashboard" component={DashboardScreen} />
		</Stack.Navigator>
	);
};

export default BuildStack;
