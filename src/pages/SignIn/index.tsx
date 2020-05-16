import React, { useState } from "react";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { View } from "react-native";

import { useSelector } from "react-redux";
import { signInRequest } from "../../store/modules/auth/actions";
import { store } from "../../store/index";

import {
  Container,
  FalseModal,
  LineDiv,
  SignUpView,
  TextSignUp,
  ModalContainer,
  ModalContainerIn,
  Exit,
  LogoImage,
  ExitButton,
} from "./styles";

import Input from "../../Components/Input";
import SignInForm from "./form";
import ButtonText from "../../Components/Button/buttonText";
import Button from "../../Components/Button";
import logo from "../../assets/icon.png";
import { widthPercentageToDP } from "../../Components/PercentageConverter";
import Loading from "../../Components/Loading";

type SignProps = {
  navigation: any;
};

const SignIn: React.FC<SignProps> = ({ navigation }) => {
  const loading = useSelector((state: any) => state.auth.loading);
  const [visibleForgotPass, setVisibleForgotPass] = useState(false);
  const [emailForgot, setEmailForgot] = useState("");

  const handleSubmit: Function = async (email: string, password: string) => {
    store.dispatch(signInRequest(email, password));
  };

  // useEffect(() => {
  // 	store.dispatch(clean());
  // }, []);

  const forgotPasswordReturn: Function = () => (
    <>
      {visibleForgotPass ? (
        <ModalContainer>
          <FalseModal>
            <ExitButton onPress={() => setVisibleForgotPass(false)}>
              <Exit>
                <Icon
                  name="close"
                  size={widthPercentageToDP("7%")}
                  color="white"
                />
              </Exit>
            </ExitButton>
            <ModalContainerIn>
              <Input
                icon="email"
                style={{ marginBottom: 25 }}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                autoCompleteType="email"
                keyboardType="email-address"
                value={emailForgot}
                onChangeText={(text: string) => {
                  setEmailForgot(text);
                }}
              />
              <Button
                text="Recuperar Senha"
                onPress={() => {
                  // store.dispatch(forgotPassword(emailForgot));
                  if (emailForgot !== "") {
                    setVisibleForgotPass(false);
                  }
                }}
              />
            </ModalContainerIn>
          </FalseModal>
        </ModalContainer>
      ) : null}
    </>
  );

  return (
    <>
      {forgotPasswordReturn()}
      <Container>
        <Loading visible={loading} />
        <LogoImage source={logo} />
        <SignInForm
          handleSubmitSignIn={(email: string, password: string) => {
            handleSubmit(email, password);
          }}
          forgotPassword={() => setVisibleForgotPass(true)}
        />

        <LineDiv />

        <SignUpView>
          <View>
            <TextSignUp>Não é cadastrado? </TextSignUp>
          </View>
          <ButtonText
            onPress={() => navigation.navigate("Cadastrar")}
            text="Crie uma conta"
          />
        </SignUpView>
      </Container>
    </>
  );
};

export default SignIn;
