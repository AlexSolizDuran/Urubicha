// este es layout publico
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>layout publico</h1>
      <main>{children}</main>
    </div>
  );
}
