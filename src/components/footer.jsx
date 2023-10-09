import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="fixed z-20 w-full bottom-0 shadow-[0_25px_25px_36px_rgba(0,0,0,0.3)] shadow-sky-500/50  backdrop-blur-sm"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 h-fit">
          <div
            className="items-center justify-betwee w-full md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 rounded-lg md:flex-col md:space-x-8 md:mt-0 text-gray-900 text-center">
              <li>
                <p className="font-semibold text-primary text-3xl md:block hidden rounded md:hover:bg-transparentmd:p-0 ">
                  DavaDwi
                </p>
              </li>
              <li>
                <p className="font-light text-gray-900 block rounded md:hover:bg-transparent md:p-0">
                  Fresh Graduate Frontend Web Developer
                </p>
              </li>
              <li>
                <p className="font-light text-gray-900 block rounded md:hover:bg-transparent md:p-0">
                  © 2023 Muhamad Dava Dwi Saputra. All rights reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
