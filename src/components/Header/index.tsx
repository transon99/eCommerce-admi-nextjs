import Link from "next/link";
// import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import {
  Avatar,
  Button,
  DropdownMenu,
  Flex,
  TextField,
} from "@radix-ui/themes";
import {
  MagnifyingGlassIcon,
  BellIcon,
  CaretDownIcon,
} from "@radix-ui/react-icons";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full drop-shadow-1 p-4">
      <Flex justify={"between"} width={"100%"}>
        <TextField.Root size={"3"} radius="large">
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Search ..." />
        </TextField.Root>
        <Flex align={"center"}>
          <div className="bg-gray-400 bg- p-1 rounded-full">
            <BellIcon className="h-6 w-6 hover:cursor-pointer" />
          </div>
          <Avatar
            className="ml-4"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
            radius="full"
          />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
