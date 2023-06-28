import { SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <>
      <SimpleGrid
        minChildWidth={400}
        gap={4}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        {recipes.map((recipeItem) => (
          <RecipeCard
            key={recipeItem.recipe.label}
            recipe={recipeItem.recipe}
            clickFn={clickFn}
          ></RecipeCard>
        ))}
      </SimpleGrid>
    </>
  );
};
