import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import {
  FONT_SIZE_SECONDARY,
  SPACE_SIX,
  SPACE_FIVE,
  SPACE_TWO,
  FONT_SIZE_QUATERNARY,
  SPACE_EIGHT,
  FONT_SIZE_PRIMARY,
  FONT_SIZE_TERTIARY,
  SPACE_SEVEN,
  SPACE_FOR,
  SPACE_ONE,
  SPACE_THREE,
} from "../../styles/sizes";
import { FONT_BOLD, FONT_REGULAR, FONT_SEMIBOLD } from "../../styles/fonts";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "../../styles/colors";

import { widthPercentageToPx } from "../../Components/PercentageConverter";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 0 ${SPACE_SIX};
`;

export const ImageCompanie = styled.Image`
  width: ${widthPercentageToPx("100%")};
  height: ${widthPercentageToPx("100%")};
`;

export const CompanieName = styled.Text`
  font-size: ${SPACE_SIX};
  font-family: ${FONT_BOLD};
  margin-top: ${SPACE_SIX};
`;

export const Address = styled.View`
  margin-top: ${SPACE_FIVE};
  margin-bottom: ${SPACE_SEVEN};
  flex-direction: row;
  align-items: center;
`;

export const CompanieAddress = styled.Text`
  font-size: ${widthPercentageToPx("4%")};
  color: #000;
  font-family: ${FONT_REGULAR};
`;

// RATING

export const RatingView = styled.View`
  flex-direction: row;
  padding: 0 ${SPACE_SIX} 0 ${SPACE_SIX};
`;

export const RatingLeft = styled.View`
  flex-direction: column;
  width: ${widthPercentageToPx("41%")};
  height: ${widthPercentageToPx("35%")};
`;

export const RatingRight = styled.View`
  flex-direction: column;
  width: ${widthPercentageToPx("41%")};
  margin-left: ${SPACE_SIX};
  padding-top: ${SPACE_ONE};
`;

export const RatingNumbersView = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const RatingNumbersActual = styled.Text`
  font-size: ${widthPercentageToPx("17%")};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_PRIMARY};
  height: ${widthPercentageToPx("17%")};
`;

export const RatingNumbersTotal = styled.Text`
  font-size: ${widthPercentageToPx("7%")};
  font-family: ${FONT_REGULAR};
  color: ${TEXT_SECONDARY};
  height: ${widthPercentageToPx("7%")};
`;

export const Icone = styled(Icon)`
  margin-right: ${SPACE_ONE};
`;

export const Stars = styled.View`
  flex-direction: row;
  padding-top: ${SPACE_FOR};
`;

// RIGHT

export const StarLine = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${widthPercentageToPx("0.5%")};
`;

export const StarLineViewLeft = styled.View`
  width: ${widthPercentageToPx("10%")};
  flex-direction: row;
  align-items: center;
`;

export const StarLineNumber = styled.Text`
  font-size: ${widthPercentageToPx("3.5%")};
  height: ${widthPercentageToPx("3.5%")};
  margin-right: ${SPACE_ONE};
`;

export const StarLineBarView = styled.View`
  width: ${widthPercentageToPx("31%")};
  flex-direction: row;
`;

type Bar = {
  percentage: number;
};

export const StarLineBarRight = styled.View<Bar>`
  height: 4px;
  flex-grow: ${(props) => 100 - props.percentage};
  background-color: #f0f0f0;
`;

export const StarLineBarLeft = styled.View<Bar>`
  height: 4px;
  flex-grow: ${(props) => props.percentage};
  background-color: #6bc76b;
`;

// COMENTARIOS

export const CommentView = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 0 ${SPACE_SIX};
  margin-top: ${SPACE_TWO};
  margin-bottom: ${SPACE_SEVEN};
`;

export const CommentTopView = styled.View`
  flex-direction: row;
  padding-bottom: ${SPACE_THREE};
  justify-content: space-between;
  align-items: center;
`;

export const CommentTopLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CommentTopStars = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Profile = styled.Image`
  width: ${widthPercentageToPx("12%")};
  height: ${widthPercentageToPx("12%")};
  border-radius: ${widthPercentageToPx("6%")};
`;

export const Name = styled.Text`
  font-size: ${FONT_SIZE_TERTIARY};
  color: ${TEXT_PRIMARY};
  font-family: ${FONT_REGULAR};
  margin-left: ${SPACE_FIVE};
`;

export const CommentText = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  color: ${TEXT_PRIMARY};
  font-family: ${FONT_REGULAR};
  text-align: justify;
`;
