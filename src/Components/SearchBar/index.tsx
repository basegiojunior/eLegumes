import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "react-native";

import { Input, Container, Icone, ButtonSearch } from "./styles";
import { widthPercentageToDP } from "../PercentageConverter";

import { searchRequest } from "../../store/modules/search/actions";
import { store } from "../../store/index";

type SearchType = {
  showRecent?: string;
};

const SearchBar: React.FC<SearchType> = ({ showRecent }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [placeholder, setPlaceholder] = useState(
    isFocused ? "Insira um termo de busca" : showRecent || "Busca"
  );

  const inputRef = useRef<TextInput>(null);
  const handleSubmit: Function = () => {
    store.dispatch(searchRequest(searchValue.trim()));
  };

  useEffect(() => {
    if (isFocused) {
      setPlaceholder("Insira um termo de busca");
    } else if (showRecent) {
      setPlaceholder(showRecent);
    } else {
      setPlaceholder("Busca");
    }
  }, [isFocused, showRecent]);

  return (
    <Container>
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
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
          if (searchValue !== "" && isFocused) {
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
