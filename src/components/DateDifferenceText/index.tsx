import React, { FC } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text } from '@metacraft/ui';

interface Props {
	fromDate: Date;
	toDate?: Date;
	style?: TextStyle;
}

export const DateDifferenceText: FC<Props> = ({
	fromDate,
	toDate = new Date(),
	style = {},
}: Props) => {
	const seconds = (toDate.getTime() - fromDate.getTime()) / 1000;
	const year = Math.floor(seconds / 31536000);
	let dateDiff = '';
	if (year > 0) {
		dateDiff = `${year} ${year === 1 ? 'year' : 'years'}`;
	} else {
		const month = Math.floor((seconds % 31536000) / 2628000);
		if (month > 0) {
			dateDiff = `${month} ${month === 1 ? 'month' : 'months'}`;
		} else {
			const day = Math.floor(((seconds % 31536000) % 2628000) / 86400);
			if (day > 0) {
				dateDiff = `${day} ${day === 1 ? 'day' : 'days'}`;
			} else {
				const hour = Math.floor((seconds % (3600 * 24)) / 3600);
				if (hour > 0) {
					dateDiff = `${hour}${hour === 1 ? 'hour' : 'hours'}`;
				} else {
					const minute = Math.floor((seconds % 3600) / 60);
					if (minute > 0) {
						dateDiff = `${minute} ${minute === 1 ? 'minute' : 'minutes'}`;
					} else {
						dateDiff = 'Now';
					}
				}
			}
		}
	}
	return <Text style={[styles.textStyle, style]}>{dateDiff}</Text>;
};

const styles = StyleSheet.create({
	textStyle: {
		fontFamily: 'Poppins',
		fontWeight: '400',
		lineHeight: 10.5,
		fontSize: 7,
	},
});

export default DateDifferenceText;
