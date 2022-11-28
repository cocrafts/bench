import React, { FC, useCallback } from 'react';
import { fantasyTheme, themeActions } from '@metacraft/ui';
import { useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Thread } from 'utils/types';

import DashboardScreen from '../screens/Dashboard';
import DetailPostScreen from '../screens/DetailPost';
import NotificationScreen from '../screens/Notification';
import SignInScreen from '../screens/SignIn';

import { screenOptions } from './shared';

export type StackParamList = {
	Dashboard: undefined;
	DetailPost: {
		item: Thread;
		autoFocus?: boolean;
	};
	SignIn: undefined;
	Notification: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const BuildStack: FC = () => {
	useFocusEffect(
		useCallback(() => {
			themeActions.setTheme(fantasyTheme);
		}, []),
	);

	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name="Dashboard" component={DashboardScreen} />
			<Stack.Screen name="DetailPost" component={DetailPostScreen} />
			<Stack.Screen name="SignIn" component={SignInScreen} />
			<Stack.Screen name="Notification" component={NotificationScreen} />
		</Stack.Navigator>
	);
};

export default BuildStack;
