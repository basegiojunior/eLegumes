import styled from "styled-components/native";

import {
  widthPercentageToPx,
  widthPercentageToDP,
} from "../PercentageConverter";

import {
  FONT_SIZE_QUATERNARY,
  FONT_SIZE_SECONDARY,
  SPACE_TWO_DP,
  SPACE_SIX_DP,
  SPACE_FOR,
  SPACE_TWO,
  SPACE_FIVE,
  FONT_SIZE_TERTIARY,
  SPACE_SIX,
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
    paddingRight: SPACE_SIX_DP,
    paddingLeft: SPACE_TWO_DP,
  },
  keyboardShouldPersistTaps: "always",
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}))`
  background-color: transparent;
`;

export const LinkContainer = styled.TouchableOpacity``;

export const ViewLink = styled.View`
  flex-direction: column;
  margin-left: ${SPACE_FOR};
  padding-top: ${SPACE_FIVE};
`;

export const ImageProduct = styled.Image<ImageProp>`
  border-radius: ${SPACE_TWO};
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
  margin-top: ${SPACE_TWO};
  margin-left: ${SPACE_TWO};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
`;

export const PriceProduct = styled.Text`
  margin-left: ${SPACE_TWO};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
`;

export const TitleLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const VerMais = styled.Text`
  font-size: ${FONT_SIZE_TERTIARY};
  color: ${TEXT_SECONDARY};
  font-family: ${FONT_REGULAR};
  text-decoration-line: underline;
  margin-right: ${SPACE_SIX};
`;
