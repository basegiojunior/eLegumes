import styled from "styled-components/native";

import {
  SPACE_SIX,
  FONT_SIZE_TERTIARY,
  SPACE_FIVE,
  SPACE_TWO,
  SPACE_SEVEN,
} from "../../styles/sizes";

import { widthPercentageToPx } from "../../Components/PercentageConverter";
import { FONT_REGULAR } from "../../styles/fonts";

import { TEXT_PRIMARY } from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-left: ${SPACE_SIX};
  background-color: #fff;
`;

export const Item = styled.TouchableOpacity`
  margin-top: ${SPACE_FIVE};
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  border-radius: ${SPACE_TWO};
  width: ${widthPercentageToPx("14%")};
  height: ${widthPercentageToPx("14%")};
`;

export const Name = styled.Text`
  font-family: ${FONT_REGULAR};
  color: ${TEXT_PRIMARY};
  font-size: ${FONT_SIZE_TERTIARY};
  margin-left: ${SPACE_SEVEN};
`;
