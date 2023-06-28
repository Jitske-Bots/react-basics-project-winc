import { Tag } from "@chakra-ui/react";

export const LabelTag = ({ item, bgColor }) => {
  return (
    <Tag bg={bgColor} marginRight="1" marginBottom="1">
      {item}
    </Tag>
  );
};
