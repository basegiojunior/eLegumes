import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import React from "react";

import { navigationRef } from "./navigationService";

import { widthPercentageToDP } from "~/Components/PercentageConverter";

import { FONT_REGULAR } from "~/styles/fonts";
import { PRIMARY_COLOR } from "~/styles/colors";
import { SPACE_TWO_DP } from "~/styles/sizes";

import Dashboard from "~/pages/Dashboard";
import Account from "~/pages/Account";
import Cart from "~/pages/Cart";
import Search from "~/pages/Search";
import SearchResults from "~/pages/SearchResults";
import SearchEspecifyResults from "~/pages/SearchEspecifyResults";
import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Categories from "~/pages/Categories";
import Companies from "~/pages/Companies";
import Products from "~/pages/Products";

import {
  styleBarTop,
  styleBarTopBusca,
  styleBarTopBuscaSecond,
  styleBarCategory,
  styleBarOnlyBack,
  styleBarOnlyBackTransparent,
  styleBarTransparent,
  styleBarAcc,
  styleBarTopCart,
} from "./styles";

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
          return styleBarTopBuscaSecond(
            () => navigation.goBack(),
            `"${route.params.search}"`
          );
        }}
      />
      <SearchStack.Screen
        name="ResultadosBuscaEspecificos"
        component={SearchEspecifyResults}
        options={({ route, navigation }) => {
          return styleBarTopBuscaSecond(
            () => navigation.goBack(),
            `${route.params.name} com "${route.params.search}"`
          );
        }}
      />
      <SearchStack.Screen
        name="Categoria"
        component={Categories}
        options={({ route, navigation }) => {
          return styleBarCategory(() => navigation.goBack(), route.params.name);
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
        options={() => {
          return styleBarAcc();
        }}
      />
      <AccountStack.Screen
        name="Entrar"
        component={SignIn}
        options={({ navigation }) => {
          return styleBarOnlyBackTransparent(
            () => navigation.goBack(),
            "Entrar"
          );
        }}
      />
      <AccountStack.Screen
        name="Cadastrar"
        component={SignUp}
        options={({ navigation }) => {
          return styleBarOnlyBackTransparent(
            () => navigation.goBack(),
            "Cadastro"
          );
        }}
      />
    </AccountStack.Navigator>
  );
};

const CartStack = createStackNavigator();

const CartStackScreen: React.FC = () => {
  return (
    <CartStack.Navigator initialRouteName="Sacola">
      <CartStack.Screen
        name="Sacola"
        component={Cart}
        options={({ navigation }) => {
          return styleBarTopCart(() => navigation.goBack());
        }}
      />
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

        <LoginStack.Screen
          name="Companie"
          component={Companies}
          options={({ navigation }) => {
            return styleBarTransparent(
              () => navigation.goBack(),
              () => navigation.goBack()
            );
          }}
        />
        <LoginStack.Screen
          name="Produto"
          component={Products}
          options={({ navigation }) => {
            return styleBarTransparent(
              () => navigation.goBack(),
              () => navigation.goBack()
            );
          }}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStackScreen;
