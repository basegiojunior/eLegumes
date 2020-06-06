import React, { useEffect } from "react";
import { RefreshControl, Animated, Easing } from "react-native";
import { useSelector } from "react-redux";

import { ContainerScroll } from "../../styles/scrollView";
import SlideImages from "../../Components/SlideImages";
import GridImages from "../../Components/GridImages";
import SlidePartners from "../../Components/SlidePartners";

import {
  dashRequest,
  promoRequest,
} from "../../store/modules/dashboard/actions";
import { store } from "../../store/index";

const Dashboard: React.FC = () => {
  // eslint-disable-next-line no-var
  var x = new Animated.Value(0);

  const color = x.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [
      "rgba(0, 0, 0, .07)",
      "rgba(0, 0, 0, .25)",
      "rgba(0, 0, 0, .07)",
    ],
  });

  const newCompanies = useSelector((state) => state.dash.newCompanies);
  const topProducts = useSelector((state) => state.dash.topProducts);
  const promotions = useSelector((state) => state.dash.promotions);

  // const newCompanies = [];
  // const topProducts = [];
  // const promotions = [];

  useEffect(() => {
    Animated.loop(
      Animated.timing(x, {
        toValue: 180,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const handleRequest: Function = () => {
    store.dispatch(dashRequest());
    store.dispatch(promoRequest());
  };

  useEffect(() => {
    if (newCompanies === [] || topProducts === []) {
      store.dispatch(dashRequest());
    }
    if (promotions === []) {
      store.dispatch(promoRequest());
    }
  }, []);

  return (
    <ContainerScroll
      refreshControl={
        <RefreshControl onRefresh={() => handleRequest()} refreshing={false} />
      }
    >
      <SlidePartners
        color={color}
        title="NOVOS PARCEIROS"
        listElements={newCompanies}
      />

      <SlideImages
        color={color}
        title="MAIS COMPRADOS"
        listElements={topProducts}
        nItemsInScreen={1}
      />

      <GridImages color={color} listElements={promotions} title="OFERTAS" />
    </ContainerScroll>
  );
};

export default Dashboard;
