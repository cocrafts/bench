import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import configs from 'utils/config';
import { extractJwt } from 'utils/lib';

const uri = __DEV__
	? 'http://localhost:3005/graphql'
	: 'https://api.stormgate.io/graphql';

const basicLink = new HttpLink({ uri, fetch });
const authLink = setContext(async (_, { headers: originalHeaders }) => {
	const token = await extractJwt();
	const headers = {
		'client-key': configs.clientKey,
		...originalHeaders,
	};

	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	return { headers };
});

const httpLink = authLink.concat(basicLink);

export const memoryCache = new InMemoryCache();

export const graphQlClient = new ApolloClient({
	link: httpLink,
	cache: memoryCache,
	defaultOptions: {},
});
