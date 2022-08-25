import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Circle, Line, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
}

export const SearchIcon: FC<Props> = ({
	style,
	size = 28,
	color = 'white',
}) => {
	return (
		<Svg
			style={style}
			height={size}
			stroke={color}
			width={size}
			viewBox="0 0 24 24"
			fill="none"
			strokeOpacity={0.8}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Circle cx="11" cy="11" r="8"></Circle>
			<Line x1="21" y1="21" x2="16.65" y2="16.65"></Line>
		</Svg>
	);
};

export default SearchIcon;
