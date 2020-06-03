import styled from "styled-components/native";
import { ViewProps } from "react-native";

import { widthPercentageToPx } from "../PercentageConverter";

import {
  FONT_SIZE_QUATERNARY,
  SPACE_PRIMARY,
  FONT_SIZE_SECONDARY,
} from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "../../styles/colors";

interface Margin extends ViewProps {
  last?: boolean;
}

export const Title = styled.Text`
  width: 100%;
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
  margin: ${widthPercentageToPx("8%")} 0 ${widthPercentageToPx("5%")}
    ${widthPercentageToPx("6%")};
`;

export const TitleProduct = styled.Text`
  font-size: ${FONT_SIZE_QUATERNARY};
  margin-top: ${widthPercentageToPx("2%")};
  margin-left: ${widthPercentageToPx("2%")};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
`;

export const PriceProduct = styled.Text`
  margin-left: ${widthPercentageToPx("2%")};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
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
    last ? widthPercentageToPx("2%") : widthPercentageToPx("6%")};
  padding-right: ${({ last }) =>
    last ? widthPercentageToPx("6%") : widthPercentageToPx("2%")};
  margin-bottom: 15px;
`;

export const ImageProductLine = styled.Image`
  border-radius: ${widthPercentageToPx("2%")};
  width: ${widthPercentageToPx("42%")};
  height: ${widthPercentageToPx("25%")};
`;
