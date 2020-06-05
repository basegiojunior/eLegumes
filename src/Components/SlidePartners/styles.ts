import styled from "styled-components/native";

import { widthPercentageToPx } from "../PercentageConverter";

import {
  SPACE_FIVE,
  SPACE_TWO,
  SPACE_FOR,
  SPACE_TWO_DP,
  SPACE_SIX_DP,
} from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR } from "../../styles/fonts";
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

export const LinkContainer = styled.TouchableWithoutFeedback``;

export const ViewLink = styled.View`
  flex-direction: row;
  margin-left: ${SPACE_FOR};
  padding-top: ${SPACE_FIVE};
  width: ${widthPercentageToPx("88%")};
`;

export const ImagePartner = styled.Image<ImageProp>`
  width: ${widthPercentageToPx("21%")};
  height: ${widthPercentageToPx("21%")};
  margin-right: ${SPACE_FOR};
  border-radius: ${SPACE_TWO};
`;

export const ViewAbout = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const TitlePartner = styled.Text`
  font-size: ${widthPercentageToPx("5.2%")};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
`;

export const TextPartner = styled.Text`
  font-size: ${widthPercentageToPx("3.8%")};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
`;

export const PricePartner = styled.Text`
  font-size: ${SPACE_FOR};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
`;

export const ViewAboutLazy = styled.View`
  flex-direction: column;
  justify-content: center;
`;
