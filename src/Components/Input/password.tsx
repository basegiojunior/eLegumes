import React, { useState } from "react";
import { TouchableOpacity, TextInputProps } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { PRIMARY_COLOR } from "../../styles/colors";
import { ICON_SIZE } from "../../styles/sizes";

import { Container, TInput, ContainerAll, CampName } from "./styles";

type InputProps = TextInputProps;

const InputPassword: React.FC<InputProps> = ({ style, children, ...rest }) => {
  const [color, setColor] = useState(false);
  const [securePass, setSecurePass] = useState(true);

  return (
    <ContainerAll>
      {/* <CampName color={color}>{placeholder}</CampName> */}
      <Container style={style} color={color}>
        <Icon
          style={{ marginRight: 5 }}
          name="lock"
          size={ICON_SIZE}
          color={color ? PRIMARY_COLOR : "#888"}
        />

        <TInput
          {...rest}
          onFocus={() => setColor(true)}
          onBlur={() => setColor(false)}
          secureTextEntry={securePass}
        />

        <TouchableOpacity onPress={() => setSecurePass(!securePass)}>
          <Icon
            name={securePass ? "eye-off" : "eye"}
            size={ICON_SIZE}
            color={color ? PRIMARY_COLOR : "#888"}
          />
        </TouchableOpacity>
      </Container>
      {children || null}
    </ContainerAll>
  );
};

export default InputPassword;

// InputPassword.propTypes = {
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// InputPassword.defaultProps = {
//   style: {},
// };

// export default forwardRef(InputPassword);
