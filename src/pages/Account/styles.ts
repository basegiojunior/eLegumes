import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { widthPercentageToPx } from "../../Components/PercentageConverter";
import { FONT_REGULAR } from "../../styles/fonts";
import { TEXT_PRIMARY } from "../../styles/colors";

export const Profile = styled(RectButton)`
  background-color: white;
  height: ${widthPercentageToPx("22%")};
  margin: ${widthPercentageToPx("0.6%")} 0;
  padding: 0 ${widthPercentageToPx("2%")};
  align-items: center;
  flex-direction: row;
  display: flex;
  border-width: 1px;
  border-color: #dfdfdf;
`;

export const AccountContainer = styled.View`
  padding: ${widthPercentageToPx("1.5%")} 0;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ProfileName = styled.Text`
  font-size: ${widthPercentageToPx("4.6%")};
  margin-left: ${widthPercentageToPx("3%")};
  /* font-weight: bold; */
  font-family: ${FONT_REGULAR};
  color: ${TEXT_PRIMARY};
`;

export const ProfileEmail = styled.Text`
  font-size: ${widthPercentageToPx("4%")};
  margin-left: ${widthPercentageToPx("3%")};
  font-family: ${FONT_REGULAR};
  color: #666;
`;

export const ProfileData = styled.View`
  flex-direction: column;
`;

export const ProfileImage = styled.Image`
  width: ${widthPercentageToPx("14%")};
  height: ${widthPercentageToPx("14%")};
  border-radius: ${widthPercentageToPx("7%")};
`;
