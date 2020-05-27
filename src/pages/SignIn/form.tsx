import React, { useRef } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
// import CampInformation from "../../Components/CampInformation";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import ButtonText from "../../Components/Button/buttonText";

import { LostPass } from "./styles";

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
        title="Email"
        placeholder="Email"
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

      <LostPass>
        <ButtonText
          italic
          text="Esqueceu sua senha?"
          onPress={() => propsForm.forgotPassword()}
        />
      </LostPass>

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
    email: Yup.string().required("Preencha o campo e-mail"),
    password: Yup.string().required("Preencha o campo de senha"),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      const { email, password } = values;

      props.handleSubmitSignIn(email, password);
      setSubmitting(false);
    });
  },
})(Form);
