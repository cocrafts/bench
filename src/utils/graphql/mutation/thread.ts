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

export const editThread = gql`
	${threadFields}
	mutation EditThread($input: EditThreadInput!) {
		editThread(input: $input) {
			...ThreadFields
		}
	}
`;
