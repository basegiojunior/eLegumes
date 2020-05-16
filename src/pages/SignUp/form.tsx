import React, { useState, useRef, useEffect } from "react";
import { withFormik } from "formik";
import { Alert, TextInput } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { CheckContainer, ButtonCheck } from "./styles";

import { PRIMARY_COLOR } from "../../styles/colors";
import { FONT_BOLD } from "../../styles/fonts";
import {
  ICON_CHECKBOX_SIZE,
  SPACE_PRIMARY_DP,
  FONT_SIZE_PRIMARY_DP,
} from "../../styles/sizes";

import Input from "../../Components/Input";
import InputMask from "../../Components/Input/inputMask";
import Button from "../../Components/Button";

type FormProps = {
  values: {
    name: string;
    phone: string;
    password: string;
    email: string;
    passwordConfirmation: string;
    checkbox: boolean;
  };
  errors: {
    name: string;
    phone: string;
    password: string;
    email: string;
    passwordConfirmation: string;
  };
  submitCount: number;
  termsViz: Function;
  setFieldValue: Function;
  handleSubmit: Function;
  handleSubmitSignUp: Function;
};

const Form: React.FC<FormProps> = (propsForm) => {
  const [check, setCheck] = useState(false);

  const nameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const phoneInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const passwordConfirmInputRef = useRef<TextInput>(null);

  return (
    <>
      <Input
        icon="account"
        autoCorrect={false}
        placeholder="Nome Completo"
        autoCompleteType="name"
        autoCapitalize="words"
        value={propsForm.values.name}
        error={propsForm.errors.name}
        onChangeText={(text: string) => {
          propsForm.setFieldValue("name", text);
        }}
        submitted={propsForm.submitCount > 0}
        returnKeyType="next"
        onSubmitEditing={() => emailInputRef.current?.focus()}
        ref={nameInputRef}
      />

      <Input
        icon="email"
        autoCorrect={false}
        placeholder="Email"
        autoCompleteType="email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={propsForm.values.email}
        error={propsForm.errors.email}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text) => {
          propsForm.setFieldValue("email", text);
        }}
        returnKeyType="next"
        onSubmitEditing={() => phoneInputRef.current?.focus()}
        ref={emailInputRef}
      />

      {/* <InputMask
        icon="cellphone-android"
        type="cel-phone"
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        autoCorrect={false}
        placeholder="Celular"
        mask="(99) 99999-9999"
        keyboardType="numeric"
        value={propsForm.values.phone}
        error={propsForm.errors.phone}
        onChangeText={(text) => {
          propsForm.setFieldValue("phone", text);
        }}
        returnKeyType="next"
        onSubmitEditing={() => passwordInputRef.current?.focus()}
        ref={phoneInputRef}
      />
      <CampInformation
        error={propsForm.errors.phone}
        touched={propsForm.touched.phone}
      /> */}

      <Input
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Senha"
        autoCompleteType="password"
        secureTextEntry
        value={propsForm.values.password}
        error={propsForm.errors.password}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text) => propsForm.setFieldValue("password", text)}
        returnKeyType="next"
        onSubmitEditing={() => passwordConfirmInputRef.current?.focus()}
        ref={passwordInputRef}
      />

      <Input
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Confirmar Senha"
        autoCompleteType="password"
        secureTextEntry
        value={propsForm.values.passwordConfirmation}
        error={propsForm.errors.passwordConfirmation}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text) => {
          propsForm.setFieldValue("passwordConfirmation", text);
        }}
        returnKeyType="send"
        onSubmitEditing={() => {
          Alert.alert(
            "Ops",
            "Você tem que aceitar os termos e condições para prosseguir."
          );
          propsForm.handleSubmit();
        }}
        ref={passwordConfirmInputRef}
      />

      <CheckContainer>
        <ButtonCheck
          title="Li e aceito os termos e condições"
          containerStyle={{
            flex: 1,
            marginHorizontal: 0,
            paddingHorizontal: 0,
            backgroundColor: "transparent",
          }}
          textStyle={{
            color: "#444",
            fontWeight: "normal",
            fontSize: FONT_SIZE_PRIMARY_DP,
          }}
          fontFamily="Jost-Regular"
          checkedIcon={
            <Icon
              style={{ marginRight: 5 }}
              name="checkbox-marked"
              size={ICON_CHECKBOX_SIZE}
              color={PRIMARY_COLOR}
            />
          }
          uncheckedIcon={
            <Icon
              style={{ marginRight: 5 }}
              name="checkbox-blank-outline"
              size={ICON_CHECKBOX_SIZE}
              color="#444"
            />
          }
          checked={check}
          onPress={() => {
            setCheck(!check);
          }}
        />
      </CheckContainer>

      <Button
        onPress={() => {
          Alert.alert(
            "Ops",
            "Você tem que aceitar os termos e condições para prosseguir."
          );
          propsForm.handleSubmit();
        }}
        style={{ marginTop: SPACE_PRIMARY_DP }}
        text="Criar Conta"
      />
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    passwordConfirmation: "",
    phone: "",
    name: "",
    show: false,
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Você precisa preencher seu NOME."),
    email: Yup.string()
      .email("Você precisa digitar um E-MAIL válido.")
      .required("Você precisa preencher seu E-MAIL."),
    phone: Yup.string().required("Você precisa preencher seu CELULAR"),
    password: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Você precisa preencher a SENHA"),
    passwordConfirmation: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Você precisa preencher a SENHA")
      .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais"),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    // setTimeout(() => {
    const { name, email, password, phone } = values;
    props.handleSubmitSignUp(name, email, password, phone);
    setSubmitting(false);
    // });
  },
})(Form);
