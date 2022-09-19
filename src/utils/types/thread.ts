export type Thread = {
	name: string;
	avatarUrl: string;
	thread: string;
	nbLikes: number;
	nbComments: number;
	postedTime: string;
	id: string;
	isPinned: boolean;
	isFollowed: boolean;
	isLiked: boolean;
	replies: Array<Reply>;
};

export type Reply = {
	name: string;
	content: string;
	avatarUrl: string;
	postedTime: string;
	nbLikes?: number;
	originReply?: Reply;
};
