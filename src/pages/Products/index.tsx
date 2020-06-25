/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Animated } from "react-native";
import { useSelector } from "~/store/modules/rootReducer";

import { ContainerScroll } from "~/styles/scrollView";
import Title from "~/Components/Title";
import ExpandedContainer from "~/Components/ExpandedContainer";

import { companiesFromProductsRequest } from "~/store/modules/companies/actions";
import { addToCart } from "~/store/modules/cart/actions";

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
  InfomationSec,
  InformationContainer,
} from "./styles";

import { TEXT_SECONDARY } from "../../styles/colors";

import { widthPercentageToDP } from "../../Components/PercentageConverter";

type ProductsProps = {
  route: any;
  navigation: any;
};

const Products: React.FC<ProductsProps> = ({ route, navigation }) => {
  const dispatch = useDispatch();

  // dados do produto
  const { data } = route.params;

  // dimensões do retrátil
  const maxHeight = widthPercentageToDP("63.4%");
  const minHeight = widthPercentageToDP("15%");
  // eslint-disable-next-line no-var
  const height = useRef(new Animated.Value(minHeight)).current;

  const companies = useSelector(
    (state) => state.companies.companiesFromProduct
  );

  // states
  const [storeSelected, setStoreSelected] = useState<
    typeof companies.companies[0] | undefined
  >(undefined);

  const [nProductsInCart, setNProductsInCart] = useState(1);
  const [expanded, setExpanded] = useState(false);

  // adiciona mais um produto
  function addCart(): void {
    setNProductsInCart(nProductsInCart + 1);
  }

  // remove um produto
  function removeCart(): void {
    if (nProductsInCart > 1) {
      setNProductsInCart(nProductsInCart - 1);
    }
  }

  // gera a string da unidade de venda do produto
  const getProductUnity = (): string => {
    if (storeSelected === undefined) {
      return "1 unidade";
    }
    if (storeSelected.product?.type === "weight") {
      return `aproximadamente ${storeSelected.product.weight} g`;
    }
    return "1 unidade";
  };

  // exibe ou oculta a aba de adicionar o produto ao carrinho
  function changeHeight(toValue: number): void {
    Animated.timing(height, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  // se uma loja for selecionada, exibe ou oculta a aba
  useEffect(() => {
    if (storeSelected === undefined) {
      changeHeight(minHeight);
    } else if (storeSelected !== undefined) {
      changeHeight(maxHeight);
    }
  }, [storeSelected]);

  // faz a requisição para exibir o produto selecionado
  useEffect(() => {
    if (data.productDefault) {
      dispatch(companiesFromProductsRequest(data.productDefault.id));
    } else {
      dispatch(companiesFromProductsRequest(data.id));
    }
  }, []);

  // muda a loja selecionada
  useEffect(() => {
    if (data.company) {
      const companie = companies.companies.find(
        (item) => item.id === data.company.id
      );

      if (companie) {
        setStoreSelected(companie);
      }
    }
  }, [companies]);

  return (
    <>
      <ExpandedContainer
        infoTopText={data.name ? data.name : data.productDefault.name}
        infoTopTitle="ADICIONADO À SACOLA"
        buttonLeftTitle="não, obrigado"
        buttonLeftCall={() => setExpanded(false)}
        buttonRightTitle="ir para a loja"
        buttonRightCall={() => {
          navigation.navigate("Sacola");
        }}
        expanded={expanded}
      >
        <InformationContainer>
          <InfomationSec>
            Você acabou de adicionar um produto de &ldquo;{storeSelected?.name}
            &rdquo;. Gostaria de visitar este vendedor para ver mais produtos?
          </InfomationSec>
        </InformationContainer>
      </ExpandedContainer>

      <ContainerScroll>
        <ImageProduct
          source={{
            uri: data.productDefault
              ? data.productDefault.image.url
              : data.image.url,
          }}
        />
        <Container>
          <ProductName>
            {data.name ? data.name : data.productDefault.name}
          </ProductName>
          <ProductAmount>{getProductUnity()}</ProductAmount>

          <ContainerRetrac
            style={{
              height,
            }}
          >
            {storeSelected === undefined ? (
              <AlertStore>
                <Icone
                  color="#736626"
                  size={widthPercentageToDP("8%")}
                  name="alert-outline"
                />
                <AlertText>
                  Atenção! Selecione um vendedor para então adicionar este
                  produto à sacola
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
                    {(
                      parseFloat(
                        storeSelected?.product.active_promotion
                          ? storeSelected.product.price_promotion
                          : storeSelected.product.price
                      ) * nProductsInCart
                    )
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")}
                  </AddProductPrice>
                </AddProductView>

                <AddToCart
                  onPress={() => {
                    dispatch(
                      addToCart(
                        {
                          id: storeSelected.id,
                          name: storeSelected.name,
                        },
                        storeSelected.product,
                        nProductsInCart
                      )
                    );
                    setExpanded(true);
                  }}
                >
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

          {companies.id === data.id && companies.companies.length > 0 && (
            <>
              <Title
                style={{
                  alignSelf: "flex-start",
                }}
              >
                QUEM VENDE ESSE PRODUTO
              </Title>

              {companies.companies.map((item) => (
                <Store onPress={() => setStoreSelected(item)} key={item.id}>
                  <StoreView>
                    <StoreViewLeft>
                      <StoreCircle isPressed={storeSelected?.id === item.id} />
                      <StoreTextView>
                        <StoreTextName>{item.name}</StoreTextName>
                        <StoreTextPrice>
                          R${" "}
                          {item?.product.active_promotion
                            ? item?.product.price_promotion.replace(".", ",")
                            : item?.product.price.replace(".", ",")}
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
            </>
          )}
        </Container>
      </ContainerScroll>
    </>
  );
};

export default Products;
