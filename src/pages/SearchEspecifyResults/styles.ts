import styled from "styled-components/native";

import SIZES from "~/styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

import { widthPercentageToPx } from "~/Components/PercentageConverter";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-left: ${SIZES.SPACE_SIX};
  background-color: #fff;
`;

export const Item = styled.TouchableOpacity`
  margin-top: ${SIZES.SPACE_FIVE};
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  border-radius: ${SIZES.SPACE_TWO};
  width: ${widthPercentageToPx("14%")};
  height: ${widthPercentageToPx("14%")};
`;

export const Name = styled.Text`
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  margin-left: ${SIZES.SPACE_SEVEN};
`;
