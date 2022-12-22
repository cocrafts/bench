import React, { FC } from 'react';
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import { day } from 'utils/helper';
import { BuildActivity } from 'utils/state/buildActivities';

import BuildItem, { ItemProps } from './Item';

interface Props {
	style?: ViewStyle;
	data: BuildActivity[];
}

export const BuildHistory: FC<Props> = ({ style, data }) => {
	const renderActivity = ({ index, item }: Omit<ItemProps, 'isContinued'>) => {
		const previousItem = data[index - 1];
		const nextItem = data[index + 1];
		const dayContinued =
			previousItem && day(item.timestamp).isSame(previousItem.timestamp, 'day');
		const dayWillContinue =
			nextItem && day(item.timestamp).isSame(nextItem.timestamp, 'day');
		const willContinue =
			dayWillContinue && nextItem && nextItem.account?.id == item.account?.id;
		const continued =
			dayContinued &&
			previousItem &&
			previousItem.account?.id === item.account?.id;

		return (
			<BuildItem
				index={index}
				item={item}
				continued={continued}
				willContinue={willContinue}
				dayContinued={dayContinued}
			/>
		);
	};

	return (
		<View style={[styles.container, style]}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={renderActivity}
				keyExtractor={(i) => i.id}
			/>
		</View>
	);
};

export default BuildHistory;

const styles = StyleSheet.create({
	container: {},
});
