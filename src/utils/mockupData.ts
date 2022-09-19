import { Profile } from '../utils/types/graphql';

import { Thread } from './types/thread';
import { Notification, NotificationType } from './types';

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
	{
		name: 'Goku',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		thread:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
		nbLikes: 1200,
		nbComments: 163,
		postedTime: '2022-09-01T10:17:28.593Z',
		id: '3',
		isPinned: false,
		isFollowed: true,
		isLiked: true,
	},
	{
		name: 'Shinichi',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		thread:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
		nbLikes: 1200,
		nbComments: 163,
		postedTime: '2022-09-01T10:17:28.593Z',
		id: '4',
		isPinned: false,
		isFollowed: true,
		isLiked: true,
	},
	{
		name: 'Son Le',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		thread:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
		nbLikes: 1200,
		nbComments: 163,
		postedTime: '2022-09-01T10:17:28.593Z',
		id: '5',
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
		id: '6',
		isPinned: false,
		isFollowed: false,
		isLiked: false,
	},
	{
		name: 'Goku',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		thread:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
		nbLikes: 1200,
		nbComments: 163,
		postedTime: '2022-09-01T10:17:28.593Z',
		id: '7',
		isPinned: false,
		isFollowed: true,
		isLiked: true,
	},
	{
		name: 'Shinichi',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		thread:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
		nbLikes: 1200,
		nbComments: 163,
		postedTime: '2022-09-01T10:17:28.593Z',
		id: '8',
		isPinned: false,
		isFollowed: true,
		isLiked: true,
	},
];

export const mockupNotifications: Array<Notification> = [
	{
		id: '1',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		type: NotificationType.comment,
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: true,
	},
];
