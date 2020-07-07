import styled from "styled-components/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import SIZES from "~/styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

import { widthPercentageToPx } from "~/Components/PercentageConverter";

export const Container = styled.View`
  margin: ${SIZES.SPACE_SIX};
`;

export const ContainerTitle = styled.View`
  margin: 0 ${SIZES.SPACE_SIX} ${SIZES.SPACE_SIX} ${SIZES.SPACE_SIX};
`;

export const ContainerGrid = styled.View`
  flex-direction: column;
`;

export const AlertStore = styled.View`
  background-color: #e8f7ed;
  height: ${widthPercentageToPx("17%")};
  max-height: ${widthPercentageToPx("17%")};
  flex-grow: 1;
  flex-direction: row;
  border-radius: ${widthPercentageToPx("2.5%")};
  padding: ${SIZES.SPACE_FOR};
  justify-content: flex-start;
  margin-bottom: ${SIZES.SPACE_FIVE};
  align-items: center;
`;

export const AlertText = styled.Text`
  color: #1f6761;
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_REGULAR};
  margin-left: ${SIZES.SPACE_FOR};
  flex-shrink: 1;
`;
