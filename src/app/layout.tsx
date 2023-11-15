"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Flex, Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { Container } from "postcss";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark" radius="large">
          <Flex direction={"column"} className="w-full">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Flex gap={"3"} className="md:m-2 mt-2 h-[calc(100vh-88px)]">
              <SideBar />
              <main className=" bg-gray-800 rounded-lg w-full">{children}</main>
            </Flex>
          </Flex>

          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
