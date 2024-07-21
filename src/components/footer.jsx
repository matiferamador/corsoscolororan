import { Link } from "react-router-dom";
import Logo from '../../public/logocorsos.png';
import { navigation } from '../components/utils/navigation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Footer = () => {
  return (
    <footer className="bg-white shadow">
      <div className="container mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              className="h-16 w-auto"
              src={Logo}
              alt="Logo Corsos Color Orán"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Corsos Color Orán</span>
          </Link>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={classNames(
                    item.current ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-[#6d28d9]  md:hover:text-white',
                    'block py-2 px-3 rounded md:p-2'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center  md:bg-[#6d28d9]  md:hover:text-white',"> ©️2025 <Link to='/' className="hover:underline">Corsos Color Orán </Link>. Todos los derechos reservados.</span> 
      </div>
    </footer>
  );
};

export default Footer;
