/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Animated, TouchableWithoutFeedback } from "react-native";
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
  ImageProductEmpty,
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
  StoreSelectedImageEmpty,
  StoreSelectedName,
  StoreViewSeledted,
  StoreLinkSelected,
  InfomationSec,
  InformationContainer,
} from "./styles";

import COLORS from "../../styles/colors";

import { widthPercentageToDP } from "../../Components/PercentageConverter";

import { CompanieFromProduct } from "~/types";

type ProductsProps = {
  route: any;
  navigation: any;
};

const Products: React.FC<ProductsProps> = ({ route, navigation }) => {
  const dispatch = useDispatch();

  // dados do produto
  const { params } = route;

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
    CompanieFromProduct | undefined
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
    if (params.productDefault) {
      dispatch(companiesFromProductsRequest(params.productDefault.id));
    } else {
      dispatch(companiesFromProductsRequest(params.id));
    }
  }, []);

  // muda a loja selecionada
  useEffect(() => {
    if (params.company) {
      const companie = companies.companies.find(
        (item) => item.id === params.company.id
      );

      if (companie) {
        setStoreSelected(companie);
      }
    }
  }, [companies]);

  return (
    <>
      <ExpandedContainer
        infoTopText={params.title ? params.title : params.productDefault.title}
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
            Você acabou de adicionar um produto de &ldquo;{storeSelected?.title}
            &rdquo;. Gostaria de visitar este vendedor para ver mais produtos?
          </InfomationSec>
        </InformationContainer>
      </ExpandedContainer>

      <ContainerScroll>
        {params.image.url ? (
          <ImageProduct
            source={{
              uri: params.image.url,
            }}
          />
        ) : (
          <ImageProductEmpty />
        )}
        <Container>
          <ProductName>
            {params.title ? params.title : params.productDefault.title}
          </ProductName>
          <ProductAmount>
            {storeSelected ? storeSelected.product.typeString : ""}
          </ProductAmount>

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
                    {(storeSelected.product.price * nProductsInCart)
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
                          title: storeSelected.title,
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

                <StoreLinkSelected
                  onPress={() => {
                    navigation.navigate("Companie", { ...storeSelected });
                    // console.log("na");
                  }}
                >
                  <StoreViewSeledted>
                    <StoreViewLeft>
                      {storeSelected.image.url ? (
                        <StoreSelectedImage
                          source={{
                            uri: storeSelected.image.url,
                          }}
                        />
                      ) : (
                        <StoreSelectedImageEmpty />
                      )}
                      <StoreSelectedName>
                        {storeSelected.title}
                      </StoreSelectedName>
                    </StoreViewLeft>

                    <Icone
                      size={widthPercentageToDP("8%")}
                      color={COLORS.TEXT_SECONDARY}
                      name="store"
                    />
                  </StoreViewSeledted>
                </StoreLinkSelected>
              </>
            )}
          </ContainerRetrac>

          {companies.id === params.id && companies.companies.length > 0 && (
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
                        <StoreTextName>{item.title}</StoreTextName>
                        <StoreTextPrice>
                          R${" "}
                          {item.product.price
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")}
                        </StoreTextPrice>
                      </StoreTextView>
                    </StoreViewLeft>
                    <StoreViewRight>
                      <StoreTextPrice>{item.rating}/5</StoreTextPrice>
                      <Icone
                        size={widthPercentageToDP("6%")}
                        color={COLORS.TEXT_SECONDARY}
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
