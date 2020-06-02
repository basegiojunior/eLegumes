import styled from "styled-components/native";

import { SPACE_PRIMARY_DP, FONT_SIZE_PRIMARY } from "../../styles/sizes";
import { COLOR_BACKGROUND_PRIMARY, TEXT_PRIMARY } from "../../styles/colors";
import { FONT_REGULAR } from "../../styles/fonts";

import { widthPercentageToPx } from "../../Components/PercentageConverter";

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: "center",
    flexGrow: 1,
    padding: SPACE_PRIMARY_DP * 1.5,
    alignItems: "center",
  },
  keyboardShouldPersistTaps: "handled",
}))`
  flex: 1;
  height: 100%;
  background-color: ${COLOR_BACKGROUND_PRIMARY};
`;

export const LogoImage = styled.Image`
  width: ${widthPercentageToPx("30%")};
  height: ${widthPercentageToPx("30%")};
  margin-bottom: ${widthPercentageToPx("10%")};
`;

// export const Container = styled.View`
//   justify-content: center;
//   padding: ${SPACE_PRIMARY};
//   align-items: center;
//   flex: 1;
// `;

export const LineDiv = styled.View`
  width: 100%;
  height: 0px;
  margin: ${widthPercentageToPx("6%")} 0;
  border-top-width: 1px;
  border-bottom-width: 0;
  border-color: "rgba(0,0,0,.08)";
`;

export const LostPass = styled.View`
  align-self: flex-end;
  margin-bottom: 8px;
`;

export const SignUpView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: ${widthPercentageToPx("8%")};
`;

export const TextSignUp = styled.Text`
  font-size: ${FONT_SIZE_PRIMARY};
  color: ${TEXT_PRIMARY};
  padding: 0;
  font-family: ${FONT_REGULAR};
`;

export const ModalContainerIn = styled.View`
  width: ${widthPercentageToPx("80%")};
  background-color: #fff;
  padding: ${widthPercentageToPx("7%")} ${widthPercentageToPx("5%")};
  border-radius: ${widthPercentageToPx("2%")};
`;

export const FalseModal = styled.View`
	/* width: ${widthPercentageToPx("90%")}; */
	padding: ${widthPercentageToPx("5%")};
	align-items: center;
	background-color: transparent;
`;

export const ModalContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Exit = styled.View`
  background-color: red;
  align-items: center;
  justify-content: center;
  width: ${widthPercentageToPx("10%")};
  height: ${widthPercentageToPx("10%")};
  border-radius: ${widthPercentageToPx("5%")};
`;

export const ExitButton = styled.TouchableOpacity`
	background-color: transparent;
	position: absolute;
	z-index: 3;
	align-items: center;
	justify-content: center;
	align-self: flex-end;
	width: ${widthPercentageToPx("12%")};
	height: ${widthPercentageToPx("12%")};
	/* margin-top: ${widthPercentageToPx("-5%")}; */
	/* margin-right: ${widthPercentageToPx("-10%")}; */
`;
