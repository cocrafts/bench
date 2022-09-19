import { userInfo } from '../../utils/mockupData';
import { appState } from '../../utils/state/app';

export const appActions = {
	signIn: () => (appState.user = userInfo),
};
