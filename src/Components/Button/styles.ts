import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import {
  FONT_SIZE_PRIMARY,
  SPACE_SECONDARY,
  BORDER_ROUND,
  HEIGHT_PRIMARY,
} from "../../styles/sizes";
import { FONT_BOLD_ITALIC, FONT_BOLD } from "../../styles/fonts";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../styles/colors";

type ButtonTextProps = {
  textColor?: string;
};

export const Container = styled(RectButton)`
  width: 100%;
  height: ${HEIGHT_PRIMARY};
  margin-bottom: ${SPACE_SECONDARY};
  background: ${PRIMARY_COLOR};
  border-radius: ${BORDER_ROUND};

  elevation: 3;
  shadow-opacity: 0.22;
  shadow-radius: 2.22px;
  shadow-color: black;
  shadow-offset: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${FONT_SIZE_PRIMARY};
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  /* font-weight: bold; */
  font-family: ${FONT_BOLD};
`;

export const ContainerSecondary = styled.TouchableOpacity`
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
  font-size: ${FONT_SIZE_PRIMARY};
  color: ${SECONDARY_COLOR};
  /* font-style: italic; */
  padding: 0;
  /* font-weight: bold; */
  ${(props) =>
    props.italic
      ? `font-family: ${FONT_BOLD_ITALIC}`
      : `font-family: ${FONT_BOLD}`}
`;

// ${(props) => (props.italic ? "font-style: italic" : "font-style: normal")};
