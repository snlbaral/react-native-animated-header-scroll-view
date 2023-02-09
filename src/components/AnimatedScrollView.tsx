import {
  Animated,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import { HEADER_HEIGHT, IMG_HEADER_HEIGHT } from '../constants';
import AnimatedHeader from './AnimatedHeader';
import type { AnimatedScrollViewProps } from '../types';
import { useAnimateScrollView } from '../hooks/useAnimateScrollView';

export const AnimatedScrollView = ({
  TopNavBarComponent,
  HeaderComponent,
  headerMaxHeight,
  topBarHeight,
  headerImage,
  disableScale,
  children,
  ...props
}: AnimatedScrollViewProps) => {
  const { width } = useWindowDimensions();
  const imageHeight = headerMaxHeight || IMG_HEADER_HEIGHT;
  const headerNavHeight = topBarHeight || HEADER_HEIGHT;
  const [scroll, onScroll, scale, translateYDown, translateYUp] =
    useAnimateScrollView(imageHeight, disableScale);

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);


  return (
    <>
      <Animated.FlatList
        onScroll={onScroll}
        scrollEventThrottle={16}
        ListHeaderComponent={<><View
          style={[
            styles.imgContainer,
            {
              marginTop: -imageHeight * 4,
              paddingTop: imageHeight * 4,
            },
          ]}
        >
        <Animated.View
          style={[
            { height: imageHeight, width: width },
            {
              transform: [
                { scale },
                { translateY: translateYUp },
                { translateY: translateYDown },
              ],
            },
          ]}
        >
          {HeaderComponent}
        </Animated.View>
        
        </View>
        {TopNavBarComponent}</>}
        {...props}
      />
        
      <AnimatedHeader
        headerHeight={headerNavHeight}
        scroll={scroll}
        imageHeight={imageHeight}
        HeaderComponent={TopNavBarComponent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
});
