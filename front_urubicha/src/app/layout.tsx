import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

// este layout no tendra ningun componente porque es donde se genera todo
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      <title> urubicha </title>
      </head>
      <body className="flex flex-col min-h-screen">
        <header> <NavBar/></header>
        <main className="flex-1 px-4 py-6">{children}</main>
        <footer><Footer/></footer>
      </body>
      
    </html>
  );
}
