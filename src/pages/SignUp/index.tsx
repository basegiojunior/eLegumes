import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUpRequest } from "~/store/modules/auth/actions";
import { Container } from "./styles";
import SignUpForm from "./form";
import Loading from "~/Components/Loading";

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
    </Container>
  );
};

export default SignUp;
