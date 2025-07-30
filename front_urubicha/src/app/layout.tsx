import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/Navbar/NavBar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      <title> uruicha </title>
      </head>
      <body>
        <header> <NavBar/></header>
        <main className="p-4">{children}</main>
        <footer>{/*componente de pie de pagina*/}</footer>
      </body>
    </html>
  );
}
