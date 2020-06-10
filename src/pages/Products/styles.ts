import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import {
  FONT_SIZE_SECONDARY,
  SPACE_SIX,
  SPACE_FIVE,
  SPACE_TWO,
  FONT_SIZE_QUATERNARY,
  SPACE_EIGHT,
  FONT_SIZE_PRIMARY,
  FONT_SIZE_TERTIARY,
  SPACE_SEVEN,
  SPACE_FOR,
  SPACE_ONE,
  SPACE_THREE,
} from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "../../styles/colors";

import { widthPercentageToPx } from "../../Components/PercentageConverter";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 0 ${SPACE_SIX};
`;

export const ImageCompanie = styled.Image`
  width: ${widthPercentageToPx("100%")};
  height: ${widthPercentageToPx("100%")};
`;

export const CompanieName = styled.Text`
  font-size: ${SPACE_SIX};
  font-family: ${FONT_BOLD};
  margin-top: ${SPACE_SIX};
`;

export const Icone = styled(Icon)`
  margin-right: ${SPACE_ONE};
`;
