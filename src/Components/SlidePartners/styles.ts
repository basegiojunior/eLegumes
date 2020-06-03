import styled from "styled-components/native";

import {
  widthPercentageToPx,
  widthPercentageToDP,
} from "../PercentageConverter";

import {
  FONT_SIZE_PRIMARY,
  SPACE_PRIMARY,
  FONT_SIZE_SECONDARY,
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
  flex-direction: row;
  margin-left: ${widthPercentageToPx("4%")};
  width: ${widthPercentageToPx("88%")};
`;

export const ImagePartner = styled.Image<ImageProp>`
  width: ${widthPercentageToPx("21%")};
  height: ${widthPercentageToPx("21%")};
  margin-right: ${widthPercentageToPx("4%")};
  border-radius: ${widthPercentageToPx("2%")};
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

export const Title = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
  margin: ${widthPercentageToPx("8%")} 0 ${widthPercentageToPx("5%")}
    ${widthPercentageToPx("6%")};
`;

export const PricePartner = styled.Text`
  font-size: ${widthPercentageToPx("4%")};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
`;

export const ViewAboutLazy = styled.View`
  flex-direction: column;
  justify-content: center;
`;
