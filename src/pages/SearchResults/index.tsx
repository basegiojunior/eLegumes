import React from "react";
import { RefreshControl } from "react-native";
import { useSelector } from "react-redux";

import { ContainerScroll } from "../../styles/scrollView";

import { Title, Container, Item, Image, Name } from "./styles";

import { ICON_CHECKBOX_SIZE } from "../../styles/sizes";
import { TEXT_SECONDARY } from "../../styles/colors";

import { store } from "../../store/index";

const SearchResults: React.FC = () => {
  const products = useSelector(
    (state) => state.search.searchProductsResults
  ).slice(0, 6);
  const stores = useSelector((state) => state.search.searchStoresResults).slice(
    0,
    5
  );

  return (
    <ContainerScroll refreshControl={<RefreshControl refreshing={false} />}>
      <Container>
        <Title>PRODUTOS</Title>
        {products.map(
          (item): JSX.Element => (
            <>
              <Item>
                <Image
                  source={{
                    uri: item.image.url,
                  }}
                />
                <Name>{item.name}</Name>
              </Item>
            </>
          )
        )}
        <Title>VENDEDORES</Title>
        {stores.map(
          (item): JSX.Element => (
            <>
              <Item>
                <Image
                  source={{
                    uri: item.image.url,
                  }}
                />
                <Name>{item.name}</Name>
              </Item>
            </>
          )
        )}
      </Container>
    </ContainerScroll>
  );
};

export default SearchResults;
