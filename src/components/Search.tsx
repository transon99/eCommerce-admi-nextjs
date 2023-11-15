import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import React from "react";

interface InputProps {
  placeholder: string;
}

const Search = ({ placeholder }: InputProps) => {
  return (
    <TextField.Root size={"3"} radius="large">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input placeholder={placeholder} />
    </TextField.Root>
  );
};

export default Search;
