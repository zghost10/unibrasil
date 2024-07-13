import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";

const font = Roboto({ weight: '700', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} flex flex-col overflow-y-auto`}>
        {children}
      </body>
    </html>
  );
}
