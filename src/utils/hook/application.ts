import { useCallback, useEffect } from 'react';
import { Hub, HubCallback } from '@aws-amplify/core';
import { accountActions } from 'utils/state/account';

interface InitConfig {
	withProfileFetch: boolean;
	onSignIn?: () => void;
	onSignOut?: () => void;
}

export const useAppInit = ({
	withProfileFetch,
	onSignIn,
	onSignOut,
}: InitConfig): void => {
	const onAuth = useCallback<HubCallback>(({ payload: { event, data } }) => {
		if (event === 'signIn' && data?.username) {
			accountActions.syncProfile();
			onSignIn?.();
		} else if (event === 'signOut') {
			onSignOut?.();
		}
	}, []);

	useEffect(() => {
		if (withProfileFetch) accountActions.syncProfile();
		Hub.listen('auth', onAuth);

		return () => Hub.remove('auth', onAuth);
	}, []);
};
