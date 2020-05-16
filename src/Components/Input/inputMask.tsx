import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { TextInputMaskProps } from "react-native-masked-text";
import { View } from "react-native";

import { PRIMARY_COLOR } from "../../styles/colors";
import { ICON_SIZE } from "../../styles/sizes";

import { Container, TInputMask, ContainerAll, CampName } from "./styles";

interface InputProps extends TextInputMaskProps {
  icon: string;
  mask: string;
  value: string;
  error: boolean;
}

interface InputRef {
  focus(): void;
}

const InputMask: React.RefForwardingComponent<InputRef, InputProps> = (
  { style, icon, children, placeholder, mask, value, error, ...rest },
  ref
) => {
  const [focused, setFocused] = useState(false);

  const inputRefElement = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRefElement.current._inputElement.focus();
    },
  }));

  return (
    <ContainerAll>
      <CampName focused={focused}>{placeholder}</CampName>
      <Container style={style} focused={focused} error={error}>
        {icon && (
          <Icon
            style={{ marginRight: 5 }}
            name={icon}
            size={ICON_SIZE}
            color={focused || !!value ? PRIMARY_COLOR : "#888"}
          />
        )}

        <TInputMask
          {...rest}
          value={value}
          ref={inputRefElement}
          placeholder={mask}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {!error && value !== "" && (
          <View>
            <Icon
              style={{ marginLeft: 5 }}
              name="check-circle"
              size={ICON_SIZE}
              color={PRIMARY_COLOR}
            />
          </View>
        )}
      </Container>
      {children || null}
    </ContainerAll>
  );
};

export default forwardRef(InputMask);

// InputMask.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// InputMask.defaultProps = {
//   icon: null,
//   style: {},
// };

// export default forwardRef(InputMask);
