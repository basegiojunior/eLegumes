import styled from "styled-components/native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import {
  FONT_SIZE_SECONDARY,
  FONT_SIZE_TERTIARY,
  SPACE_SECONDARY,
  SPACE_TWO,
} from "~/styles/sizes";

import { TEXT_PRIMARY, SECONDARY_COLOR } from "~/styles/colors";
import { FONT_BOLD, FONT_REGULAR } from "~/styles/fonts";

import { widthPercentageToPx } from "../PercentageConverter";

interface ContainerProps {
  focused?: boolean;
  error?: boolean;
}

export const ContainerAll = styled.View`
  width: 100%;
  margin-bottom: ${widthPercentageToPx("2%")};
`;

export const Container = styled.View<ContainerProps>`
  padding: 0 ${SPACE_SECONDARY};
  background: #f0f0f0;
  border-radius: ${widthPercentageToPx("2.5%")};
  height: ${widthPercentageToPx("16%")};
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

export const TInput = styled.TextInput`
  flex: 1;
  font-size: ${FONT_SIZE_TERTIARY};
  height: 100%;
  font-family: ${FONT_REGULAR};
  margin-left: 0px;
  color: ${TEXT_PRIMARY};
`;

export const TInputMask = styled(TextInputMask)<TextInputMaskProps>`
  flex: 1;
  font-size: ${FONT_SIZE_TERTIARY};
  font-family: ${FONT_REGULAR};
  /* margin-left: 10px; */
  color: ${TEXT_PRIMARY};
`;

export const CampName = styled.Text<ContainerProps>`
  font-size: ${widthPercentageToPx("4.4%")};
  margin-left: ${widthPercentageToPx("5%")};
  /* font-weight: bold; */
  color: ${(props) => (props.focused ? SECONDARY_COLOR : "rgba(0,0,0,.75)")};
  font-family: ${FONT_BOLD};
`;

// CAMPO DE ALERTA

export const CampInformationView = styled.Text`
  z-index: 0;
  font-size: ${FONT_SIZE_SECONDARY};
  color: ${TEXT_PRIMARY};
  margin-right: ${SPACE_SECONDARY};
  padding: 0;
  justify-content: flex-end;
  font-family: ${FONT_REGULAR};
`;

export const ContainerCamp = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 2px;
  padding-left: 1px;
  align-items: center;
`;

export const AlertIcon = styled(Icon)`
  margin: 0 ${SPACE_SECONDARY};
`;

export const Icone = styled(Icon)`
  margin-left: ${SPACE_TWO};
  margin-right: ${SPACE_TWO};
`;
