import React from "react";

import { StackNavigationOptions } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { SPACE_FOR_DP, SPACE_EIGHT_DP } from "../styles/sizes";
import { FONT_BOLD } from "../styles/fonts";
import SearchBar from "../Components/SearchBar";
import { widthPercentageToDP } from "../Components/PercentageConverter";

export const styleBarTop = {
  headerStyle: { backgroundColor: "#fff" },
  headerTitle: "eLegumes",
  headerTitleContainerStyle: { left: 0 },
  headerTitleStyle: {
    color: "#242A22",
    fontSize: widthPercentageToDP("5.5%"),
    marginLeft: SPACE_FOR_DP,
    fontFamily: FONT_BOLD,
  },
  headerTintColor: "#fff",
};

export const styleBarTopBusca = {
  headerStyle: { backgroundColor: "#fff" },

  headerTitleContainerStyle: {
    right: 0,
    left: 0,
    marginLeft: SPACE_FOR_DP,
  },
  headerTitle: () => <SearchBar />,

  headerLeft: () => null,
  headerTintColor: "#fff",
};

export const styleBarTransparent = (
  ButtonLeft: Function,
  ButtonRight: Function
): StackNavigationOptions => {
  return {
    ...styleBarTop,
    headerTransparent: true,
    headerTitle: "",
    headerTitleContainerStyle: {
      right: 0,
      left: 0,
      marginLeft: widthPercentageToDP("12%"),
    },
    headerRight: () => (
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(0,0,0,.4)",
          marginRight: SPACE_FOR_DP,
          width: widthPercentageToDP("10%"),
          height: widthPercentageToDP("10%"),
          borderRadius: widthPercentageToDP("5%"),
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => ButtonRight()}
      >
        <Icon name="share" size={SPACE_EIGHT_DP} color="#fff" />
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(0,0,0,.4)",
          marginLeft: SPACE_FOR_DP,
          width: widthPercentageToDP("10%"),
          height: widthPercentageToDP("10%"),
          borderRadius: widthPercentageToDP("5%"),
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => ButtonLeft()}
      >
        <Icon name="arrow-left" size={SPACE_EIGHT_DP} color="#fff" />
      </TouchableOpacity>
    ),
  };
};

export const styleBarOnlyBack = (
  ButtonLeft: Function
): StackNavigationOptions => {
  return {
    ...styleBarTop,
    headerTitleContainerStyle: {
      right: 0,
      left: 0,
      marginLeft: widthPercentageToDP("12%"),
    },
    headerLeft: () => (
      <TouchableOpacity onPress={() => ButtonLeft()}>
        <Icon
          name="arrow-left"
          style={{ marginLeft: SPACE_FOR_DP }}
          size={SPACE_EIGHT_DP}
          color="#555"
        />
      </TouchableOpacity>
    ),
  };
};

export const styleBarCategory = (
  ButtonLeft: Function,
  title: string
): StackNavigationOptions => {
  return {
    ...styleBarTop,
    headerTitle: title,
    headerTitleContainerStyle: {
      right: 0,
      left: 0,
      marginLeft: widthPercentageToDP("12%"),
    },
    headerLeft: () => (
      <TouchableOpacity onPress={() => ButtonLeft()}>
        <Icon
          name="arrow-left"
          style={{ marginLeft: SPACE_FOR_DP }}
          size={SPACE_EIGHT_DP}
          color="#555"
        />
      </TouchableOpacity>
    ),
  };
};

export const styleBarTopBuscaSecond = (
  ButtonLeft: Function,
  showRecent: string
): StackNavigationOptions => {
  return {
    ...styleBarTopBusca,
    headerTitleContainerStyle: {
      right: 0,
      left: 0,
      marginLeft: widthPercentageToDP("16%"),
    },
    headerTitle: () => <SearchBar showRecent={showRecent} />,
    headerLeft: () => (
      <TouchableOpacity onPress={() => ButtonLeft()}>
        <Icon
          name="arrow-left"
          style={{ marginLeft: SPACE_FOR_DP }}
          size={SPACE_EIGHT_DP}
          color="#555"
        />
      </TouchableOpacity>
    ),
  };
};