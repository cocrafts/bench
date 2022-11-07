import React, { FC } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';

interface Props {
	style?: ViewStyle;
	imageUri?: string;
	characters?: string;
	size?: number;
	onPress?: () => void;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#555555',
		alignItems: 'center',
		justifyContent: 'center',
	},
	character: {
		fontSize: 14,
		color: '#FFFFFF',
	},
});

export const Avatar: FC<Props> = ({
	style,
	imageUri,
	characters,
	size,
	onPress,
}) => {
	const containerStyle = {
		width: size,
		height: size,
		borderRadius: (size as number) / 2,
	};

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[styles.container, containerStyle, style]}
			onPress={onPress}
		>
			{imageUri ? (
				<Image style={containerStyle} source={{ uri: imageUri }} />
			) : (
				<Text style={styles.character}>
					{characters?.substring?.(0, 1) || '?'}
				</Text>
			)}
		</TouchableOpacity>
	);
};

Avatar.defaultProps = {
	size: 32,
};

export default Avatar;
