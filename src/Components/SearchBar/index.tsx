import React, { useState, useRef } from "react";
import { TextInput } from "react-native";

import { Input, Container, Icone, ButtonSearch } from "./styles";
import { widthPercentageToDP } from "../PercentageConverter";

const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <Container>
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? "Insira um termo de busca" : "Busca"}
        placeholderTextColor={isFocused ? "#969D95" : "#242A22"}
        ref={inputRef}
      />

      <ButtonSearch onPress={() => inputRef.current?.focus()}>
        <Icone name="magnify" size={widthPercentageToDP("8%")} color="#555" />
      </ButtonSearch>
    </Container>
  );
};

export default SearchBar;
