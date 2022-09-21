export type Notification = {
	id: string;
	avatarUrl: string;
	name: string;
	postedTime: string;
	type: NotificationType;
	isRead: boolean;
};

export enum NotificationType {
	comment = 'comment',
	react = 'react',
	reply = 'reply',
}
