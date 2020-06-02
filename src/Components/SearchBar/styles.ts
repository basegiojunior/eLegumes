import styled from "styled-components/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { widthPercentageToPx } from "../PercentageConverter";

import { FONT_SIZE_PRIMARY, SPACE_PRIMARY } from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_PRIMARY2 } from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  align-items: stretch;
  width: 100%;
`;

export const Input = styled.TextInput`
  font-family: ${FONT_BOLD};
  flex: 1;
  font-size: ${widthPercentageToPx("5.5%")};
  margin-left: ${widthPercentageToPx("4%")};
  color: #969d95;
`;

export const Icone = styled(Icon)`
  margin-right: ${widthPercentageToPx("4%")};
`;

export const ButtonSearch = styled.TouchableOpacity``;
