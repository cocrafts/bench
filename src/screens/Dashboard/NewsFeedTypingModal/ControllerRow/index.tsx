import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from '@metacraft/ui';
import CloseIcon from 'components/icons/feather/Close';
import { blue } from 'utils/colors';

interface Props {
	onPostPress: () => void;
	onClosePress: () => void;
}

const ControllerRow: FC<Props> = ({ onPostPress, onClosePress }: Props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onClosePress}>
				<CloseIcon color={'rgba(255,255,255,0.7)'} />
			</TouchableOpacity>
			<Button
				onPress={onPostPress}
				style={styles.button}
				title={'Post'}
				titleStyle={styles.title}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		width: 64,
		height: 32,
		borderRadius: 10,
		backgroundColor: blue,
	},
	title: {
		color: 'white',
		fontSize: 12,
		fontWeight: '600',
		lineHeight: 18,
		fontFamily: 'Poppins',
	},
});

export default ControllerRow;
