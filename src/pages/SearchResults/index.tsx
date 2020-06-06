import React from "react";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";

import { ContainerScroll } from "../../styles/scrollView";

import ItemResult from "../../Components/ItemResult";

import { Container, Button } from "./styles";

import { store } from "../../store/index";

const SearchResults: React.FC = () => {
  const navigation = useNavigation();

  const products = useSelector(
    (state) => state.search.searchProductsResults
  ).slice(0, 3);
  const companies = useSelector(
    (state) => state.search.searchCompaniesResults
  ).slice(0, 3);

  const search = useSelector((state) => state.search.recentSearchs)[0];

  return (
    <ContainerScroll refreshControl={<RefreshControl refreshing={false} />}>
      <Container>
        <ItemResult title="PRODUTOS" listItems={products} />
        <Button
          onPress={() => {
            navigation.navigate("ResultadosBuscaEspecificos", {
              name: "Produtos",
              search,
            });
          }}
          text="Ver Mais Produtos"
        />

        <ItemResult title="VENDEDORES" listItems={companies} />
        <Button
          onPress={() => {
            navigation.navigate("ResultadosBuscaEspecificos", {
              name: "Vendedores",
              search,
            });
          }}
          text="Ver Mais Vendedores"
        />
      </Container>
    </ContainerScroll>
  );
};

export default SearchResults;
