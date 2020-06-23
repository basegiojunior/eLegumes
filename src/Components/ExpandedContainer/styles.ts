import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Animated } from "react-native";

import {
  widthPercentageToPx,
  heightPercentageToPx,
} from "../PercentageConverter";
import {
  SPACE_ONE,
  SPACE_TWO,
  SPACE_THREE,
  SPACE_FOR,
  SPACE_FIVE,
  SPACE_SIX,
  SPACE_SEVEN,
  SPACE_EIGHT,
  FONT_SIZE_SECONDARY,
  FONT_SIZE_TERTIARY,
  FONT_SIZE_QUATERNARY,
} from "../../styles/sizes";
import { FONT_REGULAR, FONT_SEMIBOLD, FONT_BOLD } from "../../styles/fonts";
import {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERT_COLOR,
} from "../../styles/colors";

// EXPANDED END

export const ExpandedEndOff = styled.Modal`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 4;
`;

export const ExpandedEndBackground = styled(Animated.View)`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
`;

export const ExpandedLink = styled.TouchableWithoutFeedback`
  z-index: 5;
`;

export const ExpandedEnd = styled(Animated.View)`
  height: ${heightPercentageToPx("65%")};
  padding-top: ${SPACE_SEVEN};
  padding-bottom: ${SPACE_SEVEN};
  padding-left: ${SPACE_SIX};
  padding-right: ${SPACE_SIX};
  width: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 6;
  border-top-left-radius: ${SPACE_SIX};
  border-top-right-radius: ${SPACE_SIX};
  justify-content: space-between;
`;

export const InfoTopContainer = styled.View`
  padding: ${heightPercentageToPx("3%")} ${SPACE_SIX};
  border-radius: ${SPACE_THREE};
  background-color: ${TERT_COLOR};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoTopLeft = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InfoTopTitle = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: #fff;
`;

export const InfoTopPrice = styled.Text`
  font-size: ${SPACE_SEVEN};
  font-family: ${FONT_SEMIBOLD};
  color: #fff;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

type LastType = {
  last?: boolean;
};

export const ButtonsIntern = styled.View<LastType>`
  flex-direction: row;
  padding-left: ${({ last }) => (last ? SPACE_FOR : 0)};
  flex: 1;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
`;

export const InformationContainerIntern = styled.View`
  flex-direction: column;
  height: ${widthPercentageToPx("16%")};
  align-items: flex-start;
  flex: 1;
  justify-content: space-between;
`;

export const InfomationTitle = styled.Text`
  font-size: ${FONT_SIZE_SECONDARY};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_SECONDARY};
`;

export const InfomationSec = styled.Text`
  font-size: ${SPACE_FIVE};
  font-family: ${FONT_SEMIBOLD};
  color: ${TEXT_PRIMARY};
`;
