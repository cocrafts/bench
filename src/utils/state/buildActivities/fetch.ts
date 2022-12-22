import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';

import { buildState } from './instance';

export const fetchActivities = async (): Promise<void> => {
	try {
		const { data } = await graphQlClient.query({
			query: queries.buildActivities,
		});

		buildState.allActivity.list = data?.buildActivities || [];
	} catch (e) {
		console.log(e);
	} finally {
		buildState.allActivity.ready = true;
	}
};
