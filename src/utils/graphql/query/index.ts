import { gql } from '@apollo/client';

export * from './profile';
export * from './thread';

export const greeting = gql`
	query Greeting {
		greeting
	}
`;
