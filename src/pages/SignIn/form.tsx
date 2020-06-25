import React, { useRef } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";

import Input from "~/Components/Input";
import Button from "~/Components/Button";

type FormProps = {
  values: {
    password: string;
    email: string;
  };
  setFieldValue: Function;
  submitCount: number;
  handleSubmit: Function;
  forgotPassword: Function;
};

const Form: React.FC<FormProps> = (propsForm) => {
  const passwordInputRef = useRef<TextInput>(null);

  return (
    <>
      <Input
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        title="E-mail"
        placeholder="E-mail"
        autoCompleteType="email"
        keyboardType="email-address"
        value={propsForm.values.email}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text) => {
          propsForm.setFieldValue("email", text);
        }}
        returnKeyType="next"
        onSubmitEditing={() => passwordInputRef.current?.focus()}
      />

      <Input
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        title="Senha"
        placeholder="Senha"
        secureTextEntry
        value={propsForm.values.password}
        submitted={propsForm.submitCount > 0}
        onChangeText={(text) => propsForm.setFieldValue("password", text)}
        returnKeyType="send"
        onSubmitEditing={() => {
          propsForm.handleSubmit();
        }}
        ref={passwordInputRef}
      />

      <Button
        text="Acessar"
        onPress={() => {
          propsForm.handleSubmit();
        }}
      />
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Você precisa digitar um E-MAIL válido.")
      .required("Você precisa preencher seu E-MAIL."),
    password: Yup.string()
      // .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Você precisa preencher a SENHA"),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      const { email, password } = values;

      props.handleSubmitSignIn(email, password);
      setSubmitting(false);
    });
  },
})(Form);
