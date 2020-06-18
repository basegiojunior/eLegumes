import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "../../Components/PercentageConverter";
import {
  SPACE_ONE,
  SPACE_TWO,
  SPACE_THREE,
  SPACE_FOR,
  SPACE_FIVE,
  SPACE_SIX,
  SPACE_SEVEN,
  FONT_SIZE_SECONDARY,
  FONT_SIZE_TERTIARY,
  FONT_SIZE_QUATERNARY,
} from "../../styles/sizes";
import { FONT_REGULAR, FONT_SEMIBOLD, FONT_BOLD } from "../../styles/fonts";
import {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  PRIMARY_COLOR,
} from "../../styles/colors";

export const Container = styled.View`
  flex-direction: column;
  padding: 0 ${SPACE_SIX};
  width: 100%;
`;

export const HeaderCompanie = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: ${SPACE_SIX} 0;
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

export const ProductChangeQuantityButton = styled(RectButton)`
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
