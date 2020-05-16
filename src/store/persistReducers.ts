import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

const persistReducers: React.FC = (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "marketplace",
      storage: AsyncStorage,
      whitelist: ["auth"],
    },
    reducers
  );

  return persistedReducer;
};

export default persistReducers;
