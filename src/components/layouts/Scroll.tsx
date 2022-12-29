import React, { FC, ReactNode, RefObject } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
} from 'react-native-reanimated';
import { dimensionState } from '@metacraft/ui';
import InternalNav from 'components/Navigation/Internal';
import { navigationHeight } from 'components/Navigation/shared';
import StormNavigation from 'components/Navigation/Storm';
import { useSnapshot } from 'utils/hook';

interface Props {
	children?: ReactNode;
	style?: ViewStyle;
	contentContainerStyle?: ViewStyle | ViewStyle[];
	scrollRef?: RefObject<Animated.ScrollView>;
}

export const ScrollLayout: FC<Props> = ({
	children,
	style,
	contentContainerStyle,
	scrollRef,
}) => {
	const { isMobile } = useSnapshot(dimensionState);
	const scrollOffset = useSharedValue(0);
	const translate = useDerivedValue(() => {
		if (isMobile) return navigationHeight.local;
		return scrollOffset.value > navigationHeight.storm
			? navigationHeight.storm
			: scrollOffset.value;
	});
	const scrollHandler = useAnimatedScrollHandler({
		onScroll: ({ contentOffset }) => {
			scrollOffset.value = contentOffset.y;
		},
	});

	const dualHeight =
		(isMobile ? 0 : navigationHeight.storm) + navigationHeight.local;
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

	return (
		<View style={[styles.container, style]}>
			<Animated.View style={navigationStyle}>
				{!isMobile && <StormNavigation />}
				<InternalNav />
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
