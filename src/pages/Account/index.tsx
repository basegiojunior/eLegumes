import React from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

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

type AccProps = {
  navigation: any;
};

const Account: React.FC<AccProps> = ({ navigation }) => {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <ContainerScroll>
      {signed ? (
        <>
          <ContainerProfile>
            <ProfileImage source={profile} />
            <ProfileName>Ademir Baségio Junior</ProfileName>
          </ContainerProfile>
          <ItemsContainer>
            <ItemLink>
              <Item>
                <Icon
                  name="share"
                  color="green"
                  size={widthPercentageToDP("10%")}
                />
                <ItemText>Meus Pedidos</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="share"
                  color="green"
                  size={widthPercentageToDP("10%")}
                />
                <ItemText>Meus Endereços</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="share"
                  color="green"
                  size={widthPercentageToDP("10%")}
                />
                <ItemText>Meus Cartões</ItemText>
              </Item>
            </ItemLink>
          </ItemsContainer>
          <ItemsContainer>
            <ItemLink>
              <Item>
                <Icon
                  name="share"
                  color="green"
                  size={widthPercentageToDP("10%")}
                />
                <ItemText>Fale Conosco</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="share"
                  color="green"
                  size={widthPercentageToDP("10%")}
                />
                <ItemText>Fale Conosco</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="share"
                  color="green"
                  size={widthPercentageToDP("10%")}
                />
                <ItemText>Fale Conosco</ItemText>
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
                  name="share"
                  color="green"
                  size={widthPercentageToDP("10%")}
                />
                <ItemText>Fale Conosco</ItemText>
              </Item>
            </ItemLink>
            <ItemLink>
              <Item>
                <Icon
                  name="share"
                  color="green"
                  size={widthPercentageToDP("10%")}
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
