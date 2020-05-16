import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
// import PropTypes from "prop-types";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { TextInputProps, TouchableWithoutFeedback, View } from "react-native";

import CampInformation from "../CampInformation";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../styles/colors";
import { ICON_SIZE } from "../../styles/sizes";

import { Container, ContainerAll, TInput, CampName } from "./styles";

interface InputProps extends TextInputProps {
  icon: string;
  value: string;
  error?: string;
  submitted: boolean;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  {
    style,
    icon,
    multiline,
    secureTextEntry,
    value,
    error,
    submitted,
    placeholder,
    ...rest
  },
  ref
) => {
  const [focused, setFocused] = useState(false);
  const [securePass, setSecurePass] = useState(true);
  const [touched, setTouched] = useState(false);
  const [filled, setFilled] = useState(false);
  const [showError, setShowError] = useState(false);

  const inputRefElement = useRef<any>(null);

  useEffect(() => {
    if (value !== "") {
      setFilled(true);
    }
    if ((filled && touched && !!error) || (submitted && !!error)) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [value, filled, touched, error, submitted]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRefElement.current.focus();
    },
    touched,
  }));

  return (
    <ContainerAll>
      <CampName focused={focused}>{placeholder}</CampName>
      <Container style={style} focused={focused} error={showError}>
        {icon && (
          <Icon
            style={{ marginRight: 5 }}
            name={icon}
            size={ICON_SIZE}
            color={focused || !!value ? SECONDARY_COLOR : "rgba(0,0,0,.45)"}
          />
        )}

        <TInput
          {...rest}
          // placeholder={placeholder}
          ref={inputRefElement}
          value={value}
          multiline={multiline}
          onFocus={() => {
            setFocused(true);
            setTouched(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          secureTextEntry={secureTextEntry && securePass}
        />

        {secureTextEntry && (
          <TouchableWithoutFeedback onPress={() => setSecurePass(!securePass)}>
            <Icon
              name={securePass ? "eye-off" : "eye"}
              size={ICON_SIZE}
              color={focused ? SECONDARY_COLOR : "rgba(0,0,0,.45)"}
            />
          </TouchableWithoutFeedback>
        )}

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
      <CampInformation error={error} show={showError} />
    </ContainerAll>
  );
};

export default forwardRef(Input);

// Input.propTypes = {
//   icon: PropTypes.string,
//   placeholder2: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// Input.defaultProps = {
//   icon: null,
//   placeholder2: "",
//   style: {},
// };

// export default forwardRef(Input);
