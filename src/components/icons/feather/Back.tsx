import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Polyline, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
}

export const BackIcon: FC<Props> = ({
	style = {},
	size = 24,
	color = 'white',
}: Props) => {
	return (
		<Svg
			style={style}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Polyline points="15 18 9 12 15 6"></Polyline>
		</Svg>
	);
};

export default BackIcon;
