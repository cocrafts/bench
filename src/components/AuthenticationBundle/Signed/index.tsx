import React, { FC, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimateDirections, BindDirections, modalActions } from '@metacraft/ui';
import { Profile } from 'utils/types';

import Account from './Account';
import Balance from './Balance';
import SignedMenu from './Menu';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});

interface Props {
	profile: Profile;
}

export const Signed: FC<Props> = ({ profile }) => {
	const containerRef = useRef<View>(null);

	const onPress = () => {
		console.log('navigate');
	};

	const onAvatarPress = () => {
		modalActions.show({
			id: 'signedOptions',
			component: SignedMenu,
			bindingRef: containerRef,
			bindingDirection: BindDirections.BottomRight,
			animateDirection: AnimateDirections.BottomLeft,
		});
	};

	return (
		<View ref={containerRef} style={styles.container}>
			<Balance profile={profile} />
			<Account
				profile={profile}
				onPress={onPress}
				onAvatarPress={onAvatarPress}
			/>
		</View>
	);
};

export default Signed;
