import React from 'react';
import IndicatorIcon from '@assets/icons/IndicatorIcon';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

type Indicator = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
};

const defaultSize = {
  small: 60,
  medium: 120,
  large: 240,
};

const CustomIndicator: React.FC<Indicator> = ({size = 'small', color}) => {
  const sizePx = defaultSize[size] || defaultSize.small;
  const rotate = useSharedValue<number>(0);

  const indicatorView = useAnimatedStyle(() => ({
    width: sizePx,
    height: sizePx,
    transform: [
      {
        rotate: `${rotate.value}rad`,
      },
    ],
  }));

  useFocusEffect(() => {
    rotate.value = withRepeat(
      withSpring(rotate.value + Math.PI * 2, {
        duration: 2000,
        dampingRatio: 0.9,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
        reduceMotion: ReduceMotion.System,
      }),
      -1,
      false,
    );
  });

  return (
    <Animated.View style={indicatorView}>
      <IndicatorIcon fill={color} size={defaultSize[size]} />
    </Animated.View>
  );
};

export default CustomIndicator;
