"use client";

import { useNavbar } from "@/lib/contexts/navbar-context";
import Link from "next/link";

interface NavProps {
  isTransparent?: boolean;
  color?: string;
  addClass?: string;
}

const Navbar = ({ isTransparent, color, addClass }: NavProps) => {
  const { items: navLinks } = useNavbar();
  let getColor = color ? color : "";

  return (
    <nav className={`z-[500] py-2 ${isTransparent ? "bg-transparent" : "bg-white"} ${getColor} ${addClass}`}>
      <div className={`flex items-center justify-between md:max-w-contain w-11/12 z-[500] mx-auto py-4 `}>
        <a href="#" className="font-bold text-xl">
          BClone<span className="text-purple-600">.</span>
        </a>

        <ul className="flex items-center space-x-4">
          {navLinks &&
            navLinks.map((link, idx) => (
              <li key={idx} className="flex items-center space-x-1">
                <span>{link.label}</span>
                <span>{link.icon}</span>
              </li>
            ))}
        </ul>

        <div className="flex items-center space-x-4">
          <Link href="#">Login</Link>
          <Link href={"#"}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
