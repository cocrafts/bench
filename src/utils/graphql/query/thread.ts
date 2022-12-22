import { gql } from '@apollo/client';

import { commentFields } from './comment';

export const threadFields = gql`
	fragment ThreadFields on Thread {
		body
		id
		owner {
			id
			name
			address
			avatarUrl
		}
		timestamp
		title
		upCount
		updatedAt
	}
`;

export const feedThreads = gql`
	${threadFields}
	query {
		feedThreads {
			...ThreadFields
		}
	}
`;

export const thread = gql`
	${threadFields}
	${commentFields}
	query Thread($input: String!) {
		thread(id: $input) {
			...ThreadFields
			comments {
				...CommentFields
				timestamp
				upCount
				reply {
					...CommentFields
				}
			}
		}
	}
`;
