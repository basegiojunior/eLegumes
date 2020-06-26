import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "~/Components/PercentageConverter";
import {
  SPACE_ONE,
  SPACE_TWO,
  SPACE_FOR,
  SPACE_FIVE,
  SPACE_SIX,
  SPACE_SEVEN,
  FONT_SIZE_TERTIARY,
} from "~/styles/sizes";
import { FONT_REGULAR, FONT_SEMIBOLD } from "~/styles/fonts";
import { TEXT_PRIMARY, SECONDARY_COLOR } from "~/styles/colors";

export const ContainerProfile = styled.View`
  width: 100%;
  background-color: ${SECONDARY_COLOR};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: ${widthPercentageToPx("36%")};
  height: ${widthPercentageToPx("36%")};
  border-radius: ${widthPercentageToPx("18%")};
  margin-top: ${widthPercentageToPx("8%")};
  margin-bottom: ${SPACE_FIVE};
`;

export const IconProfileContainer = styled.View`
  width: ${widthPercentageToPx("36%")};
  height: ${widthPercentageToPx("36%")};
  border-radius: ${widthPercentageToPx("18%")};
  margin-top: ${widthPercentageToPx("15%")};
  margin-bottom: ${SPACE_FIVE};
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const ProfileName = styled.Text`
  font-size: ${SPACE_SIX};
  font-family: ${FONT_SEMIBOLD};
  color: #fff;
  margin-bottom: ${widthPercentageToPx("10%")};
`;

// ITEMS

export const ItemsContainer = styled.View`
  flex-direction: column;
  width: 100%;
  margin: ${SPACE_SEVEN} 0 ${SPACE_ONE} 0;
`;

export const ItemLink = styled(RectButton).attrs(() => ({
  rippleColor: "rgba(0,0,0,0.1)",
}))``;

export const Item = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: ${SPACE_TWO} 0 ${SPACE_TWO} ${SPACE_SIX};
`;

export const ItemText = styled.Text`
  font-size: ${FONT_SIZE_TERTIARY};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_PRIMARY};
  margin-left: ${SPACE_SIX};
`;

// BUTTONS

export const SignContainer = styled.View`
  flex-direction: row;
  margin-top: ${SPACE_SIX};
  padding-left: ${SPACE_SIX};
  padding-right: ${SPACE_SIX};
  width: 100%;
`;

export const SignLeft = styled.View`
  flex: 1;
`;

export const SignRight = styled.View`
  flex: 1;
  margin-left: ${SPACE_FOR};
`;
