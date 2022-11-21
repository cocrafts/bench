import { gql } from '@apollo/client';

import { threadFields } from '../query';

export const createThread = gql`
	${threadFields}
	mutation CreateThread($input: CreateThreadInput!) {
		createThread(input: $input) {
			...ThreadFields
		}
	}
`;
