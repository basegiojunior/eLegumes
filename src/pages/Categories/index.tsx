import React, { useState, useEffect } from "react";
import { FlatList, ListRenderItem, RefreshControl } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "~/store/modules/rootReducer";

import { Container, Item, Image, ImageEmpty, Name } from "./styles";

import { categoriesEspecifyRequest } from "~/store/modules/categories/actions";
import SIZES from "~/styles/sizes";

type Results = {
  categoryName: string;
  id: string;
  route: {
    params: {
      name: string;
      id: string;
    };
  };
};

const emptyCategory = {
  title: "",
  id: "",
  products: [
    {
      id: "",
      title: "",
      image: {
        url: "",
      },
    },
  ],
};

const Categories: React.FC<Results> = ({ route }) => {
  const { name, id } = route.params;
  const dispatch = useDispatch();

  const category = useSelector((state) => state.categories.category);
  const loadingCategory = useSelector(
    (state) => state.categories.loadingCategory
  );

  const loadRepositories: any = () => {
    dispatch(categoriesEspecifyRequest(id, name));
  };

  const resetRepository: Function = () => {
    dispatch(categoriesEspecifyRequest(id, name, 1));
  };

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <Item>
      {item.image.url ? (
        <Image
          source={{
            uri: item.image.url,
          }}
        />
      ) : (
        <ImageEmpty />
      )}
      <Name>{item.title}</Name>
    </Item>
  );

  return (
    // <ContainerScroll refreshControl={<RefreshControl refreshing={false} />}>
    <Container>
      <FlatList
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingBottom: SIZES.SPACE_SIX_DP,
        }}
        renderItem={renderItem}
        data={category.id === id ? category.products : emptyCategory.products}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            onRefresh={() => resetRepository()}
            refreshing={loadingCategory}
          />
        }
        onEndReached={loadRepositories}
        onEndReachedThreshold={0.1}
      />
    </Container>
    // </ContainerScroll>
  );
};

export default Categories;
