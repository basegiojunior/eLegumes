import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Animated } from "react-native";

import { widthPercentageToPx } from "~/Components/PercentageConverter";
import SIZES from "~/styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const HeaderCompanie = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-top: ${SIZES.SPACE_SIX};
  margin-right: ${SIZES.SPACE_SIX};
  margin-bottom: ${SIZES.SPACE_TWO};
  margin-left: ${SIZES.SPACE_SIX};
  padding: ${SIZES.SPACE_THREE} 0;
`;

type checkType = {
  selected: boolean;
};

export const HeaderCompanieCheck = styled.View<checkType>`
  width: ${SIZES.SPACE_SIX};
  height: ${SIZES.SPACE_SIX};
  border-radius: ${SIZES.SPACE_ONE};
  background-color: ${({ selected }) =>
    selected ? COLORS.PRIMARY_COLOR : "#F0F0F0"};
  align-items: center;
  justify-content: center;
`;

export const HeaderCompanieTitle = styled.Text`
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_PRIMARY};
  text-align: left;
  flex: 1;
  margin-left: ${SIZES.SPACE_FIVE};
`;

// PRODUCT

export const ProductContainer = styled.View`
  flex-direction: row;
  padding-top: ${SIZES.SPACE_FOR};
  padding-right: ${SIZES.SPACE_SIX};
  padding-bottom: ${SIZES.SPACE_FOR};
  padding-left: ${SIZES.SPACE_SIX};
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const ProductImage = styled.Image`
  width: ${widthPercentageToPx("19%")};
  height: ${widthPercentageToPx("19%")};
  border-radius: ${SIZES.SPACE_TWO};
`;

export const ProductImageEmpty = styled.View`
  width: ${widthPercentageToPx("19%")};
  height: ${widthPercentageToPx("19%")};
  border-radius: ${SIZES.SPACE_TWO};
  background-color: ${COLORS.BACKGROUND_IMAGES};
`;

export const ProductAboutContainer = styled.View`
  flex-direction: column;
  margin-left: ${SIZES.SPACE_FOR};
  justify-content: space-between;
  flex: 1;
`;

export const ProductAboutTop = styled.View`
  flex-direction: column;
`;

export const ProductTitle = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: ${SIZES.FONT_SIZE_QUATERNARY};
  font-family: ${FONTS.FONT_BOLD};
  color: ${COLORS.TEXT_PRIMARY};
  overflow: hidden;
  flex-wrap: nowrap;
`;

export const ProductPrice = styled.Text`
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const ProductQuantity = styled.Text`
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_SECONDARY};
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
  border-radius: ${SIZES.SPACE_TWO};
  background-color: #f0f0f0;
  align-items: center;
  justify-content: center;
`;

export const ProductChangeQuantityButtonText = styled.Text`
  font-family: ${FONTS.FONT_REGULAR};
  font-size: ${SIZES.SPACE_SEVEN};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const ProductChangeQuantityText = styled.Text`
  font-family: ${FONTS.FONT_REGULAR};
  font-size: ${SIZES.SPACE_FIVE};
  color: ${COLORS.TEXT_PRIMARY};
`;

// TOTAL PRICE

export const DeliveryContainer = styled.View`
  width: 100%;
  padding: ${SIZES.SPACE_FOR} ${SIZES.SPACE_SIX};
  border-bottom-color: #f0f0f0;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryText = styled.Text`
  font-family: ${FONTS.FONT_REGULAR};
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const DeliveryPrice = styled.Text`
  font-family: ${FONTS.FONT_REGULAR};
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  color: ${COLORS.PRIMARY_COLOR};
`;

// ABA DE FINALIZAR COMPRA

export const EndContainer = styled(Animated.View)`
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${widthPercentageToPx("20%")};
  padding: 0 ${SIZES.SPACE_SIX};
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
  font-size: ${SIZES.SPACE_THREE};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const EndContainerViewLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EndContainerPrice = styled.Text`
  font-size: ${SIZES.SPACE_SIX};
  font-family: ${FONTS.FONT_BOLD};
  color: ${COLORS.SECONDARY_COLOR};
  margin-right: 6px;
`;

// EXPANDED END

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
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const InfomationSec = styled.Text`
  font-size: ${SIZES.SPACE_FIVE};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_PRIMARY};
`;
