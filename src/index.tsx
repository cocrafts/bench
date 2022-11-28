import React, { FC, useCallback, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { Provider as MetacraftProvider, themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { WalletError } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import {
	ConnectionProvider,
	WalletProvider,
} from '@solana/wallet-adapter-react';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { clusterApiUrl } from '@solana/web3.js';
import { graphQlClient } from 'utils/graphql';
import { useAppInit } from 'utils/hook';
import { stateActions } from 'utils/state';
import { appState } from 'utils/state/app';
import { benchTheme } from 'utils/styles';
import { useSnapshot } from 'valtio';

import BuildStack from './stack';

export const AppContainer: FC = () => {
	const { network } = useSnapshot(appState);
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);
	const theme = useSnapshot(themeState);

	const wallets = useMemo(
		() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
		[network],
	);

	const useError = () => {
		return useCallback((error: WalletError) => {
			console.log(error);
		}, []);
	};

	useAppInit({
		withProfileFetch: true,
		onSignOut: () => {
			stateActions.clearAll();
		},
	});

	return (
		<ApolloProvider client={graphQlClient}>
			<ConnectionProvider endpoint={endpoint}>
				<WalletProvider autoConnect wallets={wallets} onError={useError}>
					<MetacraftProvider theme={benchTheme}>
						<NavigationContainer
							theme={theme}
							documentTitle={{
								formatter: () =>
									`Metacraft Bench - A Web3 game builder platform`,
							}}
						>
							<BuildStack />
						</NavigationContainer>
					</MetacraftProvider>
				</WalletProvider>
			</ConnectionProvider>
		</ApolloProvider>
	);
};

export default AppContainer;
