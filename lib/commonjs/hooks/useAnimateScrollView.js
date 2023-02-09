"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimateScrollView = void 0;
var _react = require("react");
var _reactNative = require("react-native");
const useAnimateScrollView = (imageHeight, disableScale) => {
  const scroll = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const scale = scroll.interpolate({
    inputRange: [-imageHeight, 0, imageHeight],
    outputRange: [2.5, 1, 0.85],
    extrapolate: 'clamp'
  });
  const translateYDown = scroll.interpolate({
    inputRange: [-imageHeight, 0, imageHeight],
    outputRange: [-imageHeight * 0.6, 0, imageHeight * 0.5],
    extrapolate: 'clamp'
  });
  const translateYUp = scroll.interpolate({
    inputRange: [-imageHeight, 0, imageHeight],
    outputRange: [imageHeight * 0.3, 0, 0],
    extrapolate: 'clamp'
  });
  const onScroll = _reactNative.Animated.event([{
    nativeEvent: {
      contentOffset: {
        y: scroll
      }
    }
  }], {
    useNativeDriver: true
  });
  return [scroll, onScroll, disableScale ? 1 : scale, translateYDown, translateYUp];
};
exports.useAnimateScrollView = useAnimateScrollView;
//# sourceMappingURL=useAnimateScrollView.js.map