import styled from "styled-components/native";

import FONTS from "~/styles/fonts";
import SIZES from "~/styles/sizes";
import COLORS from "~/styles/colors";

export const Recent = styled.View`
  padding-right: ${SIZES.SPACE_SIX};
  padding-bottom: ${SIZES.SPACE_TWO};
  padding-left: ${SIZES.SPACE_SIX};
  flex-direction: column;
  width: 100%;
`;

export const RecentItem = styled.TouchableOpacity`
  margin-top: ${SIZES.SPACE_TWO};
  padding: ${SIZES.SPACE_TWO} 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const RecentTitle = styled.Text`
  margin-top: ${SIZES.SPACE_EIGHT};
  margin-bottom: ${SIZES.SPACE_TWO};
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const RecentText = styled.Text`
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
`;
