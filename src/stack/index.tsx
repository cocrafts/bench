import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/Dashboard';

import { screenOptions } from './shared';

const Stack = createStackNavigator();

export const BuildStack: FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name="Dashboard" component={DashboardScreen} />
		</Stack.Navigator>
	);
};

export default BuildStack;
