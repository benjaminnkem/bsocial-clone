import Provider from "@/lib/contexts/providers";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import './styles/home.css'

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSocial Clone",
  description: "Find Popular Social Media Platform clone, created by Benjamin Nkem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
