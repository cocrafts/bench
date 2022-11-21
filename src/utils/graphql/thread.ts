import { Thread } from 'utils/types';

import { graphQlClient } from './internal';
import * as mutations from './mutation';
import * as queries from './query';

export const feedThreads = async () =>
	await graphQlClient.query({
		query: queries.feedThreads,
	});

export const createThread = async (item: Thread) => {
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
					avatarUrl: null,
					address: '9E5khVvUyyuny6MNL7C7aMbMTMUBwC27dr9WC947Di68',
					name: 'FME849',
					id: null,
				},
				timestamp: time,
				comments: [],
				upCount: 0,
				updatedAt: time,
			},
		},
	});
};
