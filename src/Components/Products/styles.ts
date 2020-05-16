import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "../PercentageConverter";

import { FONT_BOLD } from "../../styles/fonts";
import { PRIMARY_COLOR, TEXT_PRIMARY, TERT_COLOR } from "../../styles/colors";

export const ProductContainer = styled.View`
  background-color: white;
  padding: ${widthPercentageToPx("4%")};
  margin: ${widthPercentageToPx("0.6%")} 0;
  width: ${widthPercentageToPx("100%")};
  flex: 1;
  flex-direction: row;
`;

export const NameProduct = styled.Text`
  font-size: ${widthPercentageToPx("4.7%")};
  line-height: ${widthPercentageToPx("5.5%")};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
`;

export const ImageProduct = styled.Image`
  width: ${widthPercentageToPx("27%")};
  height: ${widthPercentageToPx("25%")};
`;

export const ProductContent = styled.View`
  margin-left: ${widthPercentageToPx("3%")};
  justify-content: space-between;
  flex: 1;
`;

export const PromotionPrice = styled.Text`
  font-size: ${widthPercentageToPx("4.3%")};
  color: ${PRIMARY_COLOR};
  font-family: ${FONT_BOLD};
`;
export const NormalPrice = styled.Text`
  font-size: ${widthPercentageToPx("3.5%")};
  color: #888;
  font-family: ${FONT_BOLD};
  text-decoration: line-through;
`;

export const Div2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Price = styled.View``;

export const Add = styled(RectButton)`
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  background-color: ${TERT_COLOR};
  border-radius: ${widthPercentageToPx("1.5%")};
  width: ${widthPercentageToPx("10%")};
  height: ${widthPercentageToPx("10%")};
`;

export const AddText = styled.Text`
  color: #fff;
  font-family: ${FONT_BOLD};
`;
