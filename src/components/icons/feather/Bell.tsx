import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
	isHavingUpdate?: boolean;
}

export const BellIcon: FC<Props> = ({
	style,
	size = 20,
	color = '#7fc4bc',
	isHavingUpdate = false,
}) => {
	return (
		<View style={{ width: size, height: size }}>
			{isHavingUpdate && <View style={styles.redDot} />}
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
				<Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></Path>
				<Path d="M13.73 21a2 2 0 0 1-3.46 0"></Path>
			</Svg>
		</View>
	);
};

const styles = StyleSheet.create({
	redDot: {
		backgroundColor: '#F94141',
		width: 10,
		height: 10,
		position: 'absolute',
		right: -2,
		top: 0,
		borderRadius: 5,
	},
});

export default BellIcon;
