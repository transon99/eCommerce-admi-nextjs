"use client";

import { Flex, Text } from "@radix-ui/themes";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaHome, FaShoppingCart, FaUserEdit } from "react-icons/fa";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

function SideBar() {
  interface MenuData {
    Icon: IconType;
    href: string;
    layble: string;
  }

  const menuData: MenuData[] = [
    {
      Icon: FaHome,
      href: "/dashboard",
      layble: "Dashboard",
    },
    {
      Icon: BsFillBoxSeamFill,
      href: "/product",
      layble: "Product",
    },
    {
      Icon: FaShoppingCart,
      href: "/order",
      layble: "Order",
    },
    {
      Icon: FaUserEdit,
      href: "/user",
      layble: "User",
    },
  ];

  const currentPath = usePathname();

  return (
    <aside
      id="logo-sidebar"
      // className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      className="  min-w-64 hidden md:block "
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-lg w-64 ">
        <Flex direction={"column"} className="space-y-2 font-medium">
          {menuData.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={classnames({
                "bg-gray-700": tab.href === currentPath,
                "": tab.href === currentPath,
                "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group":
                  true,
              })}
            >
              <tab.Icon size={20} className="text-gray-400 " />
              <Text ml={"3"} className="">
                {tab.layble}
              </Text>
            </Link>
          ))}
        </Flex>
      </div>
    </aside>
  );
}

export default SideBar;
