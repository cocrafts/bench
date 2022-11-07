import { gql } from '@apollo/client';

export * from './profile';

export const greeting = gql`
	query Greeting {
		greeting
	}
`;
