import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Line, Path, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
	isFilled?: boolean;
}

export const FlagIcon: FC<Props> = ({
	style,
	size = 14,
	color = '#EAFCE0',
	isFilled = true,
}) => {
	return (
		<Svg
			style={style}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={isFilled ? color : 'none'}
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path>
			<Line x1="4" y1="22" x2="4" y2="15"></Line>
		</Svg>
	);
};

export default FlagIcon;
