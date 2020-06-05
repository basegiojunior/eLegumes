import styled from "styled-components/native";

import { FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import {
  FONT_SIZE_SECONDARY,
  FONT_SIZE_TERTIARY,
  SPACE_SIX,
  SPACE_EIGHT,
  SPACE_TWO,
  SPACE_FOR,
  SPACE_THREE,
} from "../../styles/sizes";

import { TEXT_PRIMARY, TEXT_SECONDARY } from "../../styles/colors";

export const Recent = styled.View`
  padding-right: ${SPACE_SIX};
  padding-bottom: ${SPACE_TWO};
  padding-left: ${SPACE_SIX};
  flex-direction: column;
  width: 100%;
`;

export const RecentItem = styled.TouchableOpacity`
  margin-top: ${SPACE_TWO};
  padding: ${SPACE_TWO} 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const RecentTitle = styled.Text`
  margin-top: ${SPACE_EIGHT};
  margin-bottom: ${SPACE_TWO};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
`;

export const RecentText = styled.Text`
  font-family: ${FONT_REGULAR};
  color: ${TEXT_PRIMARY};
  font-size: ${FONT_SIZE_TERTIARY};
`;
