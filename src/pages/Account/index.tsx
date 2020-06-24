import React from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { useSelector } from "../../store/modules/rootReducer";
// import { store } from "../../store/index";

import profile from "../../assets/product.jpg";

import { ContainerScroll } from "../../styles/scrollView";
import {
  Profile,
  AccountContainer,
  ProfileName,
  ProfileEmail,
  ProfileData,
  ProfileImage,
} from "./styles";
import { widthPercentageToDP } from "../../Components/PercentageConverter";

type AccProps = {
  navigation: any;
};

const Account: React.FC<AccProps> = ({ navigation }) => {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <ContainerScroll>
      <AccountContainer>
        {signed ? (
          <Profile onPress={() => navigation.navigate("Entrar")}>
            <ProfileImage source={profile} />
            <ProfileData>
              <ProfileName>Ademir Baségio Junior</ProfileName>
              <ProfileEmail>basegiojunior@hotmail.com</ProfileEmail>
            </ProfileData>
          </Profile>
        ) : (
          <Profile onPress={() => navigation.navigate("Entrar")}>
            <Icon
              name="account-circle"
              size={widthPercentageToDP("15%")}
              color="#777"
            />
            <ProfileData>
              <ProfileName>Entre ou Cadastre-se</ProfileName>
              <ProfileEmail>Compre produtos e receba na sua casa</ProfileEmail>
            </ProfileData>
          </Profile>
        )}
      </AccountContainer>
    </ContainerScroll>
  );
};

export default Account;
