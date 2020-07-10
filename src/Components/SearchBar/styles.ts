import styled from "styled-components/native";
import Icon from "~/Components/Icon";

import { widthPercentageToPx } from "../PercentageConverter";

import FONTS from "~/styles/fonts";
import SIZES from "~/styles/sizes";
import COLORS from "~/styles/colors";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.TextInput`
  font-family: ${FONTS.FONT_BOLD};
  flex: 1;
  font-size: ${widthPercentageToPx("5.5%")};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const Icone = styled(Icon)`
  margin-right: ${SIZES.SPACE_FOR};
`;

export const ButtonSearch = styled.TouchableOpacity``;
