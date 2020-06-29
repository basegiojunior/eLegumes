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

import { widthPercentageToDP } from "~/Components/PercentageConverter";

import COLORS from "~/styles/colors";
import SIZES from "~/styles/sizes";

import {
  Container,
  ContainerAll,
  TInput,
  CampName,
  ContainerCamp,
  AlertIcon,
  Icone,
  CampInformationView,
  TInputMask,
} from "./styles";

interface InputProps extends TextInputProps {
  icon: string;
  value: string;
  error?: string;
  submitted: boolean;
  title?: string;
}
interface InputMaskProps extends TextInputMaskProps {
  icon: string;
  value: string;
  error?: string;
  submitted: boolean;
  title?: string;
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
          <Icone
            name={icon}
            size={widthPercentageToDP("6%")}
            color={
              focused || !!value ? COLORS.SECONDARY_COLOR : "rgba(0,0,0,.45)"
            }
          />
        )}

        <TInput
          {...rest}
          value={value}
          placeholderTextColor={COLORS.TEXT_SECONDARY}
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
            <Icone
              name={securePass ? "eye-off" : "eye"}
              size={widthPercentageToDP("6%")}
              color={focused ? COLORS.SECONDARY_COLOR : "rgba(0,0,0,.45)"}
            />
          </TouchableWithoutFeedback>
        )}

        {!error && value !== "" && (
          <View>
            <Icone
              name="check-circle"
              size={widthPercentageToDP("6%")}
              color={COLORS.PRIMARY_COLOR}
            />
          </View>
        )}
      </Container>

      {showError && !!error && (
        <ContainerCamp>
          <AlertIcon name="alert-circle" size={SIZES.ICON_SIZE} color="red" />
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
      <Container style={style} focused={focused} error={showError}>
        {icon && (
          <Icone
            name={icon}
            size={widthPercentageToDP("6%")}
            color={
              focused || !!value ? COLORS.SECONDARY_COLOR : "rgba(0,0,0,.45)"
            }
          />
        )}

        <TInputMask
          {...rest}
          value={value}
          ref={inputRefElement}
          placeholderTextColor={COLORS.TEXT_SECONDARY}
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
            <Icone
              name={securePass ? "eye-off" : "eye"}
              size={widthPercentageToDP("6%")}
              color={focused ? COLORS.SECONDARY_COLOR : "rgba(0,0,0,.45)"}
            />
          </TouchableWithoutFeedback>
        )}

        {!error && value !== "" && (
          <View>
            <Icone
              style={{ marginLeft: 5 }}
              name="check-circle"
              size={SIZES.ICON_SIZE}
              color={COLORS.PRIMARY_COLOR}
            />
          </View>
        )}
      </Container>

      {showError && !!error && (
        <ContainerCamp>
          <AlertIcon name="alert-circle" size={SIZES.ICON_SIZE} color="red" />
          <CampInformationView>{error}</CampInformationView>
        </ContainerCamp>
      )}
    </ContainerAll>
  );
};

export default forwardRef(Input);

const InputMask = forwardRef(InputMaskForward);
export { InputMask };
