import React from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { ContainerScroll } from "../../styles/scrollView";
import { Category, CategoriesContainer, CategoryText } from "./styles";
import { widthPercentageToDP } from "../../Components/PercentageConverter";

type CatProps = {
  navigation: any;
};

const Categories: React.FC<CatProps> = ({ navigation }) => {
  return (
    <ContainerScroll>
      {/* <Title>
				<TitleText>Todas as Categorias</TitleText>
			</Title> */}
      <CategoriesContainer>
        <Category onPress={() => navigation.navigate("Produtos")}>
          <Icon name="home" size={widthPercentageToDP("8%")} color="blue" />
          <CategoryText>Casa e Decoração</CategoryText>
        </Category>
        <Category>
          <Icon name="car" size={widthPercentageToDP("8%")} color="green" />
          <CategoryText>Automotivo</CategoryText>
        </Category>
        <Category>
          <Icon name="cat" size={widthPercentageToDP("8%")} color="red" />
          <CategoryText>Animais</CategoryText>
        </Category>
        <Category>
          <Icon name="home" size={widthPercentageToDP("8%")} color="blue" />
          <CategoryText>Casa e Decoração</CategoryText>
        </Category>
        <Category>
          <Icon name="car" size={widthPercentageToDP("8%")} color="green" />
          <CategoryText>Automotivo</CategoryText>
        </Category>
        <Category>
          <Icon name="cat" size={widthPercentageToDP("8%")} color="red" />
          <CategoryText>Animais</CategoryText>
        </Category>
        <Category>
          <Icon name="home" size={widthPercentageToDP("8%")} color="blue" />
          <CategoryText>Casa e Decoração</CategoryText>
        </Category>
        <Category>
          <Icon name="car" size={widthPercentageToDP("8%")} color="green" />
          <CategoryText>Automotivo</CategoryText>
        </Category>
        <Category>
          <Icon name="cat" size={widthPercentageToDP("8%")} color="red" />
          <CategoryText>Animais</CategoryText>
        </Category>
        <Category>
          <Icon name="home" size={widthPercentageToDP("8%")} color="blue" />
          <CategoryText>Casa e Decoração</CategoryText>
        </Category>
        <Category>
          <Icon name="car" size={widthPercentageToDP("8%")} color="green" />
          <CategoryText>Automotivo</CategoryText>
        </Category>
        <Category>
          <Icon name="cat" size={widthPercentageToDP("8%")} color="red" />
          <CategoryText>Animais</CategoryText>
        </Category>
        <Category>
          <Icon name="home" size={widthPercentageToDP("8%")} color="blue" />
          <CategoryText>Casa e Decoração</CategoryText>
        </Category>
        <Category>
          <Icon name="car" size={widthPercentageToDP("8%")} color="green" />
          <CategoryText>Automotivo</CategoryText>
        </Category>
        <Category>
          <Icon name="cat" size={widthPercentageToDP("8%")} color="red" />
          <CategoryText>Animais</CategoryText>
        </Category>
        <Category>
          <Icon name="home" size={widthPercentageToDP("8%")} color="blue" />
          <CategoryText>Casa e Decoração</CategoryText>
        </Category>
        <Category>
          <Icon name="car" size={widthPercentageToDP("8%")} color="green" />
          <CategoryText>Automotivo</CategoryText>
        </Category>
        <Category>
          <Icon name="cat" size={widthPercentageToDP("8%")} color="red" />
          <CategoryText>Animais</CategoryText>
        </Category>
      </CategoriesContainer>
    </ContainerScroll>
  );
};

export default Categories;
