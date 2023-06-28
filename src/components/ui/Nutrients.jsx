import { SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
export const Nutrients = ({ selectedItem }) => {
  return (
    <>
      <SimpleGrid columns={2} spacing={5}>
        <Box>
          <Text>{selectedItem.totalNutrients.ENERC_KCAL.label}</Text>
          <Text>
            {Math.round(selectedItem.totalNutrients.ENERC_KCAL.quantity)}{" "}
            {selectedItem.totalNutrients.ENERC_KCAL.unit}
          </Text>
        </Box>
        <Box>
          <Text>{selectedItem.totalNutrients.PROCNT.label}</Text>
          <Text>
            {Math.round(selectedItem.totalNutrients.PROCNT.quantity)}{" "}
            {selectedItem.totalNutrients.PROCNT.unit}
          </Text>
        </Box>
        <Box>
          <Text>{selectedItem.totalNutrients.FAT.label}</Text>
          <Text>
            {Math.round(selectedItem.totalNutrients.FAT.quantity)}{" "}
            {selectedItem.totalNutrients.FAT.unit}
          </Text>
        </Box>
        <Box>
          <Text>{selectedItem.totalNutrients.CHOCDF.label}</Text>
          <Text>
            {Math.round(selectedItem.totalNutrients.CHOCDF.quantity)}{" "}
            {selectedItem.totalNutrients.CHOCDF.unit}
          </Text>
        </Box>
        <Box>
          <Text>{selectedItem.totalNutrients.CHOLE.label}</Text>
          <Text>
            {Math.round(selectedItem.totalNutrients.CHOLE.quantity)}{" "}
            {selectedItem.totalNutrients.CHOLE.unit}
          </Text>
        </Box>
        <Box>
          <Text>{selectedItem.totalNutrients.NA.label}</Text>
          <Text>
            {Math.round(selectedItem.totalNutrients.NA.quantity)}{" "}
            {selectedItem.totalNutrients.NA.unit}
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};
