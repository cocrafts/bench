import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { dimensionState, Text } from '@metacraft/ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AuthenticationBundle from 'components/AuthenticationBundle';
import SearchIcon from 'components/icons/feather/Search';
import { RootParamList } from 'stacks/shared';
import { lightBlueWhale } from 'utils/colors';
import { closeAllModal } from 'utils/helper';
import { useSnapshot } from 'utils/hook';
import { editingModalActions } from 'utils/state/editingModal';
import { iStyles } from 'utils/styles';

type StackProp = NavigationProp<RootParamList>;

const InternalNav = () => {
	const { isMobile } = useSnapshot(dimensionState);
	const navigation = useNavigation<StackProp>();
	const onBenchLogoPress = () =>
		editingModalActions.onCloseEditingModal(() => {
			closeAllModal();
			navigation.navigate('Dashboard');
		});

	return (
		<View style={styles.container}>
			<View style={[iStyles.contentContainer, styles.contentContainer]}>
				<TouchableOpacity
					onPress={onBenchLogoPress}
					activeOpacity={0.7}
					style={{ flex: 1 }}
				>
					<Text
						style={[styles.benchLogo, !isMobile && { textAlign: 'center' }]}
					>
						Metacraft Bench
					</Text>
				</TouchableOpacity>
				{isMobile && (
					<View style={styles.rightContainer}>
						<TouchableOpacity style={{ marginHorizontal: 5 }}>
							<SearchIcon size={24} />
						</TouchableOpacity>
						<AuthenticationBundle />
					</View>
				)}
			</View>
		</View>
	);
};

export default InternalNav;

const styles = StyleSheet.create({
	container: {
		backgroundColor: lightBlueWhale,
		paddingVertical: 10,
	},
	contentContainer: {
		paddingHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	benchLogo: {
		fontSize: 26,
		fontWeight: '600',
	},
	rightContainer: {
		marginLeft: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},
});
