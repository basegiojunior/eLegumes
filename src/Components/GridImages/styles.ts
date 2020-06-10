import styled from "styled-components/native";
import { ViewProps } from "react-native";

import { widthPercentageToPx } from "../PercentageConverter";

import {
  FONT_SIZE_QUATERNARY,
  SPACE_TWO,
  SPACE_EIGHT,
  SPACE_FIVE,
  SPACE_SIX,
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
  margin: ${SPACE_EIGHT} 0 ${SPACE_FIVE} ${SPACE_SIX};
`;

export const TitleProduct = styled.Text`
  font-size: ${FONT_SIZE_QUATERNARY};
  margin-top: ${SPACE_TWO};
  margin-left: ${SPACE_TWO};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
  width: ${widthPercentageToPx("42%")};
`;

export const PriceProduct = styled.Text`
  margin-left: ${SPACE_TWO};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
  width: ${widthPercentageToPx("42%")};
`;

export const ProductsView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LinkContainerLine = styled.TouchableOpacity``;

export const ViewLinkLine = styled.View<Margin>`
  width: 50%;
  flex-direction: column;
  padding-left: ${({ last }) => (last ? SPACE_TWO : SPACE_SIX)};
  padding-right: ${({ last }) => (last ? SPACE_SIX : SPACE_TWO)};
  margin-bottom: 15px;
`;

export const ImageProductLine = styled.Image`
  border-radius: ${SPACE_TWO};
  width: ${widthPercentageToPx("42%")};
  height: ${widthPercentageToPx("25%")};
`;
