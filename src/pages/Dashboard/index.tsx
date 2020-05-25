import React from "react";
import { RefreshControl } from "react-native";

import { ContainerScroll } from "../../styles/scrollView";
import SlideProducts from "../../Components/SlideProducts";
import GridProducts from "../../Components/GridProducts";

interface ProductsArray extends ObjectArray {
  title: string;
  price: number;
}

const ListElements1: Array<object> = [
  {
    title: "Gato 01",
  },
  {
    title: "Gato 02",
  },
  {
    title: "Gato 03",
  },
  {
    title: "Gato 04",
  },
  {
    title: "Gato 05",
  },
  {
    title: "Gato 06",
  },
];

const ListElements2: Array<object> = [
  {
    title: "Gato 01",
    price: 15.99,
  },
  {
    title: "Gato 02",
    price: 13.99,
  },
  {
    title: "Gato 03",
    price: 16.99,
  },
  {
    title: "Gato 04",
    price: 11.99,
  },
  {
    title: "Gato 05",
    price: 26.99,
  },
  {
    title: "Gato 06",
    price: 33.99,
  },
];

const Dashboard: React.FC = () => {
  return (
    <ContainerScroll refreshControl={<RefreshControl refreshing={false} />}>
      <SlideProducts
        title="Categorias"
        listElements={ListElements1}
        nItemsInScreen={4}
      />

      <GridProducts listElements={ListElements2} title="Mais Vendidos" />
    </ContainerScroll>
  );
};

export default Dashboard;
