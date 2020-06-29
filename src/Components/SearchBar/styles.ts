import styled from "styled-components/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { widthPercentageToPx } from "../PercentageConverter";

import FONTS from "~/styles/fonts";
import SIZES from "~/styles/sizes";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.TextInput`
  font-family: ${FONTS.FONT_BOLD};
  flex: 1;
  font-size: ${widthPercentageToPx("5.5%")};
  color: #969d95;
`;

export const Icone = styled(Icon)`
  margin-right: ${SIZES.SPACE_FOR};
`;

export const ButtonSearch = styled.TouchableOpacity``;
