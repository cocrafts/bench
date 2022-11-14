import { accountState } from './account';

export const stateActions = {
	clearAll: () => {
		accountState.profile = {} as never;
	},
};
