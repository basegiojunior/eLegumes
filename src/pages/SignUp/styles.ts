import styled from "styled-components/native";
import { CheckBox, CheckBoxProps } from "react-native-elements";
// import { RectButton } from "react-native-gesture-handler";

import { COLOR_BACKGROUND_PRIMARY } from "../../styles/colors";
import { SPACE_PRIMARY_DP } from "../../styles/sizes";

type Button = {
  onPress: CallableFunction;
};

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: "center",
    flexGrow: 1,
    padding: SPACE_PRIMARY_DP * 1.5,
  },
  keyboardShouldPersistTaps: "handled",
}))`
  flex: 1;
  height: 100%;
  background-color: ${COLOR_BACKGROUND_PRIMARY};
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

// export const containerScroll = styled.View`
// 	justify-content: start
// `;

// contentContainerStyle={[
// 	BasicStyle.containerScroll,
// 	BasicStyle.justifyStart,
// 	BasicStyle.p_horizontalSec,
// 	BasicStyle.p_verticalSec,
// ]}
