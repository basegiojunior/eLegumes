import styled from "styled-components/native";

import ButtonText from "~/Components/Button/buttonText";

import SIZES from "~/styles/sizes";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  padding-left: ${SIZES.SPACE_SIX};
  background-color: #fff;
`;

export const Button = styled(ButtonText)`
  margin-top: ${SIZES.SPACE_FOR};
`;
