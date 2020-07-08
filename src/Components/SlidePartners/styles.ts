import styled from "styled-components/native";

import { widthPercentageToPx } from "../PercentageConverter";

import SIZES from "~/styles/sizes";
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
  flex-direction: row;
  margin-left: ${SIZES.SPACE_FOR};
  padding-top: ${SIZES.SPACE_FIVE};
  width: ${widthPercentageToPx("88%")};
`;

export const ImagePartner = styled.Image<ImageProp>`
  width: ${widthPercentageToPx("21%")};
  height: ${widthPercentageToPx("21%")};
  margin-right: ${SIZES.SPACE_FOR};
  border-radius: ${SIZES.SPACE_TWO};
`;

export const ImagePartnerEmpry = styled.View<ImageProp>`
  width: ${widthPercentageToPx("21%")};
  height: ${widthPercentageToPx("21%")};
  margin-right: ${SIZES.SPACE_FOR};
  border-radius: ${SIZES.SPACE_TWO};
  background-color: ${COLORS.BACKGROUND_IMAGES};
`;

export const ViewAbout = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const TitlePartner = styled.Text`
  font-size: ${widthPercentageToPx("5.2%")};
  font-family: ${FONTS.FONT_BOLD};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const TextPartner = styled.Text`
  font-size: ${widthPercentageToPx("3.8%")};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const PricePartner = styled.Text`
  font-size: ${SIZES.SPACE_FOR};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const ViewAboutLazy = styled.View`
  flex-direction: column;
  justify-content: center;
`;
