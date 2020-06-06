import styled from "styled-components/native";

import { widthPercentageToPx } from "../../Components/PercentageConverter";
import ButtonText from "../../Components/Button/buttonText";

import { FONT_REGULAR } from "../../styles/fonts";
import {
  FONT_SIZE_TERTIARY,
  SPACE_SIX,
  SPACE_FIVE,
  SPACE_FOR,
  SPACE_SEVEN,
} from "../../styles/sizes";

import { TEXT_PRIMARY } from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  padding-left: ${SPACE_SIX};
  background-color: #fff;
`;

export const Button = styled(ButtonText)`
  margin-top: ${SPACE_FOR};
`;
