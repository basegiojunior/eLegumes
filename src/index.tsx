import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";

import Loading from "./Components/Loading";
import "./config/ReactotronConfig";
import { persistor, store } from "./store";

import App from "./App";

const Index: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={<Loading visible />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default Index;
