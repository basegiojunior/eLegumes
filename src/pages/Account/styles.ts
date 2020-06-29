import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "~/Components/PercentageConverter";
import SIZES from "~/styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

export const ContainerProfile = styled.View`
  width: 100%;
  background-color: ${COLORS.SECONDARY_COLOR};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: ${widthPercentageToPx("36%")};
  height: ${widthPercentageToPx("36%")};
  border-radius: ${widthPercentageToPx("18%")};
  margin-top: ${widthPercentageToPx("8%")};
  margin-bottom: ${SIZES.SPACE_FIVE};
`;

export const IconProfileContainer = styled.View`
  width: ${widthPercentageToPx("36%")};
  height: ${widthPercentageToPx("36%")};
  border-radius: ${widthPercentageToPx("18%")};
  margin-top: ${widthPercentageToPx("15%")};
  margin-bottom: ${SIZES.SPACE_FIVE};
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const ProfileName = styled.Text`
  font-size: ${SIZES.SPACE_SIX};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: #fff;
  margin-bottom: ${widthPercentageToPx("10%")};
`;

// ITEMS

export const ItemsContainer = styled.View`
  flex-direction: column;
  width: 100%;
  margin: ${SIZES.SPACE_SEVEN} 0 ${SIZES.SPACE_ONE} 0;
`;

export const ItemLink = styled(RectButton).attrs(() => ({
  rippleColor: "rgba(0,0,0,0.1)",
}))``;

export const Item = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: ${SIZES.SPACE_TWO} 0 ${SIZES.SPACE_TWO} ${SIZES.SPACE_SIX};
`;

export const ItemText = styled.Text`
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_PRIMARY};
  margin-left: ${SIZES.SPACE_SIX};
`;

// BUTTONS

export const SignContainer = styled.View`
  flex-direction: row;
  margin-top: ${SIZES.SPACE_SIX};
  padding-left: ${SIZES.SPACE_SIX};
  padding-right: ${SIZES.SPACE_SIX};
  width: 100%;
`;

export const SignLeft = styled.View`
  flex: 1;
`;

export const SignRight = styled.View`
  flex: 1;
  margin-left: ${SIZES.SPACE_FOR};
`;
