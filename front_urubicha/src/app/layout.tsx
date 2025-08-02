import "@/styles/globals.css";
import { AuthProvider } from '../contexts/AuthContext';



// este layout no tendra ningun componentes porque es donde se genera todo
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
