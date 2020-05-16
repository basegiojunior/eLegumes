import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "../../Components/PercentageConverter";

import { PRIMARY_COLOR } from "../../styles/colors";
import { FONT_REGULAR, FONT_BOLD } from "../../styles/fonts";

export const Container = styled.View`
  padding: ${widthPercentageToPx("1.5%")} 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ProductContainer = styled.View`
  background-color: white;
  padding: ${widthPercentageToPx("2%")};
  margin: ${widthPercentageToPx("0.6%")} 0;
  width: ${widthPercentageToPx("100%")};
  flex: 1;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #dfdfdf;
  flex-direction: row;
`;

export const NameProduct = styled.Text`
  font-size: ${widthPercentageToPx("4.2%")};
  font-family: ${FONT_REGULAR};
  color: red;
`;

export const ImageProduct = styled.Image`
  width: ${widthPercentageToPx("30%")};
  height: ${widthPercentageToPx("30%")};
`;

export const ProductContent = styled.View`
  margin-left: ${widthPercentageToPx("2%")};
  justify-content: space-between;
  flex: 1;
`;

export const PromotionPrice = styled.Text`
  font-size: ${widthPercentageToPx("5.2%")};
  color: ${PRIMARY_COLOR};
  font-family: ${FONT_BOLD};
`;
export const NormalPrice = styled.Text`
  font-size: ${widthPercentageToPx("4.5%")};
  color: #666;
  font-family: ${FONT_BOLD};
  text-decoration: line-through;
`;

export const Div2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Price = styled.View``;

export const Add = styled(RectButton)`
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  background-color: #9b2915;
  width: ${widthPercentageToPx("25%")};
  height: ${widthPercentageToPx("12%")};
`;

export const AddText = styled.Text`
  color: #fff;
  font-family: ${FONT_BOLD};
`;
