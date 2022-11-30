import {
	createNavigationContainerRef,
	LinkingOptions,
} from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

export const screenOptions: StackNavigationOptions = {
	headerShown: false,
	animationEnabled: false,
};

export interface BuildParamList {
	Dashboard: undefined;
}

export type RootParamList = {
	Dashboard: undefined;
	DetailPost: {
		id: string;
		comment?: boolean;
	};
	SignIn: undefined;
	Notification: undefined;
};

export const linking: LinkingOptions<RootParamList> = {
	prefixes: ['https://bench.stormgate.io'],
	config: {
		screens: {
			DetailPost: '/thread/:id',
			SignIn: '/signin',
			Notification: '/noti',
			Dashboard: '/',
		},
	},
};

export const navigationRef = createNavigationContainerRef<RootParamList>();

export const navigate = (
	name: keyof RootParamList,
	params?: RootParamList[keyof RootParamList],
): void => {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name as never, params as never);
	}
};
