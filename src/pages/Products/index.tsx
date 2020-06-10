import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ContainerScroll } from "../../styles/scrollView";
import Title from "../../Components/Title";

import {
  companieProductsRequest,
  companieRequest,
  companieCommentsRequest,
} from "../../store/modules/companies/actions";
import { store } from "../../store";

import profile from "../../assets/product.jpg";

import { Container, ImageCompanie, CompanieName } from "./styles";

import { widthPercentageToDP } from "../../Components/PercentageConverter";

const Products: React.FC = ({ route }) => {
  const { data } = route.params;

  return (
    <ContainerScroll>
      <ImageCompanie
        source={{
          uri: data.image ? data.image.url : data.productDefault.image.url,
        }}
      />
      <Container>
        <CompanieName>{data.name}</CompanieName>
      </Container>

      <Title
        style={{
          alignSelf: "flex-start",
          marginLeft: widthPercentageToDP("6%"),
        }}
      >
        QUEM VENDE ESSE PRODUTO
      </Title>
    </ContainerScroll>
  );
};

export default Products;
