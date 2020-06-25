import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Item, Image, Name } from "./styles";

import { TopProduct } from "../../types";

type Lista = {
  item: TopProduct;
};

const ItemResult: React.FC<Lista> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Item onPress={() => navigation.navigate("Produto", { data: item })}>
      <Image
        source={{
          uri: item.image.url,
        }}
      />
      <Name>{item.name}</Name>
    </Item>
  );
};

export default ItemResult;
