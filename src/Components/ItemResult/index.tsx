import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Item, Image, ImageEmpty, Name } from "./styles";

import { ItemResultType } from "~/types";

type Lista = {
  item: ItemResultType;
  pageTo?: string;
};

const ItemResult: React.FC<Lista> = ({ item, pageTo = "Produto" }) => {
  const navigation = useNavigation();

  return (
    <Item onPress={() => navigation.navigate(pageTo, { ...item })}>
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
};

export default ItemResult;
