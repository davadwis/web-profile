import { Dropdown } from "flowbite-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

const navigation = [
  { name: "Profile", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Portofolio", href: "/#portofolio" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <nav
        className="border fixed z-20 w-full top-0 shadow-xl shadow-sky-500/50 border-transparent backdrop-blur-sm"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 h-[64px]">
          <div className="flex">
            <div className="text-sm text-gray-900 rounded-lg md:hidden pr-36">
              <a href="/">
                <p className="font-semibold text-primary text-3xl md:hidden md:hover:bg-transparentmd:p-0 ">
                  DavaDwi
                </p>
              </a>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex text-sm text-gray-900 rounded-lg md:hidden pt-1"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <Dropdown
                inline
                label={
                  <svg
                    className="w-6 h-6 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 17 14"
                  >
                    <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
                  </svg>
                }
              >
                <Dropdown.Header>
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href}>
                      <Dropdown.Item>{item.name}</Dropdown.Item>
                    </a>
                  ))}
                </Dropdown.Header>
              </Dropdown>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <div className="flex flex-col p-4 md:p-0 border font-light text-2xl rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-gray-900">
              {navigation.map((item) => (
                <NavHashLink
                  key={item.name}
                  to={item.href}
                  className="font-light block rounded md:hover:bg-transparent md:hover:text-primary md:p-0 hover:text-sky-500"
                >
                  {item.name}
                </NavHashLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
