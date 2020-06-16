import React from "react";
import { useNavigation } from "@react-navigation/native";

import Title from "../Title";

import { Item, Image, Name } from "./styles";

type Lista = {
  item: object;
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
