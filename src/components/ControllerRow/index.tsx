import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AuthenticationBundle from 'components/AuthenticationBundle';
import BackIcon from 'components/icons/feather/Back';
import BellIcon from 'components/icons/feather/Bell';
import SearchIcon from 'components/icons/feather/Search';
import { StackParamList } from 'src/stack';
import { grey } from 'utils/colors';

const ICON_SIZE = 25;

interface Props {
	canGoBack?: boolean;
	onAvatarPress: () => void;
	onSearchPress: () => void;
	bellIconColor?: string;
}
type DashBoardStackProp = NavigationProp<StackParamList, 'Dashboard'>;

export const ControllerRow: FC<Props> = ({
	canGoBack = false,
	onSearchPress,
	bellIconColor = 'white',
}: Props) => {
	const navigation = useNavigation<DashBoardStackProp>();

	const goBack = () => navigation.goBack();
	const onNotificationPress = () => navigation.navigate('Notification');

	return (
		<View style={styles.container}>
			{canGoBack ? (
				<TouchableOpacity onPress={goBack}>
					<BackIcon size={36} color={grey} />
				</TouchableOpacity>
			) : (
				<View />
			)}
			<View style={styles.mainContainer}>
				<TouchableOpacity onPress={onSearchPress}>
					<SearchIcon size={ICON_SIZE} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={onNotificationPress}
					style={styles.iconContainer}
				>
					<BellIcon size={ICON_SIZE} isFilled={true} color={bellIconColor} />
				</TouchableOpacity>
				<AuthenticationBundle />
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
		height: 45,
	},
	iconContainer: {
		marginLeft: 13,
	},
});
