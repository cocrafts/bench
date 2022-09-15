import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Line, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
}

const CloseIcon: FC<Props> = ({ style, size = 24, color = 'white' }: Props) => {
	return (
		<Svg
			style={style}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<Line x1="18" y1="6" x2="6" y2="18"></Line>
			<Line x1="6" y1="6" x2="18" y2="18"></Line>
		</Svg>
	);
};

export default CloseIcon;
