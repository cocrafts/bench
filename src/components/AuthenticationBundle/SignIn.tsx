import React, { FC, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	AnimateDirections,
	Button,
	modalActions,
	themeState,
} from '@metacraft/ui';
import SignInOptions from 'components/modals/SignInOptions';
import { useSnapshot } from 'utils/hook';

export const SignIn: FC = () => {
	const { id: themeId } = useSnapshot(themeState);
	const isFantasy = themeId === 'fantasy';
	const containerRef = useRef<View>(null);

	const showSignInOptions = () => {
		modalActions.show({
			id: 'signInOptions',
			component: SignInOptions,
			animateDirection: AnimateDirections.BottomLeft,
		});
	};

	return (
		<View ref={containerRef} style={styles.container}>
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
		backgroundColor: '#002f40',
	},
	buttonTitle: {
		paddingHorizontal: 0,
		paddingVertical: 0,
	},
});
