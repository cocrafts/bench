import { gql } from '@apollo/client';

export const buildActivities = gql`
	query BuildActivities {
		buildActivities {
			id
			type
			description
			reward
			timestamp
			account {
				id
				name
				avatarUrl
			}
			detail {
				url
			}
		}
	}
`;
