import React, { useEffect, useState } from "react";
import { RefreshControl, FlatList, ListRenderItem } from "react-native";
import { useSelector } from "react-redux";

import { ContainerScroll } from "../../styles/scrollView";

import ItemResult from "../../Components/ItemResult";

import { SPACE_SIX_DP } from "../../styles/sizes";

import { Container, Item, Image, Name } from "./styles";

import {
  searchProductsRequest,
  searchCompaniesRequest,
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
  const loading = useSelector((state) => state.search.searchLoadingEspecify);

  const loadRepositories: any = () => {
    if (name === "Produtos" && resultProducts.length > 10) {
      store.dispatch(searchProductsRequest(search));
    } else if (name === "Vendedores" && resultStores.length > 10) {
      store.dispatch(searchCompaniesRequest(search));
    }
  };

  const handleRefresh: any = () => {
    if (name === "Produtos") {
      store.dispatch(searchProductsRequest(search, 1));
    } else if (name === "Vendedores") {
      store.dispatch(searchCompaniesRequest(search, 1));
    }
  };

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <ItemResult item={item} />
  );

  return (
    // <ContainerScroll refreshControl={<RefreshControl refreshing={false} />}>
    <Container>
      <FlatList
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingBottom: SPACE_SIX_DP,
        }}
        refreshControl={
          <RefreshControl
            onRefresh={() => handleRefresh()}
            refreshing={loading}
          />
        }
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
