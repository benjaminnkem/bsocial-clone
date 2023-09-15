"use client";
import React from "react";
import NavbarProvider from "./navbar-context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <NavbarProvider>{children}</NavbarProvider>;
};

export default Provider;
