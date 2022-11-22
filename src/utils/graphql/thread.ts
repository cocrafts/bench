import { accountState } from 'utils/state/account';
import { Thread } from 'utils/types';
import { snapshot } from 'valtio';

import { graphQlClient } from './internal';
import * as mutations from './mutation';
import * as queries from './query';

export const feedThreads = async () =>
	await graphQlClient.query({
		query: queries.feedThreads,
	});

export const createThread = async (item: Thread) => {
	const { profile } = snapshot(accountState);
	const { avatarUrl, address, id, name } = profile;
	const { title, body } = item;
	const time = new Date().toISOString();

	await graphQlClient.mutate({
		mutation: mutations.createThread,
		variables: {
			input: {
				title,
				body,
			},
		},
		update: (cache, { data }) => {
			cache.modify({
				fields: {
					feedThreads(currentThreads = []) {
						const newThread = cache.writeFragment({
							data: data?.createThread,
							fragment: queries.threadFields,
						});
						return [newThread, ...currentThreads];
					},
				},
			});
		},
		optimisticResponse: {
			createThread: {
				id: 'temp-id',
				__typename: 'Thread',
				title,
				body,
				owner: {
					avatarUrl,
					address,
					name,
					id,
				},
				timestamp: time,
				comments: [],
				upCount: 0,
				updatedAt: time,
			},
		},
	});
};
