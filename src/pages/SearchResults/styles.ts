import styled from "styled-components/native";

import ButtonText from "~/Components/Button/buttonText";

import { SPACE_SIX, SPACE_FOR } from "~/styles/sizes";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  padding-left: ${SPACE_SIX};
  background-color: #fff;
`;

export const Button = styled(ButtonText)`
  margin-top: ${SPACE_FOR};
`;
