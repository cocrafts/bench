import { Profile } from '../utils/types/graphql';

import { Thread } from './types/thread';
import { Notification } from './types';

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
		replies: [
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
			{
				name: 'Elon Musk',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl:
					'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
			},
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
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
		replies: [
			{
				name: 'meo',
				content:
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
				avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
				postedTime: '2022-09-01T10:17:28.593Z',
				nbLikes: 12,
				originReply: {
					name: 'Elon Musk',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
					avatarUrl:
						'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
					postedTime: '2022-09-01T10:17:28.593Z',
				},
			},
		],
	},
];

export const mockupNotifications: Array<Notification> = [
	{
		id: '1',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		content: 'commented on your post',
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '2',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		name: 'Goku',
		content: 'reacted to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: true,
	},
	{
		id: '3',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		name: 'Son Le',
		content: 'replied to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '4',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		content: 'commented on your post',
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '5',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		name: 'Goku',
		content: 'reacted to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: true,
	},
	{
		id: '6',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		name: 'Son Le',
		content: 'replied to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '7',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		content: 'commented on your post',
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '8',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		name: 'Goku',
		content: 'reacted to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: true,
	},
	{
		id: '9',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		name: 'Son Le',
		content: 'replied to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '10',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		content: 'commented on your post',
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '11',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		name: 'Goku',
		content: 'reacted to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: true,
	},
	{
		id: '12',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		name: 'Son Le',
		content: 'replied to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '1',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		content: 'commented on your post',
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '2',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		name: 'Goku',
		content: 'reacted to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: true,
	},
	{
		id: '3',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		name: 'Son Le',
		content: 'replied to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '4',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		content: 'commented on your post',
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '5',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		name: 'Goku',
		content: 'reacted to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: true,
	},
	{
		id: '6',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		name: 'Son Le',
		content: 'replied to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '7',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		content: 'commented on your post',
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '8',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		name: 'Goku',
		content: 'reacted to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: true,
	},
	{
		id: '9',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		name: 'Son Le',
		content: 'replied to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '10',
		avatarUrl: 'https://game8.vn/media/202101/images/4(8).jpg',
		name: 'Shinichi',
		content: 'commented on your post',
		postedTime: '2022-09-01T10:17:28.593Z',
		isRead: false,
	},
	{
		id: '11',
		avatarUrl:
			'https://static.game24h.vn/upload/2016/2016-4/2016-11-03/songoku.png',
		name: 'Goku',
		content: 'reacted to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: true,
	},
	{
		id: '12',
		avatarUrl: 'https://avatars.githubusercontent.com/u/11600914?v=4',
		name: 'Son Le',
		content: 'replied to your comment',
		postedTime: '2022-09-20T10:17:28.593Z',
		isRead: false,
	},
];
