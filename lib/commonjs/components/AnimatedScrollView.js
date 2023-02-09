"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedScrollView = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _constants = require("../constants");
var _AnimatedHeader = _interopRequireDefault(require("./AnimatedHeader"));
var _useAnimateScrollView = require("../hooks/useAnimateScrollView");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const AnimatedScrollView = _ref => {
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
  } = (0, _reactNative.useWindowDimensions)();
  const imageHeight = headerMaxHeight || _constants.IMG_HEADER_HEIGHT;
  const headerNavHeight = topBarHeight || _constants.HEADER_HEIGHT;
  const [scroll, onScroll, scale, translateYDown, translateYUp] = (0, _useAnimateScrollView.useAnimateScrollView)(imageHeight, disableScale);
  const AnimatedImageBackground = _reactNative.Animated.createAnimatedComponent(_reactNative.ImageBackground);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.ScrollView, _extends({
    onScroll: onScroll,
    scrollEventThrottle: 16
  }, props), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.imgContainer, {
      marginTop: -imageHeight * 4,
      paddingTop: imageHeight * 4
    }]
  }, HeaderComponent ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, headerImage ? /*#__PURE__*/_react.default.createElement(AnimatedImageBackground, {
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
  }, HeaderComponent) : /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
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
  }, HeaderComponent)) : /*#__PURE__*/_react.default.createElement(_reactNative.Animated.Image, {
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
  })), children), /*#__PURE__*/_react.default.createElement(_AnimatedHeader.default, {
    headerHeight: headerNavHeight,
    scroll: scroll,
    imageHeight: imageHeight,
    OverflowHeaderComponent: HeaderNavbarComponent,
    HeaderComponent: TopNavBarComponent
  }));
};
exports.AnimatedScrollView = AnimatedScrollView;
const styles = _reactNative.StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    overflow: 'hidden'
  }
});
//# sourceMappingURL=AnimatedScrollView.js.map