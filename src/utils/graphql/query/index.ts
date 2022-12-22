import { gql } from '@apollo/client';

export * from './build';
export * from './comment';
export * from './profile';
export * from './thread';

export const greeting = gql`
	query Greeting {
		greeting
	}
`;
