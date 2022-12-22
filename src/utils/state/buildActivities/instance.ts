import { proxy } from 'valtio';

export interface BuildAccount {
	id: string;
	name: string;
	avatarUrl: string;
}

export interface BuildDetail {
	url?: string;
	added?: string[];
	modified?: string[];
	history?: string[];
}

export interface BuildActivity {
	id: string;
	type: string;
	description?: string;
	reward: number;
	timestamp?: string;
	account?: BuildAccount;
	detail?: BuildDetail;
}

export interface ActivitySource {
	list: BuildActivity[];
	ready: boolean;
}

export type BuildState = {
	allActivity: ActivitySource;
	personalActivity: ActivitySource;
};

export const buildState = proxy<BuildState>({
	allActivity: {
		list: [],
		ready: false,
	},
	personalActivity: {
		list: [],
		ready: false,
	},
});
