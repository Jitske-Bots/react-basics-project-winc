import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <>
      <Input margin="auto" onChange={changeFn} {...props}></Input>
    </>
  );
};
