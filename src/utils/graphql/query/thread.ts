import { gql } from '@apollo/client';

export const threadFields = gql`
	fragment ThreadFields on Thread {
		body
		comments {
			body
			upCount
		}
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
