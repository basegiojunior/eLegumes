import React, { useState, useRef } from "react";
import { withFormik } from "formik";
import { Alert, TextInput } from "react-native";
import * as Yup from "yup";

import { TitleText } from "./styles";

import SIZES from "~/styles/sizes";

import Input, { InputMask } from "~/Components/Input";
import Button from "~/Components/Button";

type FormProps = {
  values: {
    name: string;
    phone: string;
    email: string;
    birthdate: string;
    password: string;
    passwordConfirmation: string;
    checkbox: boolean;
  };
  errors: {
    name: string;
    phone: string;
    email: string;
    birthdate: string;
    password: string;
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
  const birthdateInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const passwordConfirmInputRef = useRef<TextInput>(null);

  return (
    <>
      <TitleText>SEUS DADOS</TitleText>
      <Input
        icon="person"
        autoCorrect={false}
        placeholder="Nome"
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
        icon="mail"
        autoCorrect={false}
        placeholder="E-mail"
        autoCompleteType="email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={propsForm.values.email}
        error={propsForm.errors.email}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text: string) => {
          propsForm.setFieldValue("email", text);
        }}
        returnKeyType="next"
        onSubmitEditing={() => birthdateInputRef.current?.focus()}
        ref={emailInputRef}
      />

      <InputMask
        icon="date"
        type="datetime"
        autoCorrect={false}
        placeholder="Data de Nascimento"
        keyboardType="numeric"
        value={propsForm.values.birthdate}
        error={propsForm.errors.birthdate}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text: string) => {
          propsForm.setFieldValue("birthdate", text);
        }}
        returnKeyType="next"
        onSubmitEditing={() => phoneInputRef.current?.focus()}
        ref={birthdateInputRef}
      />

      <InputMask
        icon="phone"
        type="cel-phone"
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        autoCorrect={false}
        placeholder="Celular"
        keyboardType="numeric"
        value={propsForm.values.phone}
        error={propsForm.errors.phone}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text: string) => {
          propsForm.setFieldValue("phone", text);
        }}
        returnKeyType="next"
        onSubmitEditing={() => passwordInputRef.current?.focus()}
        ref={phoneInputRef}
      />

      <TitleText>SEGURANÇA</TitleText>

      <Input
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        title="Senha"
        placeholder="Senha"
        autoCompleteType="password"
        secureTextEntry
        value={propsForm.values.password}
        error={propsForm.errors.password}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text: string) => {
          propsForm.setFieldValue("password", text);
        }}
        returnKeyType="next"
        onSubmitEditing={() => passwordConfirmInputRef.current?.focus()}
        ref={passwordInputRef}
      />

      <Input
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        title="Confirmar Senha"
        placeholder="Confirmar Senha"
        autoCompleteType="password"
        secureTextEntry
        value={propsForm.values.passwordConfirmation}
        error={propsForm.errors.passwordConfirmation}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text: string) => {
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

      {/* <CheckContainer>
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
          fontFamily={FONT_REGULAR}
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
      </CheckContainer> */}

      <Button
        onPress={() => {
          propsForm.handleSubmit();
        }}
        style={{ marginTop: SIZES.SPACE_PRIMARY_DP }}
        text="Criar Conta"
      />
    </>
  );
};

type HandleProps = {
  props: {
    handleSubmitSignUp: Function;
  };
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    passwordConfirmation: "",
    phone: "",
    name: "",
    birthdate: "",
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Você precisa preencher seu NOME."),
    email: Yup.string()
      .email("Você precisa digitar um E-MAIL válido.")
      .required("Você precisa preencher seu E-MAIL."),
    phone: Yup.string()
      .min(15, "Você precisa preencher seu CELULAR")
      .required("Você precisa preencher seu CELULAR"),
    birthdate: Yup.string()
      .min(8, "Você precisa preencher seu NASCIMENTO")
      .required("Você precisa preencher seu NASCIMENTO"),
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
    const {
      name,
      email,
      birthdate,
      phone,
      password,
      passwordConfirmation,
    } = values;

    props.handleSubmitSignUp(
      name,
      email,
      birthdate,
      phone,
      password,
      passwordConfirmation
    );
    setSubmitting(false);
    // });
  },
})(Form);
