/* eslint-disable global-require */
import React from "react";
// import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";

import Index from "./src";
import Loading from "./src/Components/Loading";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./src/assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-Regular": require("./src/assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./src/assets/fonts/Inter/Inter-SemiBold.ttf"),
    Icomoon: require("./src/assets/fonts/icons/fonts/icomoon.ttf"),
  });

  // const [fontsLoaded, setFontsLoaded] = useState(true);
  // const customFonts = {
  //   "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  //   "Roboto-Italic": require("./src/assets/fonts/Roboto-Italic.ttf"),
  //   "Roboto-BoldItalic": require("./src/assets/fonts/Roboto-BoldItalic.ttf"),
  //   "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  // };

  // useEffect(() => {
  //   Font.loadAsync(customFonts)
  //     .then(() => {
  //       setFontsLoaded(true);
  //     })
  //     .catch(() => {
  //       setFontsLoaded(false);
  //     });
  // }, [customFonts]);

  return fontsLoaded ? <Index /> : <Loading visible />;
};

export default App;
