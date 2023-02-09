function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Animated, ImageBackground, StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { HEADER_HEIGHT, IMG_HEADER_HEIGHT } from '../constants';
import AnimatedHeader from './AnimatedHeader';
import { useAnimateScrollView } from '../hooks/useAnimateScrollView';
export const AnimatedScrollView = _ref => {
  let {
    TopNavBarComponent,
    HeaderNavbarComponent,
    HeaderComponent,
    headerMaxHeight,
    topBarHeight,
    headerImage,
    disableScale,
    children,
    ...props
  } = _ref;
  const {
    width
  } = useWindowDimensions();
  const imageHeight = headerMaxHeight || IMG_HEADER_HEIGHT;
  const headerNavHeight = topBarHeight || HEADER_HEIGHT;
  const [scroll, onScroll, scale, translateYDown, translateYUp] = useAnimateScrollView(imageHeight, disableScale);
  const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Animated.ScrollView, _extends({
    onScroll: onScroll,
    scrollEventThrottle: 16
  }, props), /*#__PURE__*/React.createElement(View, {
    style: [styles.imgContainer, {
      marginTop: -imageHeight * 4,
      paddingTop: imageHeight * 4
    }]
  }, HeaderComponent ? /*#__PURE__*/React.createElement(React.Fragment, null, headerImage ? /*#__PURE__*/React.createElement(AnimatedImageBackground, {
    source: headerImage,
    style: [{
      height: imageHeight,
      width: width * 1.2
    }, {
      transform: [{
        scale
      }, {
        translateY: translateYUp
      }, {
        translateY: translateYDown
      }]
    }]
  }, HeaderComponent) : /*#__PURE__*/React.createElement(Animated.View, {
    style: [{
      height: imageHeight,
      width: width * 1.2
    }, {
      transform: [{
        scale
      }, {
        translateY: translateYUp
      }, {
        translateY: translateYDown
      }]
    }]
  }, HeaderComponent)) : /*#__PURE__*/React.createElement(Animated.Image, {
    source: headerImage,
    style: [{
      height: imageHeight,
      width: width * 1.2
    }, {
      transform: [{
        scale
      }, {
        translateY: translateYUp
      }, {
        translateY: translateYDown
      }]
    }]
  })), children), /*#__PURE__*/React.createElement(AnimatedHeader, {
    headerHeight: headerNavHeight,
    scroll: scroll,
    imageHeight: imageHeight,
    OverflowHeaderComponent: HeaderNavbarComponent,
    HeaderComponent: TopNavBarComponent
  }));
};
const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    overflow: 'hidden'
  }
});
//# sourceMappingURL=AnimatedScrollView.js.map