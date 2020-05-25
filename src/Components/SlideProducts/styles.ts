import styled from "styled-components/native";

import {
  widthPercentageToPx,
  widthPercentageToDP,
} from "../PercentageConverter";

import { FONT_SIZE_PRIMARY, SPACE_PRIMARY } from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_PRIMARY2 } from "../../styles/colors";

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
    paddingHorizontal: widthPercentageToDP("1.5%"),
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

export const ImageProduct = styled.Image<ImageProp>`
  width: ${(props) =>
    props.nItemsInScreen
      ? widthPercentageToPx(`${80 / props.nItemsInScreen}%`)
      : widthPercentageToPx("40%")};
  height: ${(props) =>
    props.nItemsInScreen
      ? widthPercentageToPx(`${80 / props.nItemsInScreen}%`)
      : widthPercentageToPx("40%")};
`;

export const TitleProduct = styled.Text`
  font-size: ${FONT_SIZE_PRIMARY};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
`;

export const Title = styled.Text`
  font-size: ${FONT_SIZE_PRIMARY};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
  margin: ${SPACE_PRIMARY} 0 0 ${SPACE_PRIMARY};
`;

export const PriceProduct = styled.Text`
  font-size: ${widthPercentageToPx("4%")};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_PRIMARY2};
`;
