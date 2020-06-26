import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUpRequest } from "~/store/modules/auth/actions";
import {
  Container,
  ContainerTop,
  TopImage,
  ToLoginContainer,
  ContainerIntern,
} from "./styles";
import SignUpForm from "./form";
import Loading from "~/Components/Loading";
import ButtonText from "~/Components/Button/buttonText";

import logo from "~/assets/icon.png";

type SignProps = {
  navigation: any;
};

const SignUp: React.FC<SignProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.auth.loading);

  const handleSubmit: Function = async (
    name: string,
    email: string,
    birthdate: string,
    phone: string,
    password: string,
    passwordConfirmation: string
  ) => {
    dispatch(
      signUpRequest(
        name,
        email,
        birthdate,
        phone,
        password,
        passwordConfirmation
      )
    );
  };

  return (
    <>
      <Container>
        <ContainerTop>
          <TopImage source={logo} />
        </ContainerTop>
        <ContainerIntern>
          <Loading visible={loading} />

          {/* <Image
				source={logo}
				style={{
					width: widthPercentageToDP("25%"),
					height: widthPercentageToDP("25%"),
					marginBottom: widthPercentageToDP("0%"),
				}}
			/> */}
          <SignUpForm termsViz={() => null} handleSubmitSignUp={handleSubmit} />

          <ToLoginContainer>
            <ButtonText
              text="Entrar com um usuário existente"
              onPress={() => navigation.navigate("Entrar")}
            />
          </ToLoginContainer>
        </ContainerIntern>
      </Container>
    </>
  );
};

export default SignUp;
