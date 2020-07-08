import styled from "styled-components/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import SIZES from "~/styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

import { widthPercentageToPx } from "~/Components/PercentageConverter";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 0 ${SIZES.SPACE_SIX};
`;

export const ImageCompanie = styled.Image`
  width: ${widthPercentageToPx("100%")};
  height: ${widthPercentageToPx("100%")};
`;

export const ImageCompanieEmpty = styled.View`
  width: ${widthPercentageToPx("100%")};
  height: ${widthPercentageToPx("100%")};
  background-color: ${COLORS.BACKGROUND_IMAGES};
`;

export const CompanieName = styled.Text`
  font-size: ${SIZES.SPACE_SIX};
  font-family: ${FONTS.FONT_BOLD};
  margin-top: ${SIZES.SPACE_SIX};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const Address = styled.View`
  margin-top: ${SIZES.SPACE_FIVE};
  margin-bottom: ${SIZES.SPACE_SEVEN};
  flex-direction: row;
  align-items: center;
`;

export const CompanieAddress = styled.Text`
  font-size: ${widthPercentageToPx("4%")};
  color: #000;
  font-family: ${FONTS.FONT_REGULAR};
`;

// RATING

export const RatingView = styled.View`
  flex-direction: row;
  padding: 0 ${SIZES.SPACE_SIX} 0 ${SIZES.SPACE_SIX};
`;

export const RatingLeft = styled.View`
  flex-direction: column;
  width: ${widthPercentageToPx("41%")};
  height: ${widthPercentageToPx("35%")};
`;

export const RatingRight = styled.View`
  flex-direction: column;
  width: ${widthPercentageToPx("41%")};
  margin-left: ${SIZES.SPACE_SIX};
  padding-top: ${SIZES.SPACE_ONE};
`;

export const RatingNumbersView = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const RatingNumbersActual = styled.Text`
  font-size: ${widthPercentageToPx("17%")};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_PRIMARY};
  height: ${widthPercentageToPx("17%")};
`;

export const RatingNumbersTotal = styled.Text`
  font-size: ${widthPercentageToPx("7%")};
  font-family: ${FONTS.FONT_REGULAR};
  color: ${COLORS.TEXT_SECONDARY};
  height: ${widthPercentageToPx("7%")};
`;

export const Icone = styled(Icon)`
  margin-right: ${SIZES.SPACE_ONE};
`;

export const Stars = styled.View`
  flex-direction: row;
  padding-top: ${SIZES.SPACE_FOR};
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
  margin-right: ${SIZES.SPACE_ONE};
  color: ${COLORS.TEXT_PRIMARY};
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
  padding: 0 ${SIZES.SPACE_SIX};
  margin-top: ${SIZES.SPACE_TWO};
  margin-bottom: ${SIZES.SPACE_SEVEN};
`;

export const CommentTopView = styled.View`
  flex-direction: row;
  padding-bottom: ${SIZES.SPACE_THREE};
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
  font-size: ${SIZES.FONT_SIZE_TERTIARY};
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONTS.FONT_REGULAR};
  margin-left: ${SIZES.SPACE_FIVE};
`;

export const CommentText = styled.Text`
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONTS.FONT_REGULAR};
  text-align: justify;
`;
