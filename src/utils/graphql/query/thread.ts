import { gql } from '@apollo/client';

export const threadFields = gql`
	fragment ThreadFields on Thread {
		body
		comments {
			id
			owner {
				id
				name
				address
				avatarUrl
			}
			upCount
			timestamp
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
