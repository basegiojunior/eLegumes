import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";
import { TouchableOpacity, RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { useSelector } from "~/store/modules/rootReducer";

import SearchBar from "~/Components/SearchBar";
import { widthPercentageToDP } from "~/Components/PercentageConverter";

import { TEXT_PRIMARY, TEXT_SECONDARY, SECONDARY_COLOR } from "~/styles/colors";
import { SPACE_FOR_DP, SPACE_EIGHT_DP } from "~/styles/sizes";
import { FONT_BOLD } from "~/styles/fonts";

import { deleteCompanie } from "~/store/modules/cart/actions";

export const DeleteButton: React.FC = () => {
  const dispatch = useDispatch();

  const isSelected = useSelector((state) => state.cart.companieSelected);

  return (
    <RectButton
      rippleColor="rgba(0,0,0,0.1)"
      style={{
        backgroundColor: "transparent",
        marginRight: SPACE_FOR_DP,
        width: widthPercentageToDP("10%"),
        height: widthPercentageToDP("10%"),
        borderRadius: widthPercentageToDP("1.5%"),
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => dispatch(deleteCompanie())}
    >
      <Icon
        name="delete"
        size={SPACE_EIGHT_DP}
        color={isSelected.id !== "" ? TEXT_PRIMARY : TEXT_SECONDARY}
      />
    </RectButton>
  );
};

export const EditButton: React.FC = () => {
  const isSigned = useSelector((state) => state.auth.signed);

  if (isSigned) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "transparent",
          marginRight: SPACE_FOR_DP,
          width: widthPercentageToDP("10%"),
          height: widthPercentageToDP("10%"),
          borderRadius: widthPercentageToDP("5%"),
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => null}
      >
        <Icon name="pen" size={SPACE_EIGHT_DP} color="#fff" />
      </TouchableOpacity>
    );
  }
  return <View />;
};

export const styleBarTop = {
  headerTitle: "eLegumes",
  headerTitleContainerStyle: { left: 0 },
  headerTitleStyle: {
    fontSize: widthPercentageToDP("5.5%"),
    color: "#242A22",
    marginLeft: SPACE_FOR_DP,
    fontFamily: FONT_BOLD,
  },
  headerTintColor: "#fff",
};

export const styleBarTopCart = (
  ButtonRight: Function
): StackNavigationOptions => {
  return {
    headerStyle: { backgroundColor: "#fff" },
    headerTitle: "Sacola",
    headerTitleContainerStyle: { left: 0 },
    headerTitleStyle: {
      color: "#242A22",
      fontSize: widthPercentageToDP("5.5%"),
      marginLeft: SPACE_FOR_DP,
      fontFamily: FONT_BOLD,
    },
    headerTintColor: "#fff",
    headerRight: () => <DeleteButton />,
  };
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

export const styleBarAcc = (): StackNavigationOptions => {
  return {
    ...styleBarTop,
    headerStyle: { backgroundColor: SECONDARY_COLOR, elevation: 0 },
    headerTitle: "Perfil",
    headerTitleContainerStyle: {
      right: 0,
      left: 0,
    },
    headerTitleStyle: {
      fontSize: widthPercentageToDP("5.5%"),
      color: "#fff",
      marginLeft: SPACE_FOR_DP,
      fontFamily: FONT_BOLD,
    },
    headerRight: () => <EditButton />,
  };
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

export const styleBarAccSign = (
  ButtonLeft: Function,
  title: string
): StackNavigationOptions => {
  return {
    ...styleBarTop,
    headerStyle: { backgroundColor: SECONDARY_COLOR, elevation: 0 },
    headerTitle: title,
    headerTitleStyle: {
      fontSize: widthPercentageToDP("5.5%"),
      color: "#fff",
      marginLeft: SPACE_FOR_DP,
      fontFamily: FONT_BOLD,
    },
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
          color="#fff"
        />
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
