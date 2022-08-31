import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
	isFilled?: boolean;
}

export const PinIcon: FC<Props> = ({
	style,
	size = 15,
	color = '#EAFCE0',
	isFilled = false,
}: Props) => {
	return (
		<Svg
			style={style}
			width={size}
			height={size}
			viewBox="0 0 17 17"
			fill={isFilled ? color : 'none'}
		>
			<Path
				d="M7.56251 9.43747L1 16M12.25 1L16 4.75001L11.3125 13.1875L3.81248 5.68752L12.25 1Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export default PinIcon;
