export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>layout para los productores</h1>
      <main>{children}</main>
    </div>
  );
}
