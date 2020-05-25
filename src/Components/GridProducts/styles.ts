import styled from "styled-components/native";
import { ViewProps } from "react-native";

import { widthPercentageToPx } from "../PercentageConverter";

import { FONT_SIZE_PRIMARY, SPACE_PRIMARY } from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_PRIMARY2 } from "../../styles/colors";

interface Margin extends ViewProps {
  last?: boolean;
}

export const Title = styled.Text`
  width: 100%;
  font-size: ${FONT_SIZE_PRIMARY};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
  margin: ${SPACE_PRIMARY} 0 0 ${SPACE_PRIMARY};
`;

export const TitleProduct = styled.Text`
  font-size: ${FONT_SIZE_PRIMARY};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
`;

export const PriceProduct = styled.Text`
  font-size: ${widthPercentageToPx("4%")};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_PRIMARY2};
`;

export const ProductsView = styled.View`
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const LinkContainerLine = styled.TouchableWithoutFeedback``;

export const ViewLinkLine = styled.View<Margin>`
  width: 50%;
  flex-direction: column;
  padding-left: ${({ last }) =>
    last ? widthPercentageToPx("1.5%") : widthPercentageToPx("3%")};
  padding-right: ${({ last }) =>
    last ? widthPercentageToPx("3%") : widthPercentageToPx("1.5%")};
  margin-bottom: 15px;
`;

export const ImageProductLine = styled.Image`
  width: ${widthPercentageToPx("45.5%")};
  height: ${widthPercentageToPx("45.5%")};
`;
