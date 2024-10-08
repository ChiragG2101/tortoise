import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Tortoise Assignment",
  description: "created by Chirag Gupta",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <div className="relative w-full h-full flex overflow-hidden">
          <Sidebar />
          <div className="py-4 pr-4 pl-72 w-full ">{children}</div>
        </div>
      </body>
    </html>
  );
}
