import React, { FC, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import { blue } from '../../utils/colors';
import Avatar from '../Avatar';
import DateDifferenceText from '../DateDifferenceText';

interface Props {
	avatarUrl: string;
	name: string;
	postedTime: Date;
}

const UserInfo: FC<Props> = ({
	avatarUrl = '',
	name = '',
	postedTime = new Date(),
}: Props) => {
	return (
		<View style={styles.container}>
			<Avatar imageUri={avatarUrl} size={25} characters={name} />
			<View style={styles.nameTimeContainer}>
				<Text style={styles.name}>{name}</Text>
				<DateDifferenceText
					fromDate={postedTime}
					style={styles.dateDifference}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	nameTimeContainer: {
		flexDirection: 'column',
		marginLeft: 6,
	},
	name: {
		fontWeight: '600',
		fontSize: 12,
		lineHeight: 18,
		color: 'white',
		fontFamily: 'Poppins',
	},
	dateDifference: {
		fontFamily: 'Poppins',
		fontWeight: '400',
		fontSize: 10,
		lineHeight: 15,
		color: blue,
	},
});

export default memo(UserInfo);
