import type { Metadata } from "next";
import { titleFont } from "@/config/fonts";

import "./globals.css";
import { TopMenu } from "../components/ui/top-menu/TopMenu";

export const metadata: Metadata = {
  title: "Bloom | Cosmetics",
  description: "Ecommerce de produtos naturales para a beleza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titleFont} antialiased`}>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
