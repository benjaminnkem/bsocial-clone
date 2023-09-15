"use client";

import { useNavbar } from "@/lib/contexts/navbar-context";
import Link from "next/link";

interface NavProps {
  isTransparent: boolean;
}

const Navbar = ({ isTransparent }: NavProps) => {
  const { items: navLinks } = useNavbar();

  return (
    <nav>
      <div
        className={`flex items-center justify-between md:max-w-contain w-11/12 z-[500] mx-auto py-4 ${
          isTransparent ? "bg-transparent" : "bg-white"
        }`}
      >
        <a href="#">
          BClone <span className="text-purple-600"></span>
        </a>

        <ul className="flex items-center space-x-2">
          {navLinks &&
            navLinks.map((link, idx) => (
              <li key={idx}>
                <span>{link.label}</span>
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
