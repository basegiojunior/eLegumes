import React from "react";

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

type ButtonProps = {
  text: string;
  onPress: CallableFunction;
};

const Button: React.FC<ButtonProps> = ({ text, onPress, ...rest }) => {
  return (
    <ContainerLink onPress={() => onPress()} {...rest}>
      <ContainerView>
        <Container>
          <ButtonText>{text}</ButtonText>
        </Container>
      </ContainerView>
    </ContainerLink>
  );
};

export const ButtonGhost: React.FC<ButtonProps> = ({
  text,
  onPress,
  ...rest
}) => {
  return (
    <ContainerGhostLink onPress={() => onPress()} {...rest}>
      <ContainerGhostView>
        <ContainerGhost>
          <ButtonTextGhost>{text}</ButtonTextGhost>
        </ContainerGhost>
      </ContainerGhostView>
    </ContainerGhostLink>
  );
};

export default Button;
