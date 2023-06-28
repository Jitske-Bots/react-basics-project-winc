import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const ChevronLeftButton = ({ clickFn }) => {
  return (
    <Button
      color="white"
      leftIcon={<ChevronLeftIcon color="black" boxSize={8} />}
      variant="none"
      onClick={() => clickFn()}
    ></Button>
  );
};
