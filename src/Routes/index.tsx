import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import React from "react";

import { widthPercentageToDP } from "../Components/PercentageConverter";
import { FONT_REGULAR } from "../styles/fonts";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../styles/colors";

import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const styleBarTop: Record<string, string | Record<string, string>> = {
  headerStyle: { backgroundColor: SECONDARY_COLOR },
  headerTitleStyle: { fontFamily: FONT_REGULAR },
  headerTitleAlign: "center",
  headerTintColor: "#fff",
};

const DashboardStack = createStackNavigator();

const DashboardStackScreen: React.FC = () => {
  return (
    <DashboardStack.Navigator initialRouteName="Início">
      <DashboardStack.Screen
        name="Início"
        component={Dashboard}
        options={styleBarTop}
      />
    </DashboardStack.Navigator>
  );
};

const CategoriesStack = createStackNavigator();

const CategoriesStackScreen: React.FC = () => {
  return (
    <CategoriesStack.Navigator initialRouteName="Categorias">
      <CategoriesStack.Screen
        name="Categorias"
        component={Categories}
        options={styleBarTop}
      />
      <CategoriesStack.Screen
        name="Produtos"
        component={Products}
        options={styleBarTop}
      />
    </CategoriesStack.Navigator>
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
      initialRouteName="Início"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Início") {
            iconName = "home";
          } else if (route.name === "Sacola") {
            iconName = "shopping";
          } else if (route.name === "Minha Conta") {
            iconName = "account";
          } else if (route.name === "Categorias") {
            iconName = "format-list-bulleted-type";
          }

          // You can return any component that you like here!
          return (
            <Icon
              style={{
                paddingTop: widthPercentageToDP("2%"),
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
          paddingBottom: widthPercentageToDP("2%"),
          fontFamily: FONT_REGULAR,
        },
        style: {
          height: widthPercentageToDP("16%"),
        },
      }}
    >
      <Tab.Screen name="Início" component={DashboardStackScreen} />
      <Tab.Screen name="Categorias" component={CategoriesStackScreen} />
      <Tab.Screen name="Sacola" component={CartStackScreen} />
      <Tab.Screen name="Minha Conta" component={AccountStackScreen} />
    </Tab.Navigator>
  );
};

const LoginStack = createStackNavigator();

const LoginStackScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator initialRouteName="Route">
        <LoginStack.Screen
          name="Route"
          component={Routes}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="Entrar"
          component={SignIn}
          options={styleBarTop}
        />
        <LoginStack.Screen
          name="Cadastrar"
          component={SignUp}
          options={styleBarTop}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStackScreen;
