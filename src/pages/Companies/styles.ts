import styled from "styled-components/native";
import { ViewProps } from "react-native";

import {
  FONT_SIZE_SECONDARY,
  SPACE_SIX,
  SPACE_FIVE,
  SPACE_TWO,
  FONT_SIZE_QUATERNARY,
  SPACE_EIGHT,
} from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "../../styles/colors";

import { widthPercentageToPx } from "../../Components/PercentageConverter";

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ImageCompanie = styled.Image`
  width: ${widthPercentageToPx("100%")};
  height: ${widthPercentageToPx("100%")};
`;
