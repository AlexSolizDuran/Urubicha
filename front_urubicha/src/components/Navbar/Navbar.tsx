import Navlist from "@/components/Navbar/Navlist.json"
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-color1 shadow sm:items-baseline w-full">
          <div className="mb-2 sm:mb-0 flex flex-row">
            <div className="h-15 w-12 self-center mr-2">
              {/*<img className="h-10 w-10 self-center" src="/ecoStart/logo.webp" /> */}
              <Image
                src="/ecoStart/logo.webp"
                alt="Logo EcoStart"
                width={50}
                height={10}
                className="self-center"
              />
            </div>


            <div>
              <a className="text-2xl no-underline text-white font-sans font-bold">Eco-Start</a>
              <span className="block mt text-xs text-white">Innovacion Comunitaria</span>
            </div>
          </div>

          <div className="sm:mb-0 self-center ml-20"> {/*contenedor de las opciones de navegacion*/}
              <div className="h-10 flex item-center">
            {Navlist.map((item) => 
            <Link key={item.id} href={item.href} className="text-lg no-underline text-white font-bold hover:text-blue-dark ml-2 px1"> {/*letras del nav*/}
              {item.name}
            </Link>)}           
            </div>
          </div>

          <div className="sm:mb-0 self-center">
            <div className="h-10 flex item-center">
              <Link href="#" className="text-lg no-underline text-white font-bold hover:text-blue-dark ml-2 px1">
                registrarse
              </Link>
              <Link href="#" className="text-lg no-underline text-white font-bold hover:text-blue-dark ml-2 px1">
                iniciar sesion
              </Link>
            </div>
          </div>
    </nav>
  );
}
