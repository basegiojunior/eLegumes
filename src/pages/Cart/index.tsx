import React, { useEffect, useCallback, useRef, useState } from "react";
import { TouchableWithoutFeedback, Animated, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import Button from "../../Components/Button";

import { ContainerScroll } from "../../styles/scrollView";

import {
  Container,
  HeaderCompanie,
  HeaderCompanieCheck,
  HeaderCompanieTitle,
  ProductAboutContainer,
  ProductChangeQuantityIntern,
  ProductAboutTop,
  ProductChangeQuantityButton,
  ProductChangeQuantityButtonText,
  ProductChangeQuantityContainer,
  ProductChangeQuantityText,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
  EndContainer,
  EndContainerLeft,
  EndContainerLeftLink,
  EndContainerRight,
  EndContainerPrice,
  EndContainerTitle,
  EndContainerViewLeft,
  ExpandedEnd,
  ExpandedEndOff,
  ExpandedEndBackground,
} from "./styles";

import {
  decreaseProduct,
  increaseProduct,
  selectCompanie,
} from "../../store/modules/cart/actions";

import product from "../../assets/product.jpg";

import { TEXT_SECONDARY } from "../../styles/colors";
import {
  SPACE_FIVE_DP,
  SPACE_SEVEN_DP,
  SPACE_EIGHT_DP,
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
  const companieSelectedId = useSelector(
    (state) => state.cart.companieSelectedId
  );

  const endContainerPosition = useRef(new Animated.Value(0)).current;
  const expandedEnd = useRef(new Animated.Value(sizeExpandEnd)).current;
  const [showModal, setShowModal] = useState(false);

  const colorBack = expandedEnd.interpolate({
    inputRange: [sizeExpandEnd, 0],
    outputRange: ["rgba(0, 0, 0, .0)", "rgba(0, 0, 0, .35)"],
  });

  function animatedExpandEnd(to: number): void {
    Animated.timing(expandedEnd, {
      toValue: to,
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      if (to !== 0) {
        setShowModal(false);
      }
    });
  }

  function animatedEndContainer(to: number): void {
    Animated.spring(endContainerPosition, {
      toValue: to,
      speed: 1,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    if (
      companieSelectedId === "" &&
      endContainerPosition._value > sizeEndContainer
    ) {
      animatedEndContainer(sizeEndContainer);
    } else if (companieSelectedId !== "" && endContainerPosition._value < 0) {
      animatedEndContainer(0);
    }
  }, [companieSelectedId]);

  const ProductItem = useCallback(
    ({ productItem, companieId }) => (
      <ProductContainer>
        <ProductImage source={product} />
        <ProductAboutContainer>
          <ProductAboutTop>
            <ProductTitle>
              {productItem.data.name || productItem.data.productDefault.name}
            </ProductTitle>
            <ProductPrice>
              R${" "}
              {productItem.data.active_promotion
                ? productItem.data.price_promotion.replace(".", ",")
                : productItem.data.price.replace(".", ",")}
            </ProductPrice>
          </ProductAboutTop>
          <ProductQuantity>
            {productItem.quantity} x{" "}
            {productItem.data.type === "weight"
              ? `${productItem.data.weight} g`
              : "1 unidade"}
          </ProductQuantity>
        </ProductAboutContainer>

        <ProductChangeQuantityContainer>
          <ProductChangeQuantityIntern>
            <ProductChangeQuantityButton
              onPress={() => {
                dispatch(decreaseProduct(productItem.data.id, companieId));
              }}
            >
              <ProductChangeQuantityButtonText
                style={{
                  includeFontPadding: false,
                }}
              >
                -
              </ProductChangeQuantityButtonText>
            </ProductChangeQuantityButton>

            <ProductChangeQuantityText>
              {productItem.quantity}
            </ProductChangeQuantityText>

            <ProductChangeQuantityButton
              onPress={() => {
                dispatch(increaseProduct(productItem.data.id, companieId));
              }}
            >
              <ProductChangeQuantityButtonText
                style={{
                  includeFontPadding: false,
                }}
              >
                +
              </ProductChangeQuantityButtonText>
            </ProductChangeQuantityButton>
          </ProductChangeQuantityIntern>
        </ProductChangeQuantityContainer>
      </ProductContainer>
    ),
    [cart]
  );

  return (
    <>
      <ExpandedEndOff transparent visible={showModal}>
        <ExpandedEndBackground style={{ backgroundColor: colorBack }}>
          <ExpandedEnd style={{ bottom: expandedEnd }}>
            <TouchableWithoutFeedback
              style={{ marginTop: 400 }}
              onPress={() => animatedExpandEnd(sizeExpandEnd)}
            >
              <Text>Fechar</Text>
            </TouchableWithoutFeedback>
          </ExpandedEnd>
        </ExpandedEndBackground>
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
              <EndContainerPrice>R$16,99</EndContainerPrice>
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
                  if (item.companie.id === companieSelectedId) {
                    dispatch(selectCompanie(""));
                  } else {
                    dispatch(selectCompanie(item.companie.id));
                  }
                }}
              >
                <HeaderCompanie>
                  <HeaderCompanieCheck
                    selected={item.companie.id === companieSelectedId}
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
            </React.Fragment>
          ))}
        </Container>
      </ContainerScroll>
    </>
  );
};

export default Cart;
