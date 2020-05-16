import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "../../Components/PercentageConverter";
import { FONT_REGULAR, FONT_BOLD } from "../../styles/fonts";

import { TEXT_PRIMARY } from "../../styles/colors";

export const Title = styled.View`
  width: 100%;
  height: ${widthPercentageToPx("16%")};
  padding: ${widthPercentageToPx("3%")};
  /* background-color: gray; */
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: ${TEXT_PRIMARY};
  font-size: ${widthPercentageToPx("5%")};
  font-family: ${FONT_BOLD};
  color: ${TEXT_PRIMARY};
`;

export const Category = styled(RectButton)`
  background-color: white;
  height: ${widthPercentageToPx("16%")};
  margin: ${widthPercentageToPx("1%")} 0;
  padding: 0 ${widthPercentageToPx("2%")};
  align-items: center;
  flex-direction: row;
  display: flex;
`;

export const CategoriesContainer = styled.View`
  padding: ${widthPercentageToPx("1.5%")} 0;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const CategoryText = styled.Text`
  font-size: ${widthPercentageToPx("4.3%")};
  margin-left: ${widthPercentageToPx("3%")};
  font-family: ${FONT_REGULAR};
`;
