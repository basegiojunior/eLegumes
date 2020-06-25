import styled from "styled-components/native";

import { FONT_SEMIBOLD } from "~/styles/fonts";
import { FONT_SIZE_SECONDARY, SPACE_EIGHT } from "~/styles/sizes";

import { TEXT_SECONDARY } from "~/styles/colors";

export const TitleText = styled.Text`
  margin-top: ${SPACE_EIGHT};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
`;
