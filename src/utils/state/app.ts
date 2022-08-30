import { proxy } from 'valtio';

import { userInfo } from '../../utils/mockupData';
import { User } from '../../utils/type';

export interface AppState {
	counter: number;
	user: User | null;
}

export const appState = proxy<AppState>({
	counter: 0,
	user: userInfo,
});

export const appActions = {
	increaseCounter: (): number => appState.counter++,
};
