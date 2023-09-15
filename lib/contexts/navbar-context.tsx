"use client";

import { ReactNode, createContext, useContext } from "react";

interface NavbarLink {
  label: string;
  path: string;
  icon: ReactNode;
}

interface NavbarContextValue  {
  items?: NavbarLink[]
}

const NavbarContext = createContext<NavbarContextValue | undefined>(undefined);

const NavbarProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const links: NavbarLink[] = [
    { label: "Home", path: "/", icon: <></> },
    { label: "Buy me a coffee", path: "/", icon: <></> },
  ];
  return <NavbarContext.Provider value={{ items: links }}>{children}</NavbarContext.Provider>;
};

export function useNavbar(): NavbarContextValue {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }

  return context;
}

export default NavbarProvider;
