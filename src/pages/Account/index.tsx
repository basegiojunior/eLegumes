import React from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { useSelector } from "~/store/modules/rootReducer";

import profile from "~/assets/product.jpg";

import { ContainerScroll } from "~/styles/scrollView";
import {
  ContainerProfile,
  ProfileImage,
  ProfileName,
  Item,
  ItemLink,
  ItemText,
  ItemsContainer,
  IconProfileContainer,
  SignContainer,
  SignLeft,
  SignRight,
} from "./styles";

import Button, { ButtonGhost } from "~/Components/Button";
import { widthPercentageToDP } from "~/Components/PercentageConverter";
import { PRIMARY_COLOR } from "~/styles/colors";

import { signOut } from "~/store/modules/auth/actions";

type AccProps = {
  navigation: any;
};

const Account: React.FC<AccProps> = ({ navigation }) => {
  const signed = useSelector((state) => state.auth.signed);
  const userData = useSelector((state) => state.auth.userData);

  const dispatch = useDispatch();

  return (
    <ContainerScroll>
      {signed ? (
        <>
          <ContainerProfile>
            <ProfileImage source={profile} />
            <ProfileName>{userData.name}</ProfileName>
          </ContainerProfile>
          <ItemsContainer>
            <ItemLink>
              <Item>
                <Icon
                  name="clock-outline"
                  color="#30a8c0"
                  size={widthPercentageToDP("7%")}
                />
                <ItemText>Meus Pedidos</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="home"
                  color="#66cc91"
                  size={widthPercentageToDP("7%")}
                />
                <ItemText>Meus Endereços</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="credit-card"
                  color="#7c6"
                  size={widthPercentageToDP("7%")}
                />
                <ItemText>Meus Cartões</ItemText>
              </Item>
            </ItemLink>
          </ItemsContainer>
          <ItemsContainer>
            <ItemLink>
              <Item>
                <Icon
                  name="message-outline"
                  color="#f0c74c"
                  size={widthPercentageToDP("7%")}
                />
                <ItemText>Fale Conosco</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="help-circle-outline"
                  color="#f3a372"
                  size={widthPercentageToDP("7%")}
                />
                <ItemText>Dúvidas Frequentes</ItemText>
              </Item>
            </ItemLink>
            <ItemLink onPress={() => dispatch(signOut())}>
              <Item>
                <Icon
                  name="exit-run"
                  color="#ed5e5e"
                  size={widthPercentageToDP("7%")}
                />
                <ItemText>Sair</ItemText>
              </Item>
            </ItemLink>
          </ItemsContainer>
        </>
      ) : (
        <>
          <ContainerProfile>
            <IconProfileContainer>
              <Icon
                name="account"
                size={widthPercentageToDP("28%")}
                color={PRIMARY_COLOR}
              />
            </IconProfileContainer>
            <ProfileName>Visitante</ProfileName>
          </ContainerProfile>

          <SignContainer>
            <SignLeft>
              <ButtonGhost
                text="cadastro"
                onPress={() => navigation.navigate("Cadastrar")}
              />
            </SignLeft>
            <SignRight>
              <Button
                text="entrar"
                onPress={() => navigation.navigate("Entrar")}
              />
            </SignRight>
          </SignContainer>

          <ItemsContainer>
            <ItemLink>
              <Item>
                <Icon
                  name="message-outline"
                  color="#f0c74c"
                  size={widthPercentageToDP("7%")}
                />
                <ItemText>Fale Conosco</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="help-circle-outline"
                  color="#f3a372"
                  size={widthPercentageToDP("7%")}
                />
                <ItemText>Dúvidas Frequentes</ItemText>
              </Item>
            </ItemLink>
          </ItemsContainer>
        </>
      )}
    </ContainerScroll>
  );
};

export default Account;
