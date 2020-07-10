import styled from "styled-components/native";
import { Animated } from "react-native";

import {
  widthPercentageToPx,
  heightPercentageToPx,
} from "../PercentageConverter";
import SIZES from "~/styles/sizes";
import FONTS from "~/styles/fonts";
import COLORS from "~/styles/colors";

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
  padding-top: ${SIZES.SPACE_SEVEN};
  padding-bottom: ${SIZES.SPACE_SEVEN};
  padding-left: ${SIZES.SPACE_SIX};
  padding-right: ${SIZES.SPACE_SIX};
  width: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 6;
  border-top-left-radius: ${SIZES.SPACE_SIX};
  border-top-right-radius: ${SIZES.SPACE_SIX};
  justify-content: space-between;
`;

export const InfoTopContainer = styled.View`
  padding: ${heightPercentageToPx("5%")} ${SIZES.SPACE_SIX};
  border-radius: ${SIZES.SPACE_THREE};
  background-color: ${COLORS.TERT_COLOR};
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
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: #fff;
`;

export const InfoTopPrice = styled.Text`
  font-size: ${SIZES.SPACE_SEVEN};
  font-family: ${FONTS.FONT_SEMIBOLD};
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
  padding-left: ${({ last }) => (last ? SIZES.SPACE_FOR : 0)};
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
  font-size: ${SIZES.FONT_SIZE_SECONDARY};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const InfomationSec = styled.Text`
  font-size: ${SIZES.SPACE_FIVE};
  font-family: ${FONTS.FONT_SEMIBOLD};
  color: ${COLORS.TEXT_PRIMARY};
`;
