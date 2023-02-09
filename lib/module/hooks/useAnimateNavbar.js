export const useAnimateNavbar = (scroll, imageHeight, headerHeight) => {
  const HEADER_HEIGHT_DIFFERENCE = imageHeight - headerHeight;
  const headerOpacity = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT_DIFFERENCE * 0.75, HEADER_HEIGHT_DIFFERENCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp'
  });
  const overflowHeaderOpacity = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT_DIFFERENCE * 0.75, HEADER_HEIGHT_DIFFERENCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp'
  });
  return [headerOpacity, overflowHeaderOpacity];
};
//# sourceMappingURL=useAnimateNavbar.js.map