import styled from "styled-components/native";

import { widthPercentageToPx } from "../PercentageConverter";

import SIZES from "../../styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

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
    paddingRight: SIZES.SPACE_SIX_DP,
    paddingLeft: SIZES.SPACE_TWO_DP,
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
  margin-left: ${SIZES.SPACE_FOR};
  padding-top: ${SIZES.SPACE_FIVE};
`;

export const ImageProduct = styled.Image<ImageProp>`
  border-radius: ${SIZES.SPACE_TWO};
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
  font-size: ${SIZES.FONT_SIZE_QUATERNARY};
  margin-top: ${SIZES.SPACE_TWO};
  font-family: ${FONTS.FONT_BOLD};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const PriceProduct = styled.Text`
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const TitleLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const VerMais = styled.Text`
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  color: ${COLORS.TEXT_SECONDARY};
  font-family: ${FONTS.FONT_REGULAR};
  text-decoration-line: underline;
  margin-right: ${SIZES.SPACE_SIX};
`;
