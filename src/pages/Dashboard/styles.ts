import styled, { css } from "styled-components/native";

import {
  widthPercentageToPx,
  widthPercentageToDP,
} from "../../Components/PercentageConverter";

import { FONT_SIZE_PRIMARY, FONT_SIZE_SECONDARY } from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_PRIMARY2 } from "../../styles/colors";

interface Margin {
  last?: boolean;
}

export const LateralSlide = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: "row",
    paddingHorizontal: widthPercentageToDP("1.5%"),
    paddingVertical: widthPercentageToDP("3%"),
  },
  keyboardShouldPersistTaps: "always",
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}))`
  background-color: transparent;
`;

export const LinkContainer = styled.TouchableWithoutFeedback``;

export const ViewLink = styled.View`
  flex-direction: column;
  margin: 0 ${widthPercentageToPx("1.5%")};
`;

export const ImageProduct = styled.Image`
  width: ${widthPercentageToPx("40%")};
  height: ${widthPercentageToPx("40%")};
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

export const ProductLine = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const LinkContainerLine = styled.TouchableWithoutFeedback``;

export const ViewLinkLine = styled.View<Margin>`
  width: 50%;
  flex-direction: column;
  padding-left: ${(props: any) =>
    props.last ? widthPercentageToPx("1.5%") : widthPercentageToPx("3%")};
  padding-right: ${(props: any) =>
    props.last ? widthPercentageToPx("3%") : widthPercentageToPx("1.5%")};
`;

export const ImageProductLine = styled.Image`
  width: ${widthPercentageToPx("45.5%")};
  height: ${widthPercentageToPx("45.5%")};
`;
