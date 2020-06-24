import React, { useState, useEffect } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useSelector } from "../../store/modules/rootReducer";

import { Container, Item, Image, Name } from "./styles";

import { categoriesRequest } from "../../store/modules/categories/actions";
import { store } from "../../store/index";
import { SPACE_SIX_DP } from "../../styles/sizes";

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

const Categories: React.FC<Results> = ({ route }) => {
  const { name, id } = route.params;
  const [actualCat, setActualCat] = useState([]);

  const categories = useSelector((state) => state.categories.categories);
  const [actualCategory, setActualCategory] = useState<
    | {
        id: string;
        name: string;
        image: {
          url: string;
        };
      }[]
    | []
  >([]);

  useEffect(() => {
    const resp = categories.find((item) => item.name === name);
    if (resp) {
      setActualCategory(resp.products);
    } else {
      setActualCategory([]);
    }
  }, [categories]);

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
        data={actualCategory}
        keyExtractor={(item) => item.id}
        onEndReached={loadRepositories}
        onEndReachedThreshold={0.1}
      />
    </Container>
    // </ContainerScroll>
  );
};

export default Categories;
