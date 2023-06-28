import { useState } from "react";
import { data } from "../../utils/data";
import { TextInput } from "./TextInput";
import { Text } from "@chakra-ui/react";
import { RecipeList } from "./RecipeList";
import { Flex } from "@chakra-ui/react";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => setSearchField(event.target.value);

  const matchedRecipes = data.hits.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <>
      <Flex flexDirection="column">
        <Text margin="auto" padding={3}>
          Search for a recipe
        </Text>
        <TextInput changeFn={handleChange} w={200} mb={8}></TextInput>
        <Text margin="auto">{searchField}</Text>
        <RecipeList recipes={matchedRecipes} clickFn={clickFn}></RecipeList>
      </Flex>
    </>
  );
};
