import React, { useEffect, useRef, useState } from "react";
import { TouchableWithoutFeedback, Animated, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import Button, { ButtonGhost } from "../../Components/Button";
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
  ExpandedEnd,
  ExpandedLink,
  ExpandedEndOff,
  ExpandedEndBackground,
  DeliveryContainer,
  DeliveryPrice,
  DeliveryText,
  TotalPriceContainer,
  TotalPricePrice,
  TotalPriceTitle,
  TotalPriceLeft,
  ButtonsContainer,
  ButtonsIntern,
  InformationContainer,
  InformationContainerIntern,
  InfomationSec,
  InfomationTitle,
} from "./styles";

import {
  deselectCompanie,
  selectCompanie,
} from "../../store/modules/cart/actions";

import { TEXT_SECONDARY, PRIMARY_COLOR } from "../../styles/colors";
import {
  SPACE_FIVE_DP,
  SPACE_SEVEN_DP,
  SPACE_SIX_DP,
} from "../../styles/sizes";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "../../Components/PercentageConverter";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const sizeEndContainer = -widthPercentageToDP("20%");
  const sizeExpandEnd = -heightPercentageToDP("65%");

  // selectors
  const cart = useSelector((state) => state.cart.cart);
  const companieSelected = useSelector((state) => state.cart.companieSelected);

  // variaveis das animações
  const endContainerPosition = useRef(
    new Animated.Value(companieSelected.id === "" ? sizeEndContainer : 0)
  ).current;
  const expandedEnd = useRef(new Animated.Value(sizeExpandEnd)).current;
  const colorBack = expandedEnd.interpolate({
    inputRange: [sizeExpandEnd, 0],
    outputRange: ["rgba(0, 0, 0, .0)", "rgba(0, 0, 0, .35)"],
  });

  // states
  const [showModal, setShowModal] = useState(false);
  const [actualPrice, setActualPrice] = useState("0,00");

  // gerencia a animação do conteiner expansível MAIOR
  function animatedExpandEnd(to: number): void {
    Animated.timing(expandedEnd, {
      toValue: to,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      if (to !== 0) {
        setShowModal(false);
      }
    });
  }

  // gerencia a animação do conteiner expansível MENOR
  function animatedEndContainer(to: number): void {
    Animated.timing(endContainerPosition, {
      toValue: to,
      duration: 300,
      useNativeDriver: false,
    }).start();
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
      <ExpandedEndOff transparent visible={showModal}>
        <ExpandedLink onPress={() => null}>
          <ExpandedEndBackground style={{ backgroundColor: colorBack }}>
            <ExpandedEnd style={{ bottom: expandedEnd }}>
              <TotalPriceContainer>
                <TotalPriceLeft>
                  <TotalPriceTitle>PREÇO TOTAL DA SACOLA</TotalPriceTitle>
                  <TotalPricePrice>R$ 16,00</TotalPricePrice>
                </TotalPriceLeft>
                <Icon
                  name="shopping"
                  color={PRIMARY_COLOR}
                  size={widthPercentageToDP("17%")}
                />
              </TotalPriceContainer>

              <InformationContainer>
                <InformationContainerIntern>
                  <InfomationTitle>TOTAL DE PRODUTOS</InfomationTitle>
                  <InfomationSec>R$ 8,00</InfomationSec>
                </InformationContainerIntern>
                <InformationContainerIntern>
                  <InfomationTitle>TOTAL DE FRETE</InfomationTitle>
                  <InfomationSec>R$ 5,00</InfomationSec>
                </InformationContainerIntern>
              </InformationContainer>

              <InformationContainer>
                <InformationContainerIntern>
                  <InfomationTitle>VENDEDORES SELECIONADOS</InfomationTitle>
                  <InfomationSec>Frutaria da Maria</InfomationSec>
                </InformationContainerIntern>
              </InformationContainer>

              <ButtonsContainer>
                <ButtonsIntern>
                  <ButtonGhost
                    text="Fechar"
                    onPress={() => animatedExpandEnd(sizeExpandEnd)}
                  />
                </ButtonsIntern>
                <ButtonsIntern last>
                  <Button text="Finalizar Pedido" />
                </ButtonsIntern>
              </ButtonsContainer>
            </ExpandedEnd>
          </ExpandedEndBackground>
        </ExpandedLink>
      </ExpandedEndOff>

      <EndContainer style={{ bottom: endContainerPosition }}>
        <EndContainerLeftLink
          onPress={() => {
            setShowModal(true);
            animatedExpandEnd(0);
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
        <Container>
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
