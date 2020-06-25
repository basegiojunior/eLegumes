import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { SPACE_TWO, SPACE_SECONDARY, FONT_SIZE_TERTIARY } from "~/styles/sizes";
import { FONT_BOLD, FONT_REGULAR } from "~/styles/fonts";
import { PRIMARY_COLOR, TEXT_PRIMARY } from "~/styles/colors";

import { widthPercentageToPx } from "~/Components/PercentageConverter";

type ButtonTextProps = {
  textColor?: string;
};

export const ContainerLink = styled.TouchableWithoutFeedback``;

export const ContainerView = styled.View`
  width: 100%;
  background-color: ${PRIMARY_COLOR};
  border-radius: ${widthPercentageToPx("2.5%")};
  margin-top: ${SPACE_TWO};
  margin-bottom: ${SPACE_SECONDARY};
`;

export const Container = styled(RectButton).attrs(() => ({
  rippleColor: "rgba(0,0,0,0.1)",
}))`
  height: ${widthPercentageToPx("12%")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerGhostLink = styled.TouchableWithoutFeedback``;

export const ContainerGhostView = styled.View`
  width: 100%;
  background-color: #fff;
  border-color: ${PRIMARY_COLOR};
  border-width: 2px;
  border-radius: ${widthPercentageToPx("2.5%")};
  margin-top: ${SPACE_TWO};
  margin-bottom: ${SPACE_SECONDARY};
`;

export const ContainerGhost = styled(RectButton).attrs(() => ({
  rippleColor: "rgba(0,0,0,0.1)",
}))`
  height: ${widthPercentageToPx("11.2%")};
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTextGhost = styled.Text<ButtonTextProps>`
  font-size: ${FONT_SIZE_TERTIARY};
  color: ${(props) => (props.textColor ? props.textColor : PRIMARY_COLOR)};
  /* font-weight: bold; */
  font-family: ${FONT_BOLD};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${FONT_SIZE_TERTIARY};
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

export const ButtonTextSecondary = styled.Text`
  font-size: ${FONT_SIZE_TERTIARY};
  color: ${TEXT_PRIMARY};
  font-family: ${FONT_REGULAR};
  text-decoration-line: underline;
  padding: 0;
`;

// ${(props) => (props.italic ? "font-style: italic" : "font-style: normal")};
