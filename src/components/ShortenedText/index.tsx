import React, { FC } from 'react';
import {
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
} from 'react-native';

interface Props {
	text: string;
	numberOfLines: number;
	style?: TextStyle;
	onSeeMorePressed: () => void;
}

export const ShortenedText: FC<Props> = ({
	text = '',
	numberOfLines = 1,
	style = {},
	onSeeMorePressed,
}: Props) => {
	return (
		<View>
			<Text numberOfLines={numberOfLines} style={[styles.textStyle, style]}>
				{text}
			</Text>
			<TouchableOpacity onPress={onSeeMorePressed}>
				<Text style={{ opacity: 0.6 }}>See more</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: { fontFamily: 'Poppins', fontWeight: '400', lineHeight: 18 },
});

export default ShortenedText;
