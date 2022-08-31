import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Circle, Line, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
}

export const InfoIcon: FC<Props> = ({
	style,
	size = 16,
	color = '#666666',
}: Props) => {
	return (
		<Svg
			style={style}
			width={size}
			height={size}
			fill="none"
			stroke={color}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox="0 0 24 24"
		>
			<Circle cx={12} cy={12} r={10} />
			<Line x1={12} y1={16} x2={12} y2={12} />
			<Line x1={12} y1={8} x2={12.01} y2={8} />
		</Svg>
	);
};

export default InfoIcon;
