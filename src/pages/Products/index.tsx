import React from "react";

import { ContainerScroll } from "../../styles/scrollView";
import Product from "../../Components/Products";

import { Container } from "./styles";

const Products: React.FC = () => {
  return (
    <ContainerScroll>
      <Container>
        <Product />
      </Container>
    </ContainerScroll>
  );
};

export default Products;
