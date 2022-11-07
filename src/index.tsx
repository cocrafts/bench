import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { Provider as MetacraftProvider, themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { graphQlClient } from 'utils/graphql';
import { useSnapshot } from 'valtio';

import BuildStack from './stack';

export const AppContainer: FC = () => {
	const theme = useSnapshot(themeState);

	return (
		<ApolloProvider client={graphQlClient}>
			<MetacraftProvider>
				<NavigationContainer theme={theme}>
					<BuildStack />
				</NavigationContainer>
			</MetacraftProvider>
		</ApolloProvider>
	);
};

export default AppContainer;
