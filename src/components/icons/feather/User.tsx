import React, { FC } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
	onPress?: () => void;
}

export const UserIcon: FC<Props> = ({
	style,
	size = 24,
	color = 'white',
	onPress,
}: Props) => {
	return (
		<TouchableOpacity onPress={onPress}>
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
				<Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></Path>
				<Circle cx="12" cy="7" r="4"></Circle>
			</Svg>
		</TouchableOpacity>
	);
};

export default UserIcon;
