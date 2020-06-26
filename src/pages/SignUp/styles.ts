import styled from "styled-components/native";
import { CheckBox, CheckBoxProps } from "react-native-elements";
// import { RectButton } from "react-native-gesture-handler";

import Title from "~/Components/Title";

import { widthPercentageToPx } from "~/Components/PercentageConverter";

import { COLOR_BACKGROUND_PRIMARY, SECONDARY_COLOR } from "~/styles/colors";
import {
  SPACE_ONE,
  SPACE_THREE,
  SPACE_FIVE,
  SPACE_SIX,
  SPACE_SEVEN,
} from "~/styles/sizes";

type Button = {
  onPress: CallableFunction;
};

export const Container = styled.ScrollView.attrs(() => ({
  keyboardShouldPersistTaps: "handled",
}))`
  flex: 1;
  height: 100%;
  background-color: ${COLOR_BACKGROUND_PRIMARY};
`;

export const ContainerIntern = styled.View`
  justify-content: flex-start;
  padding-left: ${SPACE_SIX};
  padding-right: ${SPACE_SIX};
  padding-top: ${SPACE_ONE};
  padding-bottom: ${SPACE_SEVEN};
  align-items: flex-start;
`;

export const ContainerTop = styled.View`
  width: 100%;
  background-color: ${SECONDARY_COLOR};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopImage = styled.Image`
  width: ${widthPercentageToPx("55%")};
  height: ${widthPercentageToPx("28%")};
  margin-top: ${widthPercentageToPx("8%")};
  margin-bottom: ${widthPercentageToPx("20%")};
`;

export const CheckContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin: 0;
`;

export const CheckButtonContainer = styled.View`
  justify-content: center;
  align-self: center;
  height: 50px;
`;

export const ButtonCheck = styled(CheckBox)<CheckBoxProps>`
  background-color: transparent;
`;

export const TitleText = styled(Title)`
  margin-top: ${SPACE_FIVE};
  margin-bottom: ${SPACE_THREE};
`;

export const ToLoginContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${SPACE_SIX};
`;
