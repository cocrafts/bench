import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { modalActions } from '@metacraft/ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AuthenticationBundle from 'components/AuthenticationBundle';
import BackIcon from 'components/icons/feather/Back';
import BellIcon from 'components/icons/feather/Bell';
import SearchIcon from 'components/icons/feather/Search';
import { RootParamList } from 'stacks/shared';
import { grey } from 'utils/colors';

const ICON_SIZE = 25;

interface Props {
	isRoot?: boolean;
	onAvatarPress: () => void;
	onSearchPress: () => void;
	bellIconColor?: string;
}

type StackProp = NavigationProp<RootParamList>;

export const ControllerRow: FC<Props> = ({
	isRoot = true,
	onSearchPress,
	bellIconColor = 'white',
}: Props) => {
	const navigation = useNavigation<StackProp>();

	const goBack = () => {
		if (navigation.canGoBack()) {
			navigation.goBack();
		} else {
			navigation.navigate('Dashboard');
		}
		modalActions.hide('ReplyTyping');
	};
	const onNotificationPress = () => navigation.navigate('Notification');

	return (
		<View style={styles.container}>
			{isRoot ? (
				<View />
			) : (
				<TouchableOpacity onPress={goBack}>
					<BackIcon size={36} color={grey} />
				</TouchableOpacity>
			)}
			<View style={styles.mainContainer}>
				{/* <TouchableOpacity onPress={onSearchPress}>
					<SearchIcon size={ICON_SIZE} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={onNotificationPress}
					style={styles.iconContainer}
				>
					<BellIcon size={ICON_SIZE} isFilled={true} color={bellIconColor} />
				</TouchableOpacity> */}
				<View style={styles.authBundleContainer}>
					<AuthenticationBundle />
				</View>
			</View>
		</View>
	);
};

export default ControllerRow;

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 40,
	},
	iconContainer: {
		marginLeft: 15,
	},
	authBundleContainer: {
		marginLeft: 15,
	},
});
