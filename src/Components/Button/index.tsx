import React from "react";
// import PropTypes from "prop-types";
import { RectButtonProperties } from "react-native-gesture-handler";

import {
  Container,
  ContainerGhost,
  ContainerGhostLink,
  ContainerGhostView,
  ContainerLink,
  ContainerView,
  ButtonText,
  ButtonTextGhost,
} from "./styles";

interface ButtonProps extends RectButtonProperties {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <ContainerLink {...rest}>
      <ContainerView>
        <Container>
          <ButtonText>{text}</ButtonText>
        </Container>
      </ContainerView>
    </ContainerLink>
  );
};

export const ButtonGhost: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <ContainerGhostLink {...rest}>
      <ContainerGhostView>
        <ContainerGhost>
          <ButtonTextGhost>{text}</ButtonTextGhost>
        </ContainerGhost>
      </ContainerGhostView>
    </ContainerGhostLink>
  );
};

export default Button;
