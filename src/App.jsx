import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      {selectedRecipe ? (
        <RecipePage
          selectedItem={selectedRecipe}
          clickFn={setSelectedRecipe}
        ></RecipePage>
      ) : (
        <>
          <RecipeListPage clickFn={setSelectedRecipe}></RecipeListPage>
        </>
      )}
    </>
  );
};
