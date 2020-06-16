import React from "react";
import { useNavigation } from "@react-navigation/native";

import Title from "../Title";

import { Item, Image, Name } from "./styles";

type Lista = {
  listItems: object[];
  title?: string;
};

const ItemResult: React.FC<Lista> = ({ listItems, title }) => {
  const navigation = useNavigation();

  return (
    <>
      {title && <Title>{title}</Title>}
      {listItems.map((item) => (
        <Item
          onPress={() => navigation.navigate("Produto", { data: item })}
          key={item.id}
        >
          <Image
            source={{
              uri: item.image.url,
            }}
          />
          <Name>{item.name}</Name>
        </Item>
      ))}
    </>
  );
};

export default ItemResult;
