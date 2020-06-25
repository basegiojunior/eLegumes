import React, { useState } from "react";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationActions } from "react-navigation";
import { useSelector } from "../../store/modules/rootReducer";

import { signInRequest } from "../../store/modules/auth/actions";
import { store } from "../../store/index";

import {
  Container,
  FalseModal,
  LineDiv,
  SignUpView,
  LostPass,
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
  const loading = useSelector((state) => state.auth.loading);
  const [visibleForgotPass, setVisibleForgotPass] = useState(false);
  const [emailForgot, setEmailForgot] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit: Function = async (email: string, password: string) => {
    store.dispatch(signInRequest(email, password));
  };

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
                title="Email"
                placeholder="Email"
                autoCompleteType="email"
                keyboardType="email-address"
                value={emailForgot}
                submitted={isSubmitted}
                onChangeText={(text: string) => {
                  setEmailForgot(text);
                }}
              />
              <Button
                text="Recuperar Senha"
                onPress={() => {
                  setIsSubmitted(true);
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

        {/* <LineDiv /> */}

        <SignUpView>
          <ButtonText
            onPress={() => {
              navigation.navigate("Sacola");
            }}
            text="Crie uma conta"
          />

          <LostPass>
            <ButtonText
              text="Esqueceu sua senha?"
              onPress={() => () => setVisibleForgotPass(true)}
            />
          </LostPass>
        </SignUpView>
      </Container>
    </>
  );
};

export default SignIn;
