import { proxy } from 'valtio';

import { userInfo } from '../../utils/mockupData';
import { Profile } from '../../utils/types/graphql';

export interface AppState {
	counter: number;
	user: Profile | null;
}

export const appState = proxy<AppState>({
	counter: 0,
	user: userInfo,
});

export const appActions = {
	increaseCounter: (): number => appState.counter++,
};
