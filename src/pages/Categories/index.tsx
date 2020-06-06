import React, { useEffect, useState } from "react";
import { RefreshControl, FlatList, ListRenderItem } from "react-native";
import { useSelector } from "react-redux";

import { ContainerScroll } from "../../styles/scrollView";

import ItemResult from "../../Components/ItemResult";

import { Container, Item, Image, Name } from "./styles";

import { categoriesRequest } from "../../store/modules/categories/actions";
import { store } from "../../store/index";
import { SPACE_SIX_DP } from "../../styles/sizes";

type Results = {
  categoryName: string;
  id: string;
  route: object;
};

const Categories: React.FC<Results> = ({ route }) => {
  const { name, id } = route.params;
  const [actualCat, setActualCat] = useState([]);

  const categories = useSelector((state) => state.categories.categories);

  // useEffect(() => {
  //   for (let i = 0; i < categories.length; i += 1) {
  //     if (categories[i].name === name) {
  //       setActualCat(categories[i].products);
  //     }
  //   }
  // }, [categories]);

  const loadRepositories: any = () => {
    store.dispatch(categoriesRequest(id, name));
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
        data={categories[name].products}
        keyExtractor={(item) => item.id}
        onEndReached={loadRepositories}
        onEndReachedThreshold={0.1}
      />
    </Container>
    // </ContainerScroll>
  );
};

export default Categories;
