import { Dimensions, PixelRatio } from "react-native";

export const widthPercentageToPx: Function = (widthPercent: string) => {
  const screenWidth = Dimensions.get("window").width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent) / 100;
  return `${screenWidth * elemWidth}px`;
};

export const widthPercentageToDP: Function = (widthPercent: string) => {
  const screenWidth = Dimensions.get("window").width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP: Function = (heightPercent: string) => {
  const screenHeight = Dimensions.get("window").height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const heightPercentageToPx: Function = (heightPercent: string) => {
  const screenHeight = Dimensions.get("window").height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent) / 100;
  return `${screenHeight * elemHeight}px`;
};
