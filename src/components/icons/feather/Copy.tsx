import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Path, Rect, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
}

export const CopyIcon: FC<Props> = ({ style, size, color }) => {
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
			<Rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
			<Path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
		</Svg>
	);
};

CopyIcon.defaultProps = {
	size: 24,
	color: 'white',
};

export default CopyIcon;
