import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Nutrients } from "../components/ui/Nutrients";
import { ChevronLeftButton } from "../components/ui/ChevronLeftButton";
import { LabelTag } from "../components/ui/LabelTag";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

export const RecipePage = ({ selectedItem, clickFn }) => {
  return (
    <>
      <Box w={["90%", "90%", "80%"]} margin={"auto"} bg="gray.100">
        <ChevronLeftButton clickFn={clickFn}></ChevronLeftButton>
        <Image
          w="100%"
          h={300}
          objectFit="cover"
          borderRadius={15}
          src={selectedItem.image}
        ></Image>
        <Flex flexDirection={["column", "row", "row"]} justifyContent="center">
          <Box w={["100%", "50%", "50%"]} padding="20px">
            <Text color="gray.500">{selectedItem.mealType}</Text>
            <Text fontSize="xl">{selectedItem.label}</Text>
            <Text>Total cooking time: {selectedItem.totalTime} minutes</Text>
            <Text>Servings: {selectedItem.yield}</Text>
            <Text paddingTop={5} paddingBottom={2} fontSize="lg">
              Ingredients:
            </Text>
            {selectedItem.ingredients.map((ingredient) => (
              <Text paddingBottom={1} key={ingredient.text}>
                {ingredient.text}
              </Text>
            ))}
          </Box>
          <Spacer />
          <Box w={["100%", "50%", "50%"]} padding="20px">
            <Text paddingBottom={2}>Health labels:</Text>
            {selectedItem.healthLabels.map((label) => (
              <LabelTag
                key={label}
                item={label}
                bgColor="purple.200"
              ></LabelTag>
            ))}
            <Text paddingTop={2} paddingBottom={2}>
              Diet:
            </Text>
            {selectedItem.dietLabels.map((label) => (
              <LabelTag key={label} item={label} bgColor="green.200"></LabelTag>
            ))}
            <Text paddingTop={2} paddingBottom={2}>
              Cautions:
            </Text>
            {selectedItem.cautions.map((caution) => (
              <LabelTag
                key={caution}
                item={caution}
                bgColor="red.200"
              ></LabelTag>
            ))}
            <Text paddingTop={2} fontSize="lg">
              Total nutrients:
            </Text>
            <Nutrients selectedItem={selectedItem}></Nutrients>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
