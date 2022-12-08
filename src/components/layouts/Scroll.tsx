import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
} from 'react-native-reanimated';
import { dimensionState } from '@metacraft/ui';
import { navigationHeight } from 'components/Navigation/shared';
import StormNavigation from 'components/Navigation/Storm';
import { useSnapshot } from 'utils/hook';

interface Props {
	children?: ReactNode;
	style?: ViewStyle;
	contentContainerStyle?: ViewStyle | ViewStyle[];
	scrollToIndex?: number;
}

export const ScrollLayout: FC<Props> = ({
	children,
	style,
	contentContainerStyle,
	scrollToIndex,
}) => {
	const { isMobile } = useSnapshot(dimensionState);
	const scrollOffset = useSharedValue(0);
	const scrollRef = useRef<ScrollView>(null);
	const translate = useDerivedValue(() => {
		if (isMobile) return 0;
		return scrollOffset.value > navigationHeight.storm
			? navigationHeight.storm
			: scrollOffset.value;
	});
	const scrollHandler = useAnimatedScrollHandler({
		onScroll: ({ contentOffset }) => {
			scrollOffset.value = contentOffset.y;
		},
	});

	const dualHeight = isMobile ? 0 : navigationHeight.storm;
	const contentContainer = {
		paddingTop: dualHeight,
	};

	const navigationStyle = useAnimatedStyle(() => ({
		zIndex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		transform: [{ translateY: -translate.value }],
	}));

	useEffect(() => {
		if (scrollToIndex !== 0) scrollRef.current?.scrollToEnd();
	}, [scrollToIndex]);

	return (
		<View style={[styles.container, style]}>
			<Animated.View style={navigationStyle}>
				{!isMobile && <StormNavigation />}
			</Animated.View>
			<Animated.ScrollView
				ref={scrollRef}
				style={[contentContainer, contentContainerStyle]}
				onScroll={scrollHandler}
				scrollEventThrottle={5}
			>
				{children}
			</Animated.ScrollView>
		</View>
	);
};

export default ScrollLayout;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	navContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
});
