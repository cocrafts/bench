import React, { FC } from 'react';
import { themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSnapshot } from 'utils/hook';

import DashboardScreen from '../screens/Dashboard';
import DetailPostScreen from '../screens/DetailPost';
import NotificationScreen from '../screens/Notification';
import SignInScreen from '../screens/SignIn';

import { linking, navigationRef, RootParamList, screenOptions } from './shared';

const Stack = createStackNavigator<RootParamList>();

export const BuildStack: FC = () => {
	const theme = useSnapshot(themeState);

	return (
		<NavigationContainer
			ref={navigationRef}
			theme={theme}
			linking={linking}
			documentTitle={{
				formatter: () => `Metacraft Bench - A Web3 game builder platform`,
			}}
		>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name="Dashboard" component={DashboardScreen} />
				<Stack.Screen name="DetailPost" component={DetailPostScreen} />
				<Stack.Screen name="SignIn" component={SignInScreen} />
				<Stack.Screen name="Notification" component={NotificationScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default BuildStack;
