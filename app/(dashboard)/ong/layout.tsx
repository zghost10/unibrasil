import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Sidebar } from "@/components/NGOSidebar";
import { Header } from "@/components/Header";
import "../../globals.css";

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
      <body className={`${font.className} flex h-screen bg-[#eee] text-black`}>
        <Sidebar/>
        
        <main className="flex flex-col w-full">
          <Header/>
          {children}
        </main>
      </body>
    </html>
  );
}