import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
	style?: ViewStyle;
	size?: number;
	color?: string;
}

const Pen: FC<Props> = ({ style, size = 10, color = '#fff' }) => {
	return (
		<Svg
			style={style}
			width={size}
			height={size}
			viewBox="0 0 10 10"
			fill="none"
		>
			<Path
				fill={color}
				d="M8.91878 3.38356L6.59333 1.08219L7.35936 0.315069C7.56911 0.105023 7.82682 0 8.13251 0C8.43782 0 8.69535 0.105023 8.9051 0.315069L9.67113 1.08219C9.88088 1.29224 9.99031 1.54575 9.99943 1.84274C10.0085 2.13936 9.90824 2.39269 9.69849 2.60274L8.91878 3.38356ZM8.12539 4.19178L2.32545 10H0V7.67123L5.79994 1.86301L8.12539 4.19178Z"
			/>
		</Svg>
	);
};

export default Pen;
