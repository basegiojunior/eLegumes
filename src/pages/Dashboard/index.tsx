import React, { useEffect } from "react";
import { RefreshControl, Animated, FlatList } from "react-native";
import { useSelector } from "react-redux";

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
  // var x = new Animated.Value(0);

  const color = "rgba(0,0,0,.1)";
  // const color = x.interpolate({
  //   inputRange: [0, 90, 180],
  //   outputRange: [
  //     "rgba(0, 0, 0, .07)",
  //     "rgba(0, 0, 0, .25)",
  //     "rgba(0, 0, 0, .07)",
  //   ],
  // });

  const newCompanies = useSelector((state) => state.dash.newCompanies);
  const topProducts = useSelector((state) => state.dash.topProducts);
  const promotions = useSelector((state) => state.dash.promotions);
  const pageLoading = useSelector((state) => state.dash.pageLoading);
  const noPageLoading = useSelector((state) => state.dash.noPageLoading);

  useEffect(() => {
    console.log("promotions");
    if (newCompanies === [] || topProducts === []) {
      store.dispatch(dashRequest());
    }
    if (promotions === []) {
      store.dispatch(promoRequest());
    }
  }, []);

  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(x, {
  //       toValue: 180,
  //       duration: 3000,
  //       useNativeDriver: false,
  //     })
  //   ).start();
  // }, []);

  const handleRequestPromotions: Function = () => {
    if (promotions.length >= 4 || promotions.length === 0) {
      store.dispatch(promoRequest());
    }
  };

  const handleRefresh: Function = () => {
    store.dispatch(dashRequest());
    store.dispatch(promoRequest(1));
  };

  const headerComponent = () => {
    return (
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

        {promotions.length === 0 && (
          <Container>
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
          </Container>
        )}
      </>
    );
  };

  return (
    // <Container>
    <>
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
        ListHeaderComponent={headerComponent}
      />

      {/* // <GridImages color={color} listElements={promotions} title="OFERTAS" />
    // </Container> */}
    </>
  );
};

export default Dashboard;
