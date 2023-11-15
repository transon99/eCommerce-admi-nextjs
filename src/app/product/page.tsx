"use client";

import ListBoxs from "@/components/ListBox";
import Search from "@/components/Search";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, Text } from "@radix-ui/themes";
import { PiPlusCircleBold } from "react-icons/pi";
import CardItem from "@/components/CardItem";
import Link from "next/link";

const Product = () => {
  return (
    <div className="h-[calc(100vh-88px)] overflow-auto">
      <div
        className="card no-hover flex flex-col gap-5 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
    lg:items-center lg:gap-4"
      >
        <h1 className="text-white flex-1 text-center lg:text-left text-4xl font-bold">
          Products Management
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-4  md:flex-col lg:flex-row lg:justify-between p-5">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <Button size="3" variant="soft" radius="full" className="w-full">
            Add new product
            <PiPlusCircleBold />
          </Button>
        </div>
        <div className="relative lg:w-[326px]">
          <Search placeholder="Search Product ..." />
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap gap-2 mb-4">
          <Text>
            Products:{" "}
            <Text weight={"bold"}>
              All <Text weight={"light"}>(16)</Text>
            </Text>
          </Text>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-[26px]">
          <ListBoxs />
          <ListBoxs />
        </div>
      </div>
      <div
        className="grid flex-1 items-start gap-[26px] mb-[30px] sm:  md:grid-cols-2
                 lg:grid-cols-3 2xl:grid-cols-6 p-5"
      >
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default Product;
