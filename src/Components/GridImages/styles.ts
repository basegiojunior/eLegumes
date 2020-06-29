import styled from "styled-components/native";
import { ViewProps } from "react-native";

import { widthPercentageToPx } from "../PercentageConverter";

import SIZES from "~/styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

interface Margin extends ViewProps {
  last?: boolean;
}

export const Title = styled.Text`
  width: 100%;
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_SECONDARY};
  margin: ${SIZES.SPACE_EIGHT} 0 ${SIZES.SPACE_FIVE} ${SIZES.SPACE_SIX};
`;

export const TitleProduct = styled.Text`
  font-size: ${SIZES.FONT_SIZE_QUATERNARY};
  margin-top: ${SIZES.SPACE_TWO};
  margin-left: ${SIZES.SPACE_TWO};
  font-family: ${FONTS.FONT_BOLD};
  color: ${COLORS.TEXT_PRIMARY};
  width: ${widthPercentageToPx("42%")};
`;

export const PriceProduct = styled.Text`
  margin-left: ${SIZES.SPACE_TWO};
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_SECONDARY};
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
  padding-left: ${({ last }) => (last ? SIZES.SPACE_TWO : SIZES.SPACE_SIX)};
  padding-right: ${({ last }) => (last ? SIZES.SPACE_SIX : SIZES.SPACE_TWO)};
  margin-bottom: 15px;
`;

export const ImageProductLine = styled.Image`
  border-radius: ${SIZES.SPACE_TWO};
  width: ${widthPercentageToPx("42%")};
  height: ${widthPercentageToPx("25%")};
`;
