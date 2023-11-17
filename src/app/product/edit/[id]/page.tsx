"use client";

import FileInput from "@/components/FileInput";
import ListBoxs from "@/components/ListBox";
import Search from "@/components/Search";
import { Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

interface InputProps {
  textProps: string;
}

const TextH = ({ textProps }: InputProps) => {
  return (
    <Text as="p" size={"2"} className="text-[#8D8D99] my-2" weight={"medium"}>
      {textProps}
    </Text>
  );
};

const Edit = () => {
  return (
    <div className="h-[calc(100vh-88px)] overflow-auto">
      <div
        className="card no-hover flex flex-col gap-4 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
lg:items-center lg:gap-4"
      >
        <h1 className="text-white flex-1 text-center lg:text-left text-4xl font-bold">
          Products Editor
        </h1>
      </div>
      <div className="px-5 pb-5">
        <Text as="p" weight={"medium"} size={"5"}>
          Product Settings
        </Text>
        <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,550px)] xl:gap-10">
          {/* Left Editor */}
          <div>
            <div>
              <TextH textProps="Product Images" />
              <div className="grid grid-cols-2 gap-5">
                <FileInput />
                <FileInput />
                <FileInput />
                <FileInput />
              </div>
            </div>
            <div>
              <TextH textProps="Description" />
              <TextArea placeholder="Add description…" />
            </div>
          </div>

          {/* Right Editor */}
          <Flex direction={"column"} gap={"4"}>
            {/* Line 1 */}
            <div>
              <TextH textProps="Product Name" />
              <div className="z-0">
                <TextField.Root size={"3"} radius="large">
                  <TextField.Input />
                </TextField.Root>
              </div>
            </div>
            {/* Line 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <TextH textProps="Brand name" />

                <ListBoxs />
              </div>
              <div className="w-full">
                <TextH textProps="Category" />
                <ListBoxs />
              </div>
            </div>

            {/* Line 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <TextH textProps="Regular Price" />
                <TextField.Root size={"3"} radius="large">
                  <TextField.Input />
                </TextField.Root>
              </div>
              <div className="w-full">
                <TextH textProps="Discount" />
                <TextField.Root size={"3"} radius="large">
                  <TextField.Input />
                </TextField.Root>
              </div>
            </div>

            {/* Line 4 */}
            <div className="w-full">
              <TextH textProps="SKU" />
              <TextField.Root size={"3"} radius="large">
                <TextField.Input />
              </TextField.Root>
            </div>

            {/* Line 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <TextH textProps="Stock Status" />
                <ListBoxs />
              </div>
              <div className="w-full">
                <TextH textProps="Quantity in Stock" />
                <TextField.Root size={"3"} radius="large">
                  <TextField.Input />
                </TextField.Root>
              </div>
            </div>
          </Flex>
        </div>

        {/* Save Buttom */}
        <Flex justify={"center"} className="mt-4">
          <Button radius="full" className="cursor-pointer">
            <Text
              as="p"
              size={"4"}
              className="text-white p-10"
              weight={"medium"}
            >
              Save Product
            </Text>
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default Edit;
