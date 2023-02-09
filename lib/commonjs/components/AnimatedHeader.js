"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _useAnimateNavbar = require("../hooks/useAnimateNavbar");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AnimatedHeader = _ref => {
  let {
    scroll,
    imageHeight,
    OverflowHeaderComponent,
    HeaderComponent,
    headerHeight
  } = _ref;
  const [headerOpacity, overflowHeaderOpacity] = (0, _useAnimateNavbar.useAnimateNavbar)(scroll, imageHeight, headerHeight);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.container, styles.header, {
      zIndex: headerOpacity,
      height: headerHeight,
      opacity: headerOpacity
    }]
  }, HeaderComponent), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.container, styles.overflowHeader, {
      zIndex: overflowHeaderOpacity,
      height: headerHeight,
      opacity: overflowHeaderOpacity
    }]
  }, OverflowHeaderComponent));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    paddingTop: 32,
    position: 'absolute',
    elevation: 2,
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    borderBottomColor: '#a4a4a4'
  },
  overflowHeader: {
    backgroundColor: 'transparent'
  }
});
var _default = AnimatedHeader;
exports.default = _default;
//# sourceMappingURL=AnimatedHeader.js.map