import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "../../Components/PercentageConverter";
import { FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import { FONT_SIZE_SECONDARY, FONT_SIZE_TERTIARY } from "../../styles/sizes";

import { TEXT_PRIMARY, TEXT_SECONDARY } from "../../styles/colors";

export const Item = styled.TouchableOpacity`
  margin-top: ${widthPercentageToPx("5%")};
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  padding-left: ${widthPercentageToPx("6%")};
`;

export const Title = styled.Text`
  margin-top: ${widthPercentageToPx("8%")};
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
`;

export const Image = styled.Image`
  border-radius: ${widthPercentageToPx("2%")};
  width: ${widthPercentageToPx("14%")};
  height: ${widthPercentageToPx("14%")};
`;

export const Name = styled.Text`
  font-family: ${FONT_REGULAR};
  color: ${TEXT_PRIMARY};
  font-size: ${FONT_SIZE_TERTIARY};
  margin-left: ${widthPercentageToPx("7%")};
`;
