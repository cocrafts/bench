import React, { FC } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from '@metacraft/ui';

import BackIcon from '../../components/icons/feather/Back';
import { blackPearl, blueWhale, grey } from '../../utils/colors';
import { useInput } from '../../utils/hook';

interface Props {
	onCancelSearchModal: () => void;
}

const SearchModal: FC<Props> = ({ onCancelSearchModal }: Props) => {
	const { value, onChangeText } = useInput('');
	const onCancelPress = () => {
		onChangeText('');
	};
	const onBackPress = () => {
		onCancelSearchModal();
	};

	return (
		<View style={styles.container}>
			<View style={styles.controller}>
				<TouchableOpacity onPress={onBackPress}>
					<BackIcon size={32} color={grey} />
				</TouchableOpacity>
				<TextInput
					numberOfLines={1}
					style={styles.input}
					placeholder="Search"
					placeholderTextColor={grey}
					value={value}
					onChangeText={onChangeText}
				/>
				<TouchableOpacity onPress={onCancelPress}>
					<Text
						style={[styles.cancel, value.length !== 0 && { color: 'white' }]}
					>
						Cancel
					</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.recentSearchText}>Recent searches</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	recentSearchText: {
		color: 'rgba(255,255,255,0.5)',
		fontSize: 12,
		fontWeight: '600',
		marginTop: 22,
		marginLeft: 44,
	},
	container: {
		flex: 1,
		backgroundColor: blackPearl,
		paddingHorizontal: 16,
	},
	cancel: {
		color: grey,
		fontSize: 12,
		fontWeight: '400',
		marginLeft: 13,
	},
	controller: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 44,
	},
	input: {
		backgroundColor: blueWhale,
		borderRadius: 6,
		paddingHorizontal: 17,
		paddingVertical: 7,
		color: 'white',
		fontSize: 14,
		fontFamily: 'Poppins',
		fontWeight: '400',
		flex: 1,
		marginLeft: 11,
	},
});

export default SearchModal;
