import { gql } from '@apollo/client';
import { Thread } from 'utils/types/graphql';

import { graphQlClient } from '../internal';

export const writeThreadQuery = gql`
	query WriteThread($id: String!) {
		thread(id: $id) {
			id
			body
		}
	}
`;

export const writeThread = (item: Thread) => {
	item.__typename = 'Thread';

	return graphQlClient.writeQuery({
		query: writeThreadQuery,
		data: { thread: item },
		variables: { id: item.id },
	});
};
