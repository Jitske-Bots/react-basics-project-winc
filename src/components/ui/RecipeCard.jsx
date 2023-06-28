import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <>
      <Center
        as="button"
        onClick={() => clickFn(recipe)}
        margin="auto"
        paddingTop={10}
        paddingBottom={10}
        display="flex"
        justifyContent="center"
        textAlign="center"
      >
        <Card maxW={[300, 400]} align="center">
          <CardBody minH={[400, 500]} maxH={[400, 500]}>
            <Image
              src={recipe.image}
              alt="img"
              borderRadius="lg"
              maxH={[150, 220]}
              minH={[150, 220]}
              minW={[280, 370]}
              maxW={[280, 370]}
            />
            <Stack mt="6" spacing="3" alignItems="center">
              <Text color="grey" fontSize={["sm", "md"]}>
                {recipe.mealType}
              </Text>
              <Heading size={["sm", "md"]}>{recipe.label}</Heading>
              <Flex gap="2">
                {recipe.healthLabels.map((item) => {
                  if (item == "Vegan" || item == "Vegetarian") {
                    return (
                      <Tag
                        key={item}
                        size={["sm", "md"]}
                        backgroundColor="purple.200"
                      >
                        {item}
                      </Tag>
                    );
                  }
                })}
              </Flex>

              {recipe.dietLabels.length > 0 && (
                <Flex gap="2">
                  {recipe.dietLabels.map((item) => (
                    <Tag
                      key={item}
                      size={["sm", "md"]}
                      backgroundColor="green.200"
                    >
                      {item}
                    </Tag>
                  ))}
                </Flex>
              )}
              <Text fontSize={["sm", "md"]}>Dish: {recipe.dishType}</Text>
              {recipe.cautions.length > 0 && (
                <>
                  <Text fontSize={["sm", "md"]}>Cautions:</Text>
                  <Flex gap="2">
                    {recipe.cautions.map((item) => (
                      <Tag
                        size={["sm", "md"]}
                        key={item}
                        backgroundColor="red.200"
                      >
                        {item}
                      </Tag>
                    ))}
                  </Flex>
                </>
              )}
            </Stack>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Center>
    </>
  );
};
