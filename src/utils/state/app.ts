import { WalletAdapterNetwork as Network } from '@solana/wallet-adapter-base';
import config from 'utils/config';
import { Profile } from 'utils/types/graphql';
import { proxy } from 'valtio';

export interface AppState {
	counter: number;
	user: Profile | null;
	network: Network;
}

export const appState = proxy<AppState>({
	counter: 0,
	user: null,
	network: config.defaultNetwork,
});
