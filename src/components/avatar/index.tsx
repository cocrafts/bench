import React, { FC } from 'react';
import {
	Image,
	ImageStyle,
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native';

interface Props {
	uri: string;
	userName?: string;
	size: number;
}

export const Avatar: FC<Props> = ({ uri, userName = '', size = 22 }) => {
	const imageStyle: ImageStyle = {
		width: size,
		height: size,
		borderRadius: size / 2,
	};

	const containerStyle: ViewStyle = {
		width: size,
		height: size,
		borderRadius: size / 2,
	};

	const textStyle: TextStyle = {
		fontSize: (size * 12) / 22,
		fontWeight: '400',
	};

	if (uri) {
		return (
			<Image
				style={imageStyle}
				source={{
					uri: uri,
				}}
			/>
		);
	} else if (userName) {
		return (
			<View style={[containerStyle, styles.container]}>
				<Text style={textStyle}>{userName.charAt(0)}</Text>
			</View>
		);
	} else {
		return null;
	}
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#7FC4BC',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Avatar;
