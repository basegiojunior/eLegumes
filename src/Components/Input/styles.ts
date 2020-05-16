import styled from "styled-components/native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";

import {
  FONT_SIZE_PRIMARY,
  SPACE_SECONDARY,
  BORDER_ROUND,
  HEIGHT_PRIMARY,
} from "../../styles/sizes";
import {
  PRIMARY_COLOR,
  TEXT_PRIMARY,
  SECONDARY_COLOR,
} from "../../styles/colors";
import { FONT_BOLD, FONT_REGULAR } from "../../styles/fonts";

import { widthPercentageToPx } from "../PercentageConverter";

interface ContainerProps {
  focused?: boolean;
  error?: boolean;
}

export const ContainerAll = styled.View`
  width: 100%;
  margin-top: ${widthPercentageToPx("2.5%")};
`;

export const Container = styled.View<ContainerProps>`
  padding: 0 ${SPACE_SECONDARY};
  background: #f9f9f9;
  border-radius: ${BORDER_ROUND};
  height: ${HEIGHT_PRIMARY};
  border-width: 1px;
  border-color: ${(props) => {
    if (props.error) {
      return "#f00";
    }
    if (props.focused) {
      return SECONDARY_COLOR;
    }
    return "rgba(0,0,0,.45)";
  }};
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

export const TInput = styled.TextInput`
  flex: 1;
  font-size: ${FONT_SIZE_PRIMARY};
  height: 100%;
  font-family: ${FONT_REGULAR};
  margin-left: 0px;
  color: ${TEXT_PRIMARY};
`;

export const TInputMask = styled(TextInputMask)`
  flex: 1;
  font-size: ${FONT_SIZE_PRIMARY};
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
