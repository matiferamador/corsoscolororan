import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../../public/logocorsos.png';
import { navigation } from '../components/utils/navigation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white border-gray-200">
      {({ open }) => (
        <>
          <div className="container mx-auto p-4 md:py-8 flex flex-wrap items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-16" alt="ogo" />
            </Link>
            <DisclosureButton className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#6d28d9] rounded-lg md:hidden hover:bg-[#6d28d9]  focus:outline-none focus:ring-2 focus:ring-gray-200">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-5 h-5" aria-hidden="true" />
              )}
            </DisclosureButton>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={classNames(
                        item.current ? 'text-white bg-blue-700 md:bg-transparent md:text-' : 'text-gray-500 hover:bg-gray-100 md:hover:bg-[#6b21a8] md:hover:text-white',
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
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-500 hover:bg-[#6b21a8]',
                    'block py-2 px-3 rounded'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
