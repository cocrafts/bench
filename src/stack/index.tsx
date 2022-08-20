import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/Dashboard';

const Stack = createStackNavigator();

export const BuildStack: FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Dashboard" component={DashboardScreen} />
		</Stack.Navigator>
	);
};

export default BuildStack;
