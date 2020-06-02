import styled from "styled-components/native";

import {
  widthPercentageToPx,
  widthPercentageToDP,
} from "../PercentageConverter";

import {
  FONT_SIZE_QUATERNARY,
  SPACE_PRIMARY,
  FONT_SIZE_SECONDARY,
  FONT_SIZE_TERTIARY,
} from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "../../styles/colors";

interface Margin {
  last?: boolean;
}

interface ImageProp {
  nItemsInScreen?: number;
}

export const Content = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const LateralSlide = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: "row",
    paddingRight: widthPercentageToDP("6%"),
    paddingLeft: widthPercentageToDP("2%"),
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
  margin-left: ${widthPercentageToPx("4%")};
`;

export const ImageProduct = styled.Image<ImageProp>`
  border-radius: ${widthPercentageToPx("2%")};
  width: ${(props) =>
    props.nItemsInScreen
      ? widthPercentageToPx(`${92 / props.nItemsInScreen - 4}%`)
      : widthPercentageToPx("40%")};
  height: ${(props) =>
    props.nItemsInScreen
      ? widthPercentageToPx(`${55 / props.nItemsInScreen - 4}%`)
      : widthPercentageToPx("40%")};
`;

export const TitleProduct = styled.Text`
  font-size: ${FONT_SIZE_QUATERNARY};
  margin-top: ${widthPercentageToPx("2%")};
  margin-left: ${widthPercentageToPx("2%")};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
`;

export const Title = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
  margin: ${widthPercentageToPx("8%")} 0 ${widthPercentageToPx("5%")}
    ${widthPercentageToPx("6%")};
`;

export const PriceProduct = styled.Text`
  margin-left: ${widthPercentageToPx("2%")};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
`;
