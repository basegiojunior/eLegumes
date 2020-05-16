/* eslint-disable global-require */
import React from "react";
// import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";

import Index from "./src";
import Loading from "./src/Components/Loading";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Jost-Bold": require("./src/assets/fonts/Jost/Jost-Bold.ttf"),
    "Jost-Regular": require("./src/assets/fonts/Jost/Jost-Regular.ttf"),
    "Jost-Italic": require("./src/assets/fonts/Jost/Jost-Italic.ttf"),
    "Jost-BoldItalic": require("./src/assets/fonts/Jost/Jost-BoldItalic.ttf"),
    // "RobotoCondensed-Regular": require("./src/assets/fonts/Roboto-Condensed/RobotoCondensed-Regular.ttf"),
    // "RobotoCondensed-Bold": require("./src/assets/fonts/Roboto-Condensed/RobotoCondensed-Bold.ttf"),
    // "RobotoCondensed-BoldItalic": require("./src/assets/fonts/Roboto-Condensed/RobotoCondensed-BoldItalic.ttf"),
    // "RobotoCondensed-Italic": require("./src/assets/fonts/Roboto-Condensed/RobotoCondensed-Italic.ttf"),
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

  return fontsLoaded ? <Index /> : <Loading />;
};

export default App;
