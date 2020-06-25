import React from "react";

import { ContainerSecondary, ButtonTextSecondary } from "./styles";

type ButtonProps = {
  text: string;
  onPress: CallableFunction;
};

const ButtonText: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <ContainerSecondary onPress={() => onPress()}>
      <ButtonTextSecondary>{text}</ButtonTextSecondary>
    </ContainerSecondary>
  );
};

export default ButtonText;
