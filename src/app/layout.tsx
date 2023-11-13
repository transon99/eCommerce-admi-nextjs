"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { Container } from "postcss";

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
          <div className="flex w-full">
            <SideBar />
            <div className="flex-grow">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <main>{children}</main>
            </div>
          </div>

          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
