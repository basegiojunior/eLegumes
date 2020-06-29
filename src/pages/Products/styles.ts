import styled from "styled-components/native";
import { Animated } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { RectButton } from "react-native-gesture-handler";

import SIZES from "~/styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

import { widthPercentageToPx } from "~/Components/PercentageConverter";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 0 ${SIZES.SPACE_SIX};
`;

export const ContainerRetrac = styled(Animated.View)`
  /* height: 0; */
  overflow: hidden;
  flex-direction: column;
`;

export const ImageProduct = styled.Image`
  width: ${widthPercentageToPx("100%")};
  height: ${widthPercentageToPx("100%")};
`;

export const ProductName = styled.Text`
  font-size: ${SIZES.SPACE_SIX};
  font-family: ${FONTS.FONT_BOLD};
  margin-top: ${SIZES.SPACE_SIX};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const ProductAmount = styled.Text`
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_REGULAR};
  margin-top: ${SIZES.SPACE_ONE};
  margin-bottom: ${SIZES.SPACE_FIVE};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const AlertStore = styled.View`
  background-color: #fff2b3;
  height: ${widthPercentageToPx("15%")};
  max-height: ${widthPercentageToPx("15%")};
  flex-grow: 1;
  flex-direction: row;
  border-radius: ${widthPercentageToPx("2.5%")};
  padding: 0 ${SIZES.SPACE_FOR};
  justify-content: flex-start;
  align-items: center;
`;

export const AlertText = styled.Text`
  color: #736626;
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_REGULAR};
  flex-shrink: 1;
`;

export const Icone = styled(Icon)`
  margin-right: ${SIZES.SPACE_FOR};
`;

export const Store = styled.TouchableWithoutFeedback``;

export const StoreView = styled.View`
  flex-direction: row;
  padding: ${SIZES.SPACE_SIX} ${SIZES.SPACE_FOR} 0 ${SIZES.SPACE_FOR};
  flex-grow: 1;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;

type Circle = {
  isPressed: boolean;
};

export const StoreCircle = styled.View<Circle>`
  width: ${widthPercentageToPx("6%")};
  height: ${widthPercentageToPx("6%")};
  border-radius: ${widthPercentageToPx("3%")};
  border-width: ${({ isPressed }) =>
    !isPressed ? 0 : widthPercentageToPx("1.8%")};
  border-color: #aa3169;
  background-color: ${({ isPressed }) => (!isPressed ? "#f0f0f0" : "#ffffff")};
  margin-right: ${SIZES.SPACE_FIVE};
`;

export const StoreViewLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StoreViewRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StoreTextView = styled.View`
  flex-direction: column;
`;

export const StoreTextName = styled.Text`
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  font-family: ${FONTS.FONT_REGULAR};
  flex-shrink: 1;
`;

export const StoreTextPrice = styled.Text`
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_REGULAR};
  flex-shrink: 1;
`;

// ADD TO CART

export const AddProductView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddProductLeft = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const AddProductNumber = styled.Text`
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${SIZES.SPACE_FOR};
  font-family: ${FONTS.FONT_REGULAR};
  margin: 0 ${SIZES.SPACE_FOR};
  width: ${SIZES.SPACE_FOR};
  text-align: center;
`;

export const AddProductPrice = styled.Text`
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${SIZES.SPACE_SIX};
  font-family: ${FONTS.FONT_BOLD};
`;

export const AddProductButton = styled(RectButton).attrs(() => ({
  rippleColor: "rgba(0,0,0,0.1)",
}))`
  width: ${widthPercentageToPx("12%")};
  max-width: ${widthPercentageToPx("12%")};
  height: ${widthPercentageToPx("12%")};
  max-height: ${widthPercentageToPx("12%")};
  background-color: #f0f0f0;
  border-radius: ${widthPercentageToPx("2.5%")};
  align-items: center;
  justify-content: center;
`;

export const AddProductButtonText = styled.Text`
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${SIZES.SPACE_SEVEN};
  font-family: ${FONTS.FONT_REGULAR};
`;

export const AddToCart = styled(RectButton).attrs(() => ({
  rippleColor: "rgba(0,0,0,0.1)",
}))`
  height: ${widthPercentageToPx("14%")};
  max-height: ${widthPercentageToPx("14%")};
  border-radius: ${widthPercentageToPx("2.5%")};
  margin: ${SIZES.SPACE_EIGHT} 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #aa3169;
`;

export const AddToCartText = styled.Text`
  color: #fff;
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  font-family: ${FONTS.FONT_BOLD};
`;

export const TitleText = styled.Text`
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  height: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const StoreViewSeledted = styled.View`
  flex-direction: row;
  margin-top: ${SIZES.SPACE_FOR};
  height: ${widthPercentageToPx("14%")};
  max-height: ${widthPercentageToPx("14%")};
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

export const StoreSelectedImage = styled.Image`
  height: ${widthPercentageToPx("14%")};
  width: ${widthPercentageToPx("14%")};
  border-radius: ${widthPercentageToPx("7%")};
`;

export const StoreSelectedName = styled.Text`
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  font-family: ${FONTS.FONT_BOLD};
  color: ${COLORS.TEXT_PRIMARY};
  margin-left: ${SIZES.SPACE_FOR};
`;

// EXPANDED

export const InformationContainer = styled.View`
  flex-direction: row;
`;

export const InfomationSec = styled.Text`
  font-size: ${SIZES.FONT_SIZE_QUATERNARY};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_PRIMARY};
`;
