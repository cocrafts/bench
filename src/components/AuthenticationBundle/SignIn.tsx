import React, { FC, Fragment, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
	AnimateDirections,
	Button,
	dimensionState,
	modalActions,
	themeState,
} from '@metacraft/ui';
import UserSolidIcon from 'components/icons/feather/UserSolid';
import SignInOptions from 'components/modals/SignInOptions';
import { useSnapshot } from 'utils/hook';

export const SignIn: FC = () => {
	const { id: themeId } = useSnapshot(themeState);
	const { isMobile } = useSnapshot(dimensionState);
	const isFantasy = themeId === 'fantasy';
	const containerRef = useRef<View>(null);

	const showSignInOptions = () => {
		modalActions.show({
			id: 'signInOptions',
			component: SignInOptions,
			animateDirection: AnimateDirections.BottomLeft,
		});
	};

	const desktopRender = (
		<Fragment>
			{isFantasy ? (
				<Button
					style={styles.fantasyButton}
					title="Sign In"
					titleStyle={styles.buttonTitle}
					onPress={showSignInOptions}
				/>
			) : (
				<Button
					outline
					title="Sign In"
					titleStyle={styles.buttonTitle}
					onPress={showSignInOptions}
				/>
			)}
		</Fragment>
	);

	const mobileRender = (
		<TouchableOpacity
			style={styles.mobileSignInContainer}
			onPress={showSignInOptions}
		>
			<UserSolidIcon size={26} color="#fff" />
		</TouchableOpacity>
	);

	return (
		<View ref={containerRef} style={styles.container}>
			{isMobile ? mobileRender : desktopRender}
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	container: {},
	fantasyButton: {
		borderRadius: 10,
		paddingVertical: 8,
		paddingHorizontal: 24,
		backgroundColor: 'transparent',
	},
	buttonTitle: {
		paddingHorizontal: 0,
		paddingVertical: 0,
	},
	mobileSignInContainer: {
		width: 32,
		height: 32,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
