import { gql } from '@apollo/client';

export const commentFields = gql`
	fragment CommentFields on Comment {
		id
		body
		owner {
			id
			avatarUrl
			address
			name
		}
	}
`;
