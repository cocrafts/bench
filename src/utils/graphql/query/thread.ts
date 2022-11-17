import { gql } from '@apollo/client';

export const feedThreads = gql`
	query {
		feedThreads {
			body
			comments {
				body
				upCount
			}
			id
			owner {
				id
				name
				avatarUrl
			}
			timestamp
			title
			upCount
			updatedAt
		}
	}
`;
