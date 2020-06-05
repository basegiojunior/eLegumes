import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import {
  SPACE_TWO,
  SPACE_SECONDARY,
  FONT_SIZE_TERTIARY,
} from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR } from "../../styles/fonts";
import { PRIMARY_COLOR, TEXT_PRIMARY } from "../../styles/colors";

import { widthPercentageToPx } from "../PercentageConverter";

type ButtonTextProps = {
  textColor?: string;
};

export const Container = styled(RectButton)`
  width: 100%;
  height: ${widthPercentageToPx("12%")};
  margin-top: ${SPACE_TWO};
  margin-bottom: ${SPACE_SECONDARY};
  background: ${PRIMARY_COLOR};
  border-radius: ${widthPercentageToPx("2.5%")};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${FONT_SIZE_TERTIARY};
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  /* font-weight: bold; */
  font-family: ${FONT_BOLD};
`;

export const ContainerSecondary = styled.TouchableWithoutFeedback`
  margin-bottom: ${SPACE_SECONDARY};
  background: transparent;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type Sec = {
  italic: boolean;
};

export const ButtonTextSecondary = styled.Text<Sec>`
  font-size: ${FONT_SIZE_TERTIARY};
  color: ${TEXT_PRIMARY};
  font-family: ${FONT_REGULAR};
  text-decoration-line: underline;
  /* font-style: italic; */
  padding: 0;
  /* font-weight: bold; */
`;

// ${(props) => (props.italic ? "font-style: italic" : "font-style: normal")};
