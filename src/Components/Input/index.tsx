import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { TouchableWithoutFeedback, View, TextInputProps } from "react-native";
import { TextInputMaskProps } from "react-native-masked-text";

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_SECONDARY,
} from "~/styles/colors";
import { ICON_SIZE } from "~/styles/sizes";

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

interface InputProps extends TextInputProps {
  icon: string;
  value: string;
  error?: string;
  submitted: boolean;
  title: string;
}
interface InputMaskProps extends TextInputMaskProps {
  icon: string;
  value: string;
  error?: string;
  submitted: boolean;
  title: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    style,
    icon,
    multiline,
    secureTextEntry,
    value,
    error,
    submitted,
    title,
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
      {/* <CampName focused={focused}>{title}</CampName> */}
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
          value={value}
          placeholderTextColor={TEXT_SECONDARY}
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

const InputMaskForward: React.ForwardRefRenderFunction<
  InputRef,
  InputMaskProps
> = (
  { style, icon, secureTextEntry, value, error, submitted, title, ...rest },
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

        <TInputMask
          {...rest}
          value={value}
          ref={inputRefElement}
          placeholderTextColor={TEXT_SECONDARY}
          onFocus={() => {
            setFocused(true);
            setTouched(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
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

const InputMask = forwardRef(InputMaskForward);
export { InputMask };
