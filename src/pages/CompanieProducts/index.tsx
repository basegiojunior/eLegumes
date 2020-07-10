import React, { useState, useEffect } from "react";
import { RefreshControl, FlatList } from "react-native";
import Icon from "~/Components/Icon";
import { useSelector } from "~/store/modules/rootReducer";

import GridImages from "~/Components/GridImages";
import { ButtonGhost } from "~/Components/Button";
import Title from "~/Components/Title";

import {
  Container,
  ContainerTitle,
  ContainerGrid,
  AlertStore,
  AlertText,
} from "./styles";

import SIZES from "~/styles/sizes";
import { SlideType } from "~/types";

type CompType = {
  navigation: any;
  route: {
    params: {
      id: string;
    };
  };
};

const CompanieProducts: React.FC<CompType> = ({ navigation, route }) => {
  const { id } = route.params;

  const [actualProducts, setActualProducts] = useState<SlideType[] | []>([]);
  const [actualProductsCart, setActualProductsCart] = useState<
    SlideType[] | []
  >([]);
  const [expanded, setExpanded] = useState(false);

  const products = useSelector((state) => state.companies.companieProducts);
  const companieCart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    console.log(1);
    const temp = companieCart.find((item) => item.companie.id === id);

    if (temp) {
      const tempProducts = temp.products;

      let response: any = [];

      for (let i = 0; i < tempProducts.length; i += 1) {
        response = [
          ...response,
          {
            id: tempProducts[i].data.id,
            image: tempProducts[i].data.image,
            title: tempProducts[i].data.title,
            subtitle: `R$ ${tempProducts[i].data.price
              .toFixed(2)
              .toString()
              .replace(".", ",")} / ${
              tempProducts[i].data.weight
                ? `${tempProducts[i].data.weight}g`
                : "1 uni."
            } `,
          },
        ];
      }

      setActualProductsCart(response);
    }

    if (products.id === id) {
      if (temp) {
        const response = products.products.filter(
          (item) =>
            temp.products.findIndex((item2) => item2.data.id === item.id) === -1
        );

        setActualProducts(response);
      } else {
        setActualProducts(products.products);
      }
    }
  }, [companieCart, products]);

  const headerComponent: any = () => {
    if (actualProductsCart.length > 0) {
      if (expanded) {
        return (
          <>
            <ContainerTitle>
              <Title>PRODUTOS NA SACOLA</Title>
            </ContainerTitle>
            <FlatList
              contentContainerStyle={{
                backgroundColor: "#fff",
                width: "100%",
                paddingBottom: SIZES.SPACE_SIX_DP,
                flexDirection: "column",
              }}
              numColumns={2}
              renderItem={GridImages}
              data={actualProductsCart}
              keyExtractor={(item) => item.id}
            />
            <ContainerTitle>
              <Title>PRODUTOS DISPONÍVEIS</Title>
            </ContainerTitle>
          </>
        );
      }
      return (
        <Container>
          <AlertStore>
            <Icon name="shop" size={SIZES.SPACE_EIGHT_DP} color="#1f6761" />
            <AlertText>
              Ocultamos produtos desta loja que já estão na sua sacola.
            </AlertText>
          </AlertStore>
          <ButtonGhost
            text="ver produtos ocultos"
            onPress={() => setExpanded(true)}
          />
          <Title>PRODUTOS DISPONÍVEIS</Title>
        </Container>
      );
    }
    return (
      <ContainerTitle>
        <Title>PRODUTOS DISPONÍVEIS</Title>
      </ContainerTitle>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: "#fff",
        width: "100%",
        paddingBottom: SIZES.SPACE_SIX_DP,
        flexDirection: "column",
      }}
      refreshControl={
        <RefreshControl onRefresh={() => null} refreshing={false} />
      }
      numColumns={2}
      renderItem={GridImages}
      data={actualProducts}
      keyExtractor={(item: any) => item.id}
      onEndReached={() => null}
      onEndReachedThreshold={0.1}
      ListHeaderComponent={headerComponent}
    />
  );
};

export default CompanieProducts;
