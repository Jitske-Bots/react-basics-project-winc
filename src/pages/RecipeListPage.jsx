import { RecipeSearch } from "../components/ui/RecipeSearch";
import { Text } from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <>
      <Text
        fontSize={["2xl", "4xl", "5xl"]}
        margin="auto"
        w={["300px", "400px", "500px"]}
        marginTop={2}
        bg="blue.100"
        borderRadius={15}
        padding={4}
        boxShadow="base"
        color="gray.600"
        textAlign="center"
      >
        Winc Recipe Checker
      </Text>
      <RecipeSearch clickFn={clickFn}></RecipeSearch>
    </>
  );
};
