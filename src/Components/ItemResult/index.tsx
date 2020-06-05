import React from "react";

import Title from "../Title";

import { Item, Image, Name } from "./styles";

type Lista = {
  listItems: object[];
  title?: string;
};

const ItemResult: React.FC<Lista> = ({ listItems, title }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      {listItems.map((item) => (
        <Item key={item.id}>
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
