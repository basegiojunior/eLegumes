/* eslint-disable global-require */
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
// import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";
import * as Font from "expo-font";

import Index from "./src";
import Loading from "~/Components/Loading";

const App: React.FC = () => {
  // const [fontsLoaded] = Font.useFonts({
  //   "Inter-SemiBold": require("./src/assets/fonts/Inter/Inter-SemiBold.ttf"),
  //   "Inter-Bold": require("./src/assets/fonts/Inter/Inter-Bold.ttf"),
  //   "Inter-Regular": require("./src/assets/fonts/Inter/Inter-Regular.ttf"),
  //   Icomoon: require("./src/assets/fonts/icons/fonts/icomoon.ttf"),
  // });

  const [fontsLoaded, setFontsLoaded] = useState(false);

  // const loadAsync: any = async () => {
  //   await Font.loadAsync({
  //     "Inter-SemiBold": require("./src/assets/fonts/Inter/Inter-SemiBold.ttf"),
  //     "Inter-Bold": require("./src/assets/fonts/Inter/Inter-Bold.ttf"),
  //     "Inter-Regular": require("./src/assets/fonts/Inter/Inter-Regular.ttf"),
  //     Icomoon: require("./src/assets/fonts/icons/fonts/icomoon.ttf"),
  //   });
  //   setLoaded(true);
  // };

  // useEffect(() => {
  //   loadAsync();
  // }, []);

  // const [fontsLoaded, setFontsLoaded] = useState(true);
  const customFonts = {
    "Inter-SemiBold": require("./src/assets/fonts/Inter/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./src/assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-Regular": require("./src/assets/fonts/Inter/Inter-Regular.ttf"),
    Icomoon: require("./src/assets/fonts/icons/fonts/icomoon.ttf"),
  };

  useEffect(() => {
    Font.loadAsync(customFonts)
      .then(() => {
        setFontsLoaded(true);
      })
      .catch(() => {
        setFontsLoaded(false);
      });
  }, [customFonts]);

  return fontsLoaded ? <Index /> : null;
};

export default App;
