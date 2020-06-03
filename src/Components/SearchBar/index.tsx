import React, { useState, useRef } from "react";
import { TextInput } from "react-native";

import { Input, Container, Icone, ButtonSearch } from "./styles";
import { widthPercentageToDP } from "../PercentageConverter";

import { searchRequest } from "../../store/modules/search/actions";
import { store } from "../../store/index";

const SearchBar: React.FC = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleSubmit: Function = () => {
    store.dispatch(searchRequest(searchValue));
  };

  return (
    <Container>
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? "Insira um termo de busca" : "Busca"}
        placeholderTextColor={isFocused ? "#969D95" : "#242A22"}
        onChangeText={(text: string) => setSearchValue(text)}
        returnKeyType="send"
        onSubmitEditing={() => {
          handleSubmit();
        }}
        ref={inputRef}
      />

      <ButtonSearch
        onPress={() => {
          if (searchValue !== "") {
            handleSubmit();
          } else {
            inputRef.current?.focus();
          }
        }}
      >
        <Icone name="magnify" size={widthPercentageToDP("8%")} color="#555" />
      </ButtonSearch>
    </Container>
  );
};

export default SearchBar;
