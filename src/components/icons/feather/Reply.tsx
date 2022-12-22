import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
}

export const ReplyIcon: FC<Props> = ({
	style,
	size = 512,
	color = '#EAFCE0',
}: Props) => {
	return (
		<Svg
			style={style}
			width={size}
			height={size}
			viewBox="0 0 512 512"
			fill="none"
		>
			<Path
				d="M185.2,128.6V19.7L0,204.9l185.2,185.2V281.1c152.5,0,250.5,0,326.8,217.9C512,390.1,522.9,128.6,185.2,128.6z"
				fill={color}
			/>
		</Svg>
	);
};

export default ReplyIcon;
