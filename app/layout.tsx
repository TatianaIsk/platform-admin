"use client";

import { PropsWithChildren } from "react";

import Header from "@/components/features/Header";
import Sidebar from "@/components/features/Sidebar";
import "./globals.css";
import { circe, furore, jost } from "@/styles/fonts";
import clsx from "clsx";

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={clsx(jost.variable, furore.variable, circe.variable)}>
        <div className="container">
          <Header />
          <div className="content">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
