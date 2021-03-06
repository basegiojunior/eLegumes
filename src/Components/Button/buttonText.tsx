import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

import { ContainerSecondary, ButtonTextSecondary } from "./styles";

interface ButtonProps extends RectButtonProperties {
  italic?: boolean;
  text: string;
}

const ButtonText: React.FC<ButtonProps> = ({
  italic = false,
  text,
  onPress,
  ...rest
}) => {
  return (
    <ContainerSecondary onPress={onPress}>
      <ButtonTextSecondary italic={italic} {...rest}>
        {text}
      </ButtonTextSecondary>
    </ContainerSecondary>
  );
};

export default ButtonText;
