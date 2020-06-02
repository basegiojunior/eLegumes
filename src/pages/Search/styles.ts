import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "../../Components/PercentageConverter";
import { FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import { FONT_SIZE_SECONDARY, FONT_SIZE_TERTIARY } from "../../styles/sizes";

import { TEXT_PRIMARY, TEXT_SECONDARY } from "../../styles/colors";

export const Recent = styled.View`
  padding-top: ${widthPercentageToPx("4%")};
  padding-right: ${widthPercentageToPx("6%")};
  padding-bottom: ${widthPercentageToPx("2%")};
  padding-left: ${widthPercentageToPx("6%")};
  flex-direction: column;
  width: 100%;
`;

export const RecentItem = styled.TouchableOpacity`
  margin-top: ${widthPercentageToPx("2%")};
  padding: ${widthPercentageToPx("2%")} 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const RecentTitle = styled.Text`
  margin-top: ${widthPercentageToPx("4%")};
  margin-bottom: ${widthPercentageToPx("2%")};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
`;

export const RecentText = styled.Text`
  font-family: ${FONT_REGULAR};
  color: ${TEXT_PRIMARY};
  font-size: ${FONT_SIZE_TERTIARY};
`;
