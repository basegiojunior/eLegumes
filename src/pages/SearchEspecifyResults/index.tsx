import React, { useEffect, useState } from "react";
import { RefreshControl, FlatList, ListRenderItem } from "react-native";
import { useSelector } from "react-redux";

import { ContainerScroll } from "../../styles/scrollView";

import ItemResult from "../../Components/ItemResult";

import { SPACE_SIX_DP } from "../../styles/sizes";

import { Container, Item, Image, Name } from "./styles";

import {
  searchProductsRequest,
  searchStoresRequest,
} from "../../store/modules/search/actions";
import { store } from "../../store/index";

type Results = {
  categoryName: string;
  id: string;
  route: object;
};

const SearchEspecifyResults: React.FC<Results> = ({ route }) => {
  const { search, name } = route.params;

  const resultProducts = useSelector(
    (state) => state.search.searchProductsResults
  );
  const resultStores = useSelector((state) => state.search.searchStoresResults);

  const loadRepositories: any = () => {
    if (name === "Produtos") {
      store.dispatch(searchProductsRequest(search));
    } else if (name === "Vendedores") {
      store.dispatch(searchStoresRequest(search));
    }
  };

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <Item>
      <Image
        source={{
          uri: item.image.url,
        }}
      />
      <Name>{item.name}</Name>
    </Item>
  );

  return (
    // <ContainerScroll refreshControl={<RefreshControl refreshing={false} />}>
    <Container>
      <FlatList
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingBottom: SPACE_SIX_DP,
        }}
        renderItem={renderItem}
        data={name === "Produtos" ? resultProducts : resultStores}
        keyExtractor={(item) => item.id}
        onEndReached={loadRepositories}
        onEndReachedThreshold={0.1}
      />
    </Container>
    // </ContainerScroll>
  );
};

export default SearchEspecifyResults;
