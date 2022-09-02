import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
    isFilled?: boolean;
}

export const ThumbsUpIcon: FC<Props> = ({
	style,
	size = 28,
	color = 'white',
    isFilled = false,
}: Props) => {
	return (
		<Svg
            style={style}   
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={isFilled ? color: "none"}
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<Path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></paPathth>
		</Svg>
	);
};

export default ThumbsUpIcon;
