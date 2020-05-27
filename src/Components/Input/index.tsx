import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { TouchableWithoutFeedback, View } from "react-native";
import { TextInputMaskProps } from "react-native-masked-text";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../styles/colors";
import { ICON_SIZE } from "../../styles/sizes";

import {
  Container,
  ContainerAll,
  TInput,
  CampName,
  ContainerCamp,
  AlertIcon,
  CampInformationView,
  TInputMask,
} from "./styles";

interface InputMaskProps extends TextInputMaskProps {
  icon: string;
  value: string;
  error?: string;
  submitted: boolean;
  title: string;
  mask?: boolean;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputMaskProps> = (
  {
    style,
    icon,
    multiline,
    secureTextEntry,
    value,
    error,
    submitted,
    title,
    mask,
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
      <CampName focused={focused}>{title}</CampName>
      <Container style={style} focused={focused} error={showError}>
        {icon && (
          <Icon
            style={{ marginRight: 5 }}
            name={icon}
            size={ICON_SIZE}
            color={focused || !!value ? SECONDARY_COLOR : "rgba(0,0,0,.45)"}
          />
        )}

        {mask ? (
          <TInputMask
            {...rest}
            value={value}
            ref={inputRefElement}
            onFocus={() => {
              setFocused(true);
              setTouched(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
          />
        ) : (
          <TInput
            {...rest}
            value={value}
            ref={inputRefElement}
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
        )}

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

      {showError && !!error && (
        <ContainerCamp>
          <AlertIcon name="alert-circle" size={ICON_SIZE} color="red" />
          <CampInformationView>{error}</CampInformationView>
        </ContainerCamp>
      )}
    </ContainerAll>
  );
};

export default forwardRef(Input);
