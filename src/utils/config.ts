import { WalletAdapterNetwork as Network } from '@solana/wallet-adapter-base';

const isDevBranch = gitBranch !== 'dev';

const clientKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhvbWUiLCJpYXQiOjE2NTA0MDQ2MzV9.wBHZOC5odvk9u7Izi6Z-pEzIv8IJjafH94vYpCuWUy0';

interface Configs {
	clientKey: string;
	defaultNetwork: Network;
}

export default {
	clientKey,
	defaultNetwork: isDevBranch ? Network.Devnet : Network.Mainnet,
} as Configs;
