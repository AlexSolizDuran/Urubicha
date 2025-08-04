import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 text-sm">
        {/* Marca y contacto */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Eco-Start</h2>
          <p>Innovación Comunitaria</p>
          <p className="mt-2 text-sm">
            Email: info@eco-start.org<br />
            Tel: +591 70000000<br />
            Ubicación: Santa Cruz, Bolivia
          </p>
        </div>

        {/* Redes sociales */}
        <div className="md:text-right">
          <h2 className="text-lg font-semibold mb-2">Síguenos</h2>
          <div className="flex md:justify-end gap-4 mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/59170000000" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="bg-green-950 text-center text-xs py-2">
        &copy; {new Date().getFullYear()} Eco-Start. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
