import styled from "styled-components/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { widthPercentageToPx } from "../PercentageConverter";

import { FONT_BOLD } from "../../styles/fonts";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.TextInput`
  font-family: ${FONT_BOLD};
  flex: 1;
  font-size: ${widthPercentageToPx("5.5%")};
  color: #969d95;
`;

export const Icone = styled(Icon)`
  margin-right: ${widthPercentageToPx("4%")};
`;

export const ButtonSearch = styled.TouchableOpacity``;
