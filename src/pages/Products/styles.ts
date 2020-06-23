import styled from "styled-components/native";
import { Animated } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { RectButton } from "react-native-gesture-handler";
import {
  FONT_SIZE_SECONDARY,
  SPACE_SIX,
  SPACE_FIVE,
  SPACE_TWO,
  FONT_SIZE_QUATERNARY,
  SPACE_EIGHT,
  FONT_SIZE_PRIMARY,
  FONT_SIZE_TERTIARY,
  SPACE_SEVEN,
  SPACE_FOR,
  SPACE_ONE,
  SPACE_THREE,
} from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_SECONDARY, TERT_COLOR } from "../../styles/colors";

import {
  widthPercentageToPx,
  heightPercentageToPx,
} from "../../Components/PercentageConverter";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 0 ${SPACE_SIX};
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
  font-size: ${SPACE_SIX};
  font-family: ${FONT_BOLD};
  margin-top: ${SPACE_SIX};
  color: ${TEXT_PRIMARY};
`;

export const ProductAmount = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_REGULAR};
  margin-top: ${SPACE_ONE};
  margin-bottom: ${SPACE_FIVE};
  color: ${TEXT_SECONDARY};
`;

export const AlertStore = styled.View`
  background-color: #fff2b3;
  height: ${widthPercentageToPx("15%")};
  max-height: ${widthPercentageToPx("15%")};
  flex-grow: 1;
  flex-direction: row;
  border-radius: ${widthPercentageToPx("2.5%")};
  padding: 0 ${SPACE_FOR};
  justify-content: flex-start;
  align-items: center;
`;

export const AlertText = styled.Text`
  color: #736626;
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_REGULAR};
  flex-shrink: 1;
`;

export const Icone = styled(Icon)`
  margin-right: ${SPACE_FOR};
`;

export const Store = styled.TouchableNativeFeedback``;

export const StoreView = styled.View`
  flex-direction: row;
  padding: ${SPACE_SIX} ${SPACE_FOR} 0 ${SPACE_FOR};
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
  margin-right: ${SPACE_FIVE};
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
  color: ${TEXT_PRIMARY};
  font-size: ${FONT_SIZE_TERTIARY};
  font-family: ${FONT_REGULAR};
  flex-shrink: 1;
`;

export const StoreTextPrice = styled.Text`
  color: ${TEXT_SECONDARY};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_REGULAR};
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
  color: ${TEXT_PRIMARY};
  font-size: ${SPACE_FOR};
  font-family: ${FONT_REGULAR};
  margin: 0 ${SPACE_FOR};
  width: ${SPACE_FOR};
  text-align: center;
`;

export const AddProductPrice = styled.Text`
  color: ${TEXT_PRIMARY};
  font-size: ${SPACE_SIX};
  font-family: ${FONT_BOLD};
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
  color: ${TEXT_PRIMARY};
  font-size: ${SPACE_SEVEN};
  font-family: ${FONT_REGULAR};
`;

export const AddToCart = styled(RectButton).attrs(() => ({
  rippleColor: "rgba(0,0,0,0.1)",
}))`
  height: ${widthPercentageToPx("14%")};
  max-height: ${widthPercentageToPx("14%")};
  border-radius: ${widthPercentageToPx("2.5%")};
  margin: ${SPACE_EIGHT} 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #aa3169;
`;

export const AddToCartText = styled.Text`
  color: #fff;
  font-size: ${FONT_SIZE_TERTIARY};
  font-family: ${FONT_BOLD};
`;

export const TitleText = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  height: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
`;

export const StoreViewSeledted = styled.View`
  flex-direction: row;
  margin-top: ${SPACE_FOR};
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
  font-size: ${FONT_SIZE_TERTIARY};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
  margin-left: ${SPACE_FOR};
`;

// EXPANDED

export const ExpandedEndOff = styled.Modal`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 4;
`;

export const ExpandedEndBackground = styled(Animated.View)`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
`;

export const ExpandedLink = styled.TouchableWithoutFeedback`
  z-index: 5;
`;

export const ExpandedEnd = styled(Animated.View)`
  height: ${heightPercentageToPx("65%")};
  padding-top: ${SPACE_SEVEN};
  padding-bottom: ${SPACE_SEVEN};
  padding-left: ${SPACE_SIX};
  padding-right: ${SPACE_SIX};
  width: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 6;
  border-top-left-radius: ${SPACE_SIX};
  border-top-right-radius: ${SPACE_SIX};
  justify-content: space-between;
`;

export const InfoTopContainer = styled.View`
  padding: ${heightPercentageToPx("3%")} ${SPACE_SIX};
  border-radius: ${SPACE_THREE};
  background-color: ${TERT_COLOR};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoTopLeft = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InfoTopTitle = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: #fff;
`;

export const InfoTopPrice = styled.Text`
  font-size: ${SPACE_SEVEN};
  font-family: ${FONT_SEMIBOLD};
  color: #fff;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

type LastType = {
  last?: boolean;
};

export const ButtonsIntern = styled.View<LastType>`
  flex-direction: row;
  padding-left: ${({ last }) => (last ? SPACE_FOR : 0)};
  flex: 1;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
`;

export const InformationContainerIntern = styled.View`
  flex-direction: column;
  height: ${widthPercentageToPx("16%")};
  align-items: flex-start;
  flex: 1;
  justify-content: space-between;
`;

export const InfomationSec = styled.Text`
  font-size: ${SPACE_FIVE};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_PRIMARY};
`;
