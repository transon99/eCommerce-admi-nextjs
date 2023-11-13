import { HeadingIcon } from "@radix-ui/react-icons";
import { Button, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";

import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

function SideBar() {
  interface MenuData {
    Icon: IconType;
    href: string;
    layble: string;
  }

  const menuData: MenuData[] = [
    {
      Icon: AiOutlineHome,
      href: "/dashboard",
      layble: "Dashboard",
    },
    {
      Icon: FaUserEdit,
      href: "/user",
      layble: "User",
    },
    {
      Icon: BsFillBoxSeamFill,
      href: "/product",
      layble: "Product",
    },
    {
      Icon: AiOutlineShoppingCart,
      href: "/order",
      layble: "Order",
    },
  ];

  return (
    <Flex direction={"column"}>
      <Link href="/" className="p-4 h-[72px] flex flex-row">
        <HeadingIcon />
        <Heading size={"4"} weight={"bold"}>
          ADMIN
        </Heading>
      </Link>
      <Separator orientation="horizontal" size={"4"} />
      <Flex direction={"column"} className="p-4 gap-4 min-w-[200px]">
        {menuData.map((tab) => (
          <Link
            href={tab.href}
            className="px-2 py-2 bg-orange-400 rounded-full flex items-center"
          >
            <tab.Icon />
            <Text ml={"3"}>{tab.layble}</Text>
          </Link>
        ))}

        <Link href="/product">Product</Link>

        <Link href="/user">User</Link>

        <Link href="/">Dashboard</Link>
      </Flex>
    </Flex>
  );
}

export default SideBar;
