import { gql } from '@apollo/client';

import { commentFields } from '../query';

export const createComment = gql`
	${commentFields}
	mutation CreateComment($input: CreateCommentInput!) {
		createComment(input: $input) {
			...CommentFields
			reply {
				...CommentFields
			}
			upCount
			timestamp
		}
	}
`;

export const editComment = gql`
	${commentFields}
	mutation EditComment($input: EditCommentInput!) {
		editComment(input: $input) {
			...CommentFields
		}
	}
`;
