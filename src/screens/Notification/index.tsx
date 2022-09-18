import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import ControllerRow from 'components/ControllerRow';

import { blackPearl, blue } from '../../utils/colors';

interface Props {}

const NotificationScreen: FC<Props> = ({}: Props) => {
	return (
		<View style={styles.container}>
			<ControllerRow
				bellIconColor={blue}
				canGoBack={true}
				onAvatarPress={function (): void {
					throw new Error('Function not implemented.');
				}}
				onSearchPress={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: blackPearl,
		paddingTop: 32,
		paddingHorizontal: 16,
	},
});

export default NotificationScreen;
