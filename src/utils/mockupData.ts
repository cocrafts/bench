import { Profile } from '../utils/types/graphql';

import { Thread } from './types/thread';

const userId = '1412abcd';

export const userInfo: Profile = {
	id: userId,
	address: userId,
	name: 'Tinh Nguyen',
	avatarUrl: 'https://ca.slack-edge.com/T16AT245P-U027NNBM1A7-8cfc5e4a99a4-512',
	mineral: 0,
};

export const threads: Array<Thread> = [
	{
		name: 'Son Le',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		thread:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
		nbLikes: 1200,
		nbComments: 163,
		postedTime: '2022-09-01T10:17:28.593Z',
		id: '1',
		isPinned: true,
		isFollowed: true,
		isLiked: true,
	},
	{
		name: 'Tinh Nguyen',
		avatarUrl:
			'https://ca.slack-edge.com/T16AT245P-U027NNBM1A7-8cfc5e4a99a4-512',
		thread:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
		nbLikes: 13,
		nbComments: 12,
		postedTime: '2022-08-28T10:17:28.593Z',
		id: '2',
		isPinned: false,
		isFollowed: false,
		isLiked: false,
	},
];
