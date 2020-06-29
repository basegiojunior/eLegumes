import styled from "styled-components/native";

import SIZES from "~/styles/sizes";
import COLORS from "~/styles/colors";
import FONTS from "~/styles/fonts";

import { widthPercentageToPx } from "~/Components/PercentageConverter";

export const Container = styled.ScrollView.attrs(() => ({
  keyboardShouldPersistTaps: "handled",
}))`
  flex: 1;
  height: 100%;
  background-color: ${COLORS.COLOR_BACKGROUND_PRIMARY};
`;

export const ContainerIntern = styled.View`
  justify-content: center;
  padding-left: ${SIZES.SPACE_SIX};
  padding-right: ${SIZES.SPACE_SIX};
  padding-top: ${SIZES.SPACE_SEVEN};
  padding-bottom: ${SIZES.SPACE_SEVEN};
  align-items: center;
`;

export const ContainerTop = styled.View`
  width: 100%;
  background-color: ${COLORS.SECONDARY_COLOR};
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
  margin: ${SIZES.SPACE_SIX} 0;
  border-top-width: 1px;
  border-bottom-width: 0;
  border-color: "rgba(0,0,0,.08)";
`;

export const SignUpView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${SIZES.SPACE_EIGHT};
`;

export const TextSignUp = styled.Text`
  font-size: ${SIZES.FONT_SIZE_PRIMARY};
  color: ${COLORS.TEXT_PRIMARY};
  padding: 0;
  font-family: ${FONTS.FONT_REGULAR};
`;

export const ModalContainerIn = styled.View`
  width: ${widthPercentageToPx("80%")};
  background-color: #fff;
  padding: ${SIZES.SPACE_SEVEN} ${SIZES.SPACE_FIVE};
  border-radius: ${SIZES.SPACE_TWO};
`;

export const FalseModal = styled.View`
	/* width: ${widthPercentageToPx("90%")}; */
	padding: ${SIZES.SPACE_FIVE};
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
  border-radius: ${SIZES.SPACE_FIVE};
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
