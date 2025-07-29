import Navlist from "./Navlist.json"; //llama las pestañas del navbar
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-color1 text-white p-5">
      <ul className=" flex gap-4">
        {/* un ciclo que genera todas las pestañas establecidas en Navlist */}
        {Navlist.map((link, id) => (
          <li key={id}>
            <Link href={link.href}> {link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
