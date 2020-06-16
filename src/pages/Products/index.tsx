import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Animated } from "react-native";

import { ContainerScroll } from "../../styles/scrollView";
import Title from "../../Components/Title";

import { companiesFromProductsRequest } from "../../store/modules/companies/actions";
import { store } from "../../store";

import profile from "../../assets/product.jpg";

import {
  Container,
  ContainerRetrac,
  ImageProduct,
  ProductName,
  ProductAmount,
  AlertStore,
  AlertText,
  Icone,
  Store,
  StoreCircle,
  StoreTextName,
  StoreTextPrice,
  StoreTextView,
  StoreViewLeft,
  StoreViewRight,
  StoreView,
  AddProductButton,
  AddProductButtonText,
  AddProductLeft,
  AddProductNumber,
  AddProductPrice,
  AddProductView,
  AddToCart,
  AddToCartText,
  TitleText,
  StoreSelectedImage,
  StoreSelectedName,
  StoreViewSeledted,
} from "./styles";

import { TEXT_SECONDARY } from "../../styles/colors";

import { widthPercentageToDP } from "../../Components/PercentageConverter";

const Products: React.FC = ({ route }) => {
  // dados do produto
  const { data } = route.params;

  // dimensões do retrátil
  const maxHeight = widthPercentageToDP("63.4%");
  const minHeight = widthPercentageToDP("15%");
  // eslint-disable-next-line no-var
  const height = useRef(new Animated.Value(minHeight)).current;

  // dados da loja selecionada
  const [storeSelected, setStoreSelected] = useState({ id: "" });

  const [nProductsInCart, setNProductsInCart] = useState(1);

  function addCart(): void {
    setNProductsInCart(nProductsInCart + 1);
  }

  function removeCart(): void {
    if (nProductsInCart > 1) {
      setNProductsInCart(nProductsInCart - 1);
    }
  }

  const companies = useSelector(
    (state) => state.companies.companiesFromProduct
  );

  function changeHeight(toValue: number): void {
    Animated.timing(height, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    if (storeSelected.id === "" && height._value > minHeight) {
      changeHeight(minHeight);
    } else if (storeSelected.id !== "" && height._value < maxHeight) {
      changeHeight(maxHeight);
    }
  }, [storeSelected]);

  useEffect(() => {
    store.dispatch(companiesFromProductsRequest(data.id));
  }, []);

  useEffect(() => {
    if (data.company) {
      const companie = companies.companies.filter(
        (item) => item.id === data.company.id
      );

      if (companie.length !== 0) {
        setStoreSelected(companie[0]);
      }
    }
  }, [companies]);

  return (
    <ContainerScroll>
      <ImageProduct
        source={{
          uri: data.image ? data.image.url : data.productDefault.image.url,
        }}
      />
      <Container>
        <ProductName>
          {data.name ? data.name : data.productDefault.name}
        </ProductName>
        <ProductAmount>
          {data.type === "weight"
            ? `aproximadamente ${data.weight} g`
            : "1 unidade"}
        </ProductAmount>

        <ContainerRetrac
          style={{
            height,
          }}
        >
          {storeSelected.id === "" ? (
            <AlertStore>
              <Icone
                color="#736626"
                size={widthPercentageToDP("8%")}
                name="alert-outline"
              />
              <AlertText>
                Atenção! Selecione um vendedor para então adicionar este produto
                à sacola
              </AlertText>
            </AlertStore>
          ) : (
            <>
              <AddProductView>
                <AddProductLeft>
                  <AddProductButton onPress={removeCart}>
                    <AddProductButtonText>-</AddProductButtonText>
                  </AddProductButton>
                  <AddProductNumber>{nProductsInCart}</AddProductNumber>
                  <AddProductButton onPress={addCart}>
                    <AddProductButtonText>+</AddProductButtonText>
                  </AddProductButton>
                </AddProductLeft>
                <AddProductPrice>
                  R${" "}
                  {(parseFloat(storeSelected.price_product) * nProductsInCart)
                    .toFixed(2)
                    .toString()
                    .replace(".", ",")}
                </AddProductPrice>
              </AddProductView>

              <AddToCart>
                <AddToCartText>adicionar à sacola</AddToCartText>
              </AddToCart>

              <TitleText
                style={{
                  includeFontPadding: false,
                }}
              >
                VENDEDOR SELECIONADO
              </TitleText>

              <StoreViewSeledted>
                <StoreViewLeft>
                  <StoreSelectedImage
                    source={{
                      uri: storeSelected.image.url,
                    }}
                  />
                  <StoreSelectedName>{storeSelected.name}</StoreSelectedName>
                </StoreViewLeft>

                <Icone
                  size={widthPercentageToDP("8%")}
                  color={TEXT_SECONDARY}
                  name="store"
                />
              </StoreViewSeledted>
            </>
          )}
        </ContainerRetrac>
        <Title
          style={{
            alignSelf: "flex-start",
          }}
        >
          QUEM VENDE ESSE PRODUTO
        </Title>

        {companies.id === data.id &&
          companies.companies.map((item) => (
            <Store onPress={() => setStoreSelected(item)} key={item.id}>
              <StoreView>
                <StoreViewLeft>
                  <StoreCircle isPressed={storeSelected.id === item.id} />
                  <StoreTextView>
                    <StoreTextName>{item.name}</StoreTextName>
                    <StoreTextPrice>
                      R$ {item.price_product.replace(".", ",")}
                    </StoreTextPrice>
                  </StoreTextView>
                </StoreViewLeft>
                <StoreViewRight>
                  <StoreTextPrice>{item.rating}/5</StoreTextPrice>
                  <Icone
                    size={widthPercentageToDP("6%")}
                    color={TEXT_SECONDARY}
                    name="star"
                    style={{ marginLeft: 5 }}
                  />
                </StoreViewRight>
              </StoreView>
            </Store>
          ))}
      </Container>
    </ContainerScroll>
  );
};

export default Products;
