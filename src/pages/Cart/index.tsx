/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import { useDispatch } from "react-redux";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useSelector } from "../../store/modules/rootReducer";

import Button from "../../Components/Button";
import ProductItem from "./ProductItem";

import { ContainerScroll } from "../../styles/scrollView";

import {
  Container,
  HeaderCompanie,
  HeaderCompanieCheck,
  HeaderCompanieTitle,
  EndContainer,
  EndContainerLeft,
  EndContainerLeftLink,
  EndContainerRight,
  EndContainerPrice,
  EndContainerTitle,
  EndContainerViewLeft,
  DeliveryContainer,
  DeliveryPrice,
  DeliveryText,
  InformationContainer,
  InformationContainerIntern,
  InfomationSec,
  InfomationTitle,
} from "./styles";

import ExpandedContainer from "../../Components/ExpandedContainer";

import {
  deselectCompanie,
  selectCompanie,
} from "../../store/modules/cart/actions";

import { orderRequest } from "../../store/modules/orders/actions";

import { TEXT_SECONDARY } from "../../styles/colors";
import {
  SPACE_FIVE_DP,
  SPACE_SEVEN_DP,
  SPACE_SIX_DP,
} from "../../styles/sizes";
import { widthPercentageToDP } from "../../Components/PercentageConverter";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const sizeEndContainer = -widthPercentageToDP("20%");

  // selectors
  const cart = useSelector((state) => state.cart.cart);
  const companieSelected = useSelector((state) => state.cart.companieSelected);

  // variaveis das animações
  const endContainerPosition = useRef(
    new Animated.Value(companieSelected.id === "" ? sizeEndContainer : 0)
  ).current;

  const [expanded, setExpanded] = useState(false);
  const [actualPrice, setActualPrice] = useState("0,00");

  // gerencia a animação do conteiner expansível MENOR
  function animatedEndContainer(to: number): void {
    Animated.timing(endContainerPosition, {
      toValue: to,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  function handleOrder(): void {
    type requestType = {
      items: { product_id: string; weight: number }[];
      company: string;
    };

    const request: requestType = { items: [], company: "" };

    const company = cart.find(
      (item: any) => item.companie.id === companieSelected.id
    );

    request.company = company.companie.id;

    for (let i = 0; i < company.products.length; i += 1) {
      if (company.products[i].data.type === "weight") {
        request.items = [
          ...request.items,
          {
            // eslint-disable-next-line @typescript-eslint/camelcase
            product_id: company.products[i].data.id,
            weight:
              company.products[i].data.weight * company.products[i].quantity,
          },
        ];
      }
    }

    dispatch(orderRequest(request));
  }

  // gerencia o preço do total da compania selecionada
  useEffect(() => {
    if (companieSelected.id !== "") {
      setActualPrice(
        cart
          .filter((item: any) => item.companie.id === companieSelected.id)[0]
          .totalPrice.toFixed(2)
          .toString()
      );
    }
  }, [cart, companieSelected]);

  // gerencia quando a animação do conteiner menor será executada
  useEffect(() => {
    if (
      companieSelected.id === "" &&
      endContainerPosition._value > sizeEndContainer
    ) {
      animatedEndContainer(sizeEndContainer);
    } else if (companieSelected.id !== "" && endContainerPosition._value < 0) {
      animatedEndContainer(0);
    }
  }, [companieSelected]);

  return (
    <>
      <ExpandedContainer
        infoTopText={`R$ ${actualPrice}`}
        infoTopTitle="PREÇO TOTAL DA SACOLA"
        buttonLeftTitle="fechar"
        buttonLeftCall={() => setExpanded(false)}
        buttonRightTitle="fazer pedido"
        buttonRightCall={() => handleOrder()}
        expanded={expanded}
      >
        <InformationContainer>
          <InformationContainerIntern>
            <InfomationTitle>TOTAL DE PRODUTOS</InfomationTitle>
            <InfomationSec>R$ {actualPrice}</InfomationSec>
          </InformationContainerIntern>
          <InformationContainerIntern>
            <InfomationTitle>TOTAL DE FRETE</InfomationTitle>
            <InfomationSec>R$ 0,00</InfomationSec>
          </InformationContainerIntern>
        </InformationContainer>

        <InformationContainer>
          <InformationContainerIntern>
            <InfomationTitle>VENDEDORES SELECIONADOS</InfomationTitle>
            <InfomationSec>{companieSelected.name}</InfomationSec>
          </InformationContainerIntern>
        </InformationContainer>
      </ExpandedContainer>

      <EndContainer style={{ bottom: endContainerPosition }}>
        <EndContainerLeftLink
          onPress={() => {
            setExpanded(true);
          }}
        >
          <EndContainerLeft>
            <EndContainerTitle>PREÇO TOTAL</EndContainerTitle>
            <EndContainerViewLeft>
              <EndContainerPrice>R$ {actualPrice}</EndContainerPrice>
              <Icon
                name="information-outline"
                size={SPACE_SIX_DP}
                color={TEXT_SECONDARY}
              />
            </EndContainerViewLeft>
          </EndContainerLeft>
        </EndContainerLeftLink>
        <EndContainerRight>
          <Button text="fazer pedido" />
        </EndContainerRight>
      </EndContainer>

      <ContainerScroll>
        <Container style={{ paddingBottom: sizeEndContainer * -1 }}>
          {cart.map((item: any) => (
            <React.Fragment key={item.companie.id}>
              <TouchableWithoutFeedback
                style={{
                  display: "flex",
                  backgroundColor: "gray",
                  width: 200,
                  height: 100,
                }}
                onPress={() => {
                  if (item.companie.id === companieSelected.id) {
                    dispatch(deselectCompanie());
                  } else {
                    dispatch(selectCompanie(item.companie.id));
                  }
                }}
              >
                <HeaderCompanie>
                  <HeaderCompanieCheck
                    selected={item.companie.id === companieSelected.id}
                  >
                    <Icon name="check" size={SPACE_FIVE_DP} color="#fff" />
                  </HeaderCompanieCheck>
                  <HeaderCompanieTitle>
                    {item.companie.name.toUpperCase()}
                  </HeaderCompanieTitle>
                  <Icon
                    name="store"
                    size={SPACE_SEVEN_DP}
                    color={TEXT_SECONDARY}
                  />
                </HeaderCompanie>
              </TouchableWithoutFeedback>

              {item.products.map((itemInside: any) => (
                <ProductItem
                  key={itemInside.data.id}
                  productItem={itemInside}
                  companieId={item.companie.id}
                />
              ))}

              <DeliveryContainer>
                <DeliveryText>Entrega</DeliveryText>
                <DeliveryPrice>R$ 0,00</DeliveryPrice>
              </DeliveryContainer>
            </React.Fragment>
          ))}
        </Container>
      </ContainerScroll>
    </>
  );
};

export default Cart;
