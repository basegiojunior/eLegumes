import styled from "styled-components/native";

import FONTS from "~/styles/fonts";
import SIZES from "~/styles/sizes";

import COLORS from "~/styles/colors";

export const TitleText = styled.Text`
  margin-top: ${SIZES.SPACE_EIGHT};
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_SECONDARY};
`;
