import React from "react";
// import PropTypes from "prop-types";
import { RectButtonProperties } from "react-native-gesture-handler";

import { Container, ButtonText } from "./styles";

interface ButtonProps extends RectButtonProperties {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ style, text, onPress, ...rest }) => {
  return (
    <Container style={style} onPress={onPress}>
      <ButtonText {...rest}>{text}</ButtonText>
    </Container>
  );
};

export default Button;

// Button.propTypes = {
//   text: PropTypes.string,
//   onPress: PropTypes.func,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// Button.defaultProps = {
//   text: "",
//   onPress: null,
//   style: {},
// };
