import { RootParamList } from 'stacks/shared';

export interface NavigationConfig {
	title: string;
	url?: string;
	route?: keyof RootParamList;
	params?: RootParamList[keyof RootParamList];
	active?: boolean;
}

export const stormGateNav = {
	title: 'StormGate',
	url: 'https://stormgate.io',
};

export const stormNavigations: NavigationConfig[] = [
	{
		title: 'Under Realm',
		url: 'https://underrealm.stormgate.io',
	},
	{
		title: 'Bench',
		url: 'https://bench.stormgate.io',
		active: true,
	},
	{
		title: 'Tokenomic',
		url: 'https://docs.stormgate.io/whitepaper/tokenomic',
	},
	{
		title: 'Lore',
		url: 'https://stormgate.substack.com/p/welcome-to-atem-world-adventurers',
	},
	{
		title: 'News',
		url: 'https://stormgate.substack.com/',
	},
	{
		title: 'Docs',
		url: 'https://docs.stormgate.io/',
	},
];

export const navigationHeight = {
	storm: 41,
	local: 39,
};
