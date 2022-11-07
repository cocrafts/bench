import { clearProfile, syncProfile, walletSignIn } from './authentication';
import { setForceConnect, showConnectWallet } from './wallet';

export const accountActions = {
	syncProfile,
	walletSignIn,
	clearProfile,
	setForceConnect,
	showConnectWallet,
};

export * from './internal';
