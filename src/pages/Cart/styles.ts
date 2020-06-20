import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Animated } from "react-native";

import {
  widthPercentageToPx,
  heightPercentageToPx,
} from "../../Components/PercentageConverter";
import {
  SPACE_ONE,
  SPACE_TWO,
  SPACE_THREE,
  SPACE_FOR,
  SPACE_FIVE,
  SPACE_SIX,
  SPACE_SEVEN,
  SPACE_EIGHT,
  FONT_SIZE_SECONDARY,
  FONT_SIZE_TERTIARY,
  FONT_SIZE_QUATERNARY,
} from "../../styles/sizes";
import { FONT_REGULAR, FONT_SEMIBOLD, FONT_BOLD } from "../../styles/fonts";
import {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERT_COLOR,
} from "../../styles/colors";

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const HeaderCompanie = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: ${SPACE_SIX} ${SPACE_SIX} ${SPACE_TWO} ${SPACE_SIX};
  padding: ${SPACE_THREE} 0;
`;

type checkType = {
  selected: boolean;
};

export const HeaderCompanieCheck = styled.View<checkType>`
  width: ${SPACE_SIX};
  height: ${SPACE_SIX};
  border-radius: ${SPACE_ONE};
  background-color: ${({ selected }) => (selected ? PRIMARY_COLOR : "#F0F0F0")};
  align-items: center;
  justify-content: center;
`;

export const HeaderCompanieTitle = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_PRIMARY};
  text-align: left;
  flex: 1;
  margin-left: ${SPACE_FIVE};
`;

// PRODUCT

export const ProductContainer = styled.View`
  flex-direction: row;
  padding: ${SPACE_FOR} ${SPACE_SIX} ${SPACE_FOR} ${SPACE_SIX};
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const ProductImage = styled.Image`
  width: ${widthPercentageToPx("19%")};
  height: ${widthPercentageToPx("19%")};
  border-radius: ${SPACE_TWO};
`;

export const ProductAboutContainer = styled.View`
  flex-direction: column;
  margin-left: ${SPACE_FOR};
  justify-content: space-between;
  flex: 1;
`;

export const ProductAboutTop = styled.View`
  flex-direction: column;
`;

export const ProductTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: ${FONT_SIZE_QUATERNARY};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
  overflow: hidden;
  flex-wrap: nowrap;
`;

export const ProductPrice = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
`;

export const ProductQuantity = styled.Text`
  font-size: ${FONT_SIZE_TERTIARY};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
`;

export const ProductChangeQuantityContainer = styled.View`
  flex-direction: row;
  align-self: flex-end;
  margin-left: 10px;
  height: 100%;
  width: ${widthPercentageToPx("30%")};
  max-width: ${widthPercentageToPx("30%")};
  align-items: flex-end;
`;

export const ProductChangeQuantityIntern = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProductChangeQuantityButton = styled(RectButton).attrs(() => ({
  rippleColor: "rgba(0,0,0,0.1)",
}))`
  width: ${widthPercentageToPx("10%")};
  height: ${widthPercentageToPx("10%")};
  border-radius: ${SPACE_TWO};
  background-color: #f0f0f0;
  align-items: center;
  justify-content: center;
`;

export const ProductChangeQuantityButtonText = styled.Text`
  font-family: ${FONT_REGULAR};
  font-size: ${SPACE_SEVEN};
  color: ${TEXT_PRIMARY};
`;

export const ProductChangeQuantityText = styled.Text`
  font-family: ${FONT_REGULAR};
  font-size: ${SPACE_FIVE};
  color: ${TEXT_PRIMARY};
`;

// TOTAL PRICE

export const DeliveryContainer = styled.View`
  width: 100%;
  padding: ${SPACE_FOR} ${SPACE_SIX};
  border-bottom-color: #f0f0f0;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryText = styled.Text`
  font-family: ${FONT_REGULAR};
  font-size: ${FONT_SIZE_TERTIARY};
  color: ${TEXT_PRIMARY};
`;

export const DeliveryPrice = styled.Text`
  font-family: ${FONT_REGULAR};
  font-size: ${FONT_SIZE_TERTIARY};
  color: ${PRIMARY_COLOR};
`;

// ABA DE FINALIZAR COMPRA

export const EndContainer = styled(Animated.View)`
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${widthPercentageToPx("20%")};
  padding: 0 ${SPACE_SIX};
  width: 100%;
  position: absolute;
  background-color: #fff;
  border-top-color: #f0f0f0;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  border-width: 3px;
  flex-direction: row;
`;

export const EndContainerLeftLink = styled.TouchableWithoutFeedback``;

export const EndContainerLeft = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

export const EndContainerRight = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const EndContainerTitle = styled.Text`
  font-size: ${SPACE_THREE};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
`;

export const EndContainerViewLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EndContainerPrice = styled.Text`
  font-size: ${SPACE_SIX};
  font-family: ${FONT_BOLD};
  color: ${SECONDARY_COLOR};
  margin-right: 6px;
`;

// EXPANDED END

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

export const TotalPriceContainer = styled.View`
  padding: ${heightPercentageToPx("3%")} ${SPACE_SIX};
  border-radius: ${SPACE_THREE};
  background-color: ${TERT_COLOR};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPriceLeft = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TotalPriceTitle = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: #fff;
`;

export const TotalPricePrice = styled.Text`
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

export const InfomationTitle = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
`;

export const InfomationSec = styled.Text`
  font-size: ${SPACE_FIVE};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_PRIMARY};
`;
