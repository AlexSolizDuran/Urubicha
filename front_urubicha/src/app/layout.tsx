import type { Metadata } from "next";

import "@/styles/globals.css";

// este layout no tendra ningun componente porque es donde se genera todo
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
