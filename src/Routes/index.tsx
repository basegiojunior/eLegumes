import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { navigationRef } from "./navigationService";

import { widthPercentageToDP } from "../Components/PercentageConverter";
import SearchBar from "../Components/SearchBar";

import { FONT_REGULAR, FONT_BOLD } from "../styles/fonts";
import { PRIMARY_COLOR } from "../styles/colors";
import { SPACE_FOR_DP, SPACE_EIGHT_DP, SPACE_TWO_DP } from "../styles/sizes";

import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import Search from "../pages/Search";
import SearchResults from "../pages/SearchResults";
import SearchEspecifyResults from "../pages/SearchEspecifyResults";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Categories from "../pages/Categories";

const styleBarTop: StackNavigationOptions = {
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

const styleBarTopBusca: StackNavigationOptions = {
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

const DashboardStack = createStackNavigator();

const DashboardStackScreen: React.FC = () => {
  return (
    <DashboardStack.Navigator initialRouteName="Produtos">
      <DashboardStack.Screen
        name="Produtos"
        component={Dashboard}
        options={styleBarTop}
      />
    </DashboardStack.Navigator>
  );
};

const SearchStack = createStackNavigator();

const SearchStackScreen: React.FC = () => {
  return (
    <SearchStack.Navigator initialRouteName="Busca">
      <SearchStack.Screen
        name="Busca"
        component={Search}
        options={styleBarTopBusca}
      />
      <SearchStack.Screen
        name="ResultadosBusca"
        component={SearchResults}
        options={({ route, navigation }) => {
          return {
            ...styleBarTopBusca,
            headerTitleContainerStyle: {
              right: 0,
              left: 0,
              marginLeft: widthPercentageToDP("16%"),
            },
            headerTitle: () => (
              <SearchBar showRecent={`"${route.params.search}"`} />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  style={{ marginLeft: SPACE_FOR_DP }}
                  size={SPACE_EIGHT_DP}
                  color="#555"
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <SearchStack.Screen
        name="ResultadosBuscaEspecificos"
        component={SearchEspecifyResults}
        options={({ route, navigation }) => {
          return {
            ...styleBarTopBusca,
            headerTitleContainerStyle: {
              right: 0,
              left: 0,
              marginLeft: widthPercentageToDP("16%"),
            },
            headerTitle: () => (
              <SearchBar
                showRecent={`${route.params.name} com "${route.params.search}"`}
              />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  style={{ marginLeft: SPACE_FOR_DP }}
                  size={SPACE_EIGHT_DP}
                  color="#555"
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <SearchStack.Screen
        name="Categoria"
        component={Categories}
        options={({ route, navigation }) => {
          return {
            ...styleBarTop,
            headerTitle: route.params.name,
            headerTitleContainerStyle: {
              right: 0,
              left: 0,
              marginLeft: widthPercentageToDP("12%"),
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  style={{ marginLeft: SPACE_FOR_DP }}
                  size={SPACE_EIGHT_DP}
                  color="#555"
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </SearchStack.Navigator>
  );
};

const AccountStack = createStackNavigator();

const AccountStackScreen: React.FC = () => {
  return (
    <AccountStack.Navigator initialRouteName="Minha Conta">
      <AccountStack.Screen
        name="Minha Conta"
        component={Account}
        options={styleBarTop}
      />
      <AccountStack.Screen
        name="Entrar"
        component={SignIn}
        options={({ navigation }) => {
          return {
            ...styleBarTop,
            headerTitleContainerStyle: {
              right: 0,
              left: 0,
              marginLeft: widthPercentageToDP("12%"),
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  style={{ marginLeft: SPACE_FOR_DP }}
                  size={SPACE_EIGHT_DP}
                  color="#555"
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <AccountStack.Screen
        name="Cadastrar"
        component={SignUp}
        options={({ navigation }) => {
          return {
            ...styleBarTop,
            headerTitleContainerStyle: {
              right: 0,
              left: 0,
              marginLeft: widthPercentageToDP("12%"),
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  style={{ marginLeft: SPACE_FOR_DP }}
                  size={SPACE_EIGHT_DP}
                  color="#555"
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </AccountStack.Navigator>
  );
};

const CartStack = createStackNavigator();

const CartStackScreen: React.FC = () => {
  return (
    <CartStack.Navigator initialRouteName="Sacola">
      <CartStack.Screen name="Sacola" component={Cart} options={styleBarTop} />
    </CartStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Produtos"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Produtos") {
            iconName = "home";
          } else if (route.name === "Sacola") {
            iconName = "shopping";
          } else if (route.name === "Minha Conta") {
            iconName = "account";
          } else if (route.name === "Busca") {
            iconName = "format-list-bulleted-type";
          }

          // You can return any component that you like here!
          return (
            <Icon
              style={{
                paddingTop: SPACE_TWO_DP,
              }}
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: "gray",
        labelStyle: {
          paddingBottom: SPACE_TWO_DP,
          fontFamily: FONT_REGULAR,
        },
        style: {
          height: widthPercentageToDP("16%"),
        },
      }}
    >
      <Tab.Screen name="Produtos" component={DashboardStackScreen} />
      <Tab.Screen name="Busca" component={SearchStackScreen} />
      <Tab.Screen name="Sacola" component={CartStackScreen} />
      <Tab.Screen name="Minha Conta" component={AccountStackScreen} />
    </Tab.Navigator>
  );
};

const LoginStack = createStackNavigator();

const LoginStackScreen: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <LoginStack.Navigator initialRouteName="Route">
        <LoginStack.Screen
          name="Route"
          component={Routes}
          options={{ headerShown: false }}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStackScreen;
