export * from './graphql';

export type Notification = {
	id: string;
	avatarUrl: string;
	name: string;
	postedTime: string;
	content: string;
	isRead: boolean;
};
