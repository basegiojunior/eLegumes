import React, { useEffect } from "react";
import { RefreshControl, Animated, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { ContainerScroll } from "../../styles/scrollView";
import SlideImages from "../../Components/SlideImages";
import GridImages from "../../Components/GridImages";
import SlidePartners from "../../Components/SlidePartners";

import { widthPercentageToDP } from "../../Components/PercentageConverter";

import {
  dashRequest,
  promoRequest,
} from "../../store/modules/dashboard/actions";
import { store } from "../../store/index";
import { SPACE_SIX_DP } from "../../styles/sizes";

import { Container, LinkContainerLine, ViewLinkLine, Title } from "./styles";

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
  const pageLoading = useSelector((state) => state.dash.pageLoading);
  const noPageLoading = useSelector((state) => state.dash.noPageLoading);

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

  const handleRequestPromotions: Function = () => {
    if (promotions.length > 10 || promotions.length === 0) {
      store.dispatch(promoRequest());
    }
  };

  const handleRefresh: Function = () => {
    store.dispatch(dashRequest());
    store.dispatch(promoRequest(1));
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
    // <Container>
    <FlatList
      contentContainerStyle={{
        backgroundColor: "#fff",
        width: "100%",
        paddingBottom: SPACE_SIX_DP,
        flexDirection: "column",
      }}
      refreshControl={
        <RefreshControl
          onRefresh={() => handleRefresh()}
          refreshing={pageLoading || noPageLoading}
        />
      }
      numColumns={2}
      renderItem={GridImages}
      data={promotions}
      keyExtractor={(item) => item.id}
      onEndReached={() => handleRequestPromotions()}
      onEndReachedThreshold={0.1}
      ListHeaderComponent={() => (
        <>
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

          <Title>OFERTAS</Title>

          <Container>
            {promotions.length === 0 && (
              <>
                <LinkContainerLine>
                  <ViewLinkLine last={false}>
                    <Animated.View
                      style={{
                        width: widthPercentageToDP("42%"),
                        height: widthPercentageToDP("25%"),
                        marginBottom: widthPercentageToDP("2%"),
                        borderRadius: widthPercentageToDP("2%"),
                        backgroundColor: color,
                      }}
                    />
                    <Animated.View
                      style={{
                        width: widthPercentageToDP("25%"),
                        height: widthPercentageToDP("4.5%"),
                        marginTop: widthPercentageToDP("2%"),
                        marginLeft: widthPercentageToDP("2%"),
                        borderRadius: widthPercentageToDP("2%"),
                        backgroundColor: color,
                      }}
                    />
                    <Animated.View
                      style={{
                        width: widthPercentageToDP("20%"),
                        height: widthPercentageToDP("3.4%"),
                        marginTop: widthPercentageToDP("2%"),
                        marginLeft: widthPercentageToDP("2%"),
                        borderRadius: widthPercentageToDP("2%"),
                        backgroundColor: color,
                      }}
                    />
                  </ViewLinkLine>
                </LinkContainerLine>
                <LinkContainerLine>
                  <ViewLinkLine last>
                    <Animated.View
                      style={{
                        width: widthPercentageToDP("42%"),
                        height: widthPercentageToDP("25%"),
                        marginBottom: widthPercentageToDP("2%"),
                        borderRadius: widthPercentageToDP("2%"),
                        backgroundColor: color,
                      }}
                    />
                    <Animated.View
                      style={{
                        width: widthPercentageToDP("25%"),
                        height: widthPercentageToDP("4.5%"),
                        marginTop: widthPercentageToDP("2%"),
                        marginLeft: widthPercentageToDP("2%"),
                        borderRadius: widthPercentageToDP("2%"),
                        backgroundColor: color,
                      }}
                    />
                    <Animated.View
                      style={{
                        width: widthPercentageToDP("20%"),
                        height: widthPercentageToDP("3.4%"),
                        marginTop: widthPercentageToDP("2%"),
                        marginLeft: widthPercentageToDP("2%"),
                        borderRadius: widthPercentageToDP("2%"),
                        backgroundColor: color,
                      }}
                    />
                  </ViewLinkLine>
                </LinkContainerLine>
              </>
            )}
          </Container>
        </>
      )}
    />

    // {/* <GridImages color={color} listElements={promotions} title="OFERTAS" /> */}
    // </Container>
  );
};

export default Dashboard;
