import { Link } from "react-router-dom";
import Logo from '../../public/Corsosweb.png'
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="container mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
                 <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img
                            className="h-16 w-auto"
                            src={Logo}
                            alt="Logo Corsos Color Orán"
                            />
               
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Corsos Color Orán</span>
            </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Información</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Galeria</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©2025 <a href="https://flowbite.com/" className="hover:underline">Corsos Color Orán</a>.Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
