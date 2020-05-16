import styled from "styled-components/native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { SPACE_SECONDARY, FONT_SIZE_SECONDARY } from "../../styles/sizes";

import { FONT_REGULAR } from "../../styles/fonts";
import { TEXT_PRIMARY } from "../../styles/colors";

export const CampInformationView = styled.Text`
  z-index: 0;
  font-size: ${FONT_SIZE_SECONDARY};
  color: ${TEXT_PRIMARY};
  margin-right: ${SPACE_SECONDARY};
  padding: 0;
  justify-content: flex-end;
  font-family: ${FONT_REGULAR};
`;

export const ContainerCamp = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 2px;
  padding-left: 1px;
  align-items: center;
`;

export const AlertIcon = styled(Icon)`
  margin: 0 ${SPACE_SECONDARY};
`;
