import React, { FC, useCallback } from 'react';
import { fantasyTheme, themeActions } from '@metacraft/ui';
import { useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/Dashboard';
import DetailPostScreen from '../screens/DetailPost';
import SignInScreen from '../screens/SignIn';
import { Reply } from '../utils/types/thread';

import { screenOptions } from './shared';

export type StackParamList = {
	Dashboard: undefined;
	DetailPost: {
		avatarUrl: string;
		name: string;
		postedTime: string;
		thread: string;
		nbLikes: number;
		nbComments: number;
		isPinned: boolean;
		isFollowed: boolean;
		isLiked: boolean;
		replies?: Array<Reply>;
	};
	SignIn: undefined;
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
		</Stack.Navigator>
	);
};

export default BuildStack;
