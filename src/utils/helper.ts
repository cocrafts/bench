import { LayoutRectangle } from 'react-native';
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import numeral from 'numeral';

export const shortenAddress = (address: string, length = 11): string => {
	const innerLength = length - 3;
	const headIndex = innerLength / 2;
	const tailIndex = address.length - innerLength / 2;

	return `${address.substring(0, headIndex)}...${address.substring(tailIndex)}`;
};

export const memiToUSD = (amount = 0, exchangeRate = 0.024): number => {
	return amount * exchangeRate;
};

export const formatNumber = (
	amount = 0,
	prefix = '',
	format = '0,0',
): string => {
	return `${prefix}${numeral(amount).format(format)}`;
};

export const parseNumber = (value: string, defaultValue = 0): number => {
	return numeral(value).value() || defaultValue;
};

export const idleLayout: LayoutRectangle = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
};

dayjs.extend(relativeTime);
dayjs.extend(relativeTime);
export const day = dayjs;
export type DayJs = Dayjs;

export const delay = (timeout: number): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), timeout);
	});
};
