import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUpRequest } from "~/store/modules/auth/actions";
import { Container, ContainerTop, TopImage, ToLoginContainer } from "./styles";
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
    password: string,
    phone: string
  ) => {
    dispatch(signUpRequest(name, email, password, phone, navigation));
  };

  return (
    <>
      <ContainerTop>
        <TopImage source={logo} />
      </ContainerTop>
      <Container>
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
      </Container>
    </>
  );
};

export default SignUp;
