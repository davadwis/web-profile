import job_hunt from "../assets/job-hunt.webp";
import web_profile_dava from "../assets/web-profile-dava.webp";
import lettra from "../assets/lettra.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const listPortofolio = [
  {
    name: "Lettra",
    href: "https://lettra-connect.vercel.app/",
    img: lettra,
    alt: "lettra",
    desc: "This project is undertaken to meet the requirements for obtaining a certificate at the intensive NextJs Sanbercode bootcamp. The project is a simple social media platform that can perform create, edit, delete, like, and reply actions. It also allows users to log in and register accounts. The website is responsive, and all data is retrieved through the API provided by Sanbercode. This website is deployed using Vercel.",
  },
  {
    name: "Final Project Sanbercode Bootcamp ReactJs",
    href: "https://job-hunt-dava.netlify.app/",
    img: job_hunt,
    alt: "Job Hunt by Dava Dwi",
    desc: "This project is undertaken to fulfill the requirements for obtaining a certificate in the intensive Sanbercode bootcamp. This website provides information about available job vacancies, as well as those that are not available. Job vacancy data is retrieved using an API called using Axios. The website also includes configurations for creating an account, logging in, and resetting passwords. Every user with an account can manage job vacancy data, which can be viewed in the Vacancy menu.This project is undertaken to fulfill the requirements for obtaining a certificate in the intensive Sanbercode bootcamp. This website provides information about available job vacancies, as well as those that are not available. Job vacancy data is retrieved using an API called using Axios. The website also includes configurations for creating an account, logging in, and resetting passwords. Every user with an account can manage job vacancy data, which can be viewed in the Vacancy menu.",
  },
  {
    name: "Web Profile Dava Dwi",
    href: "http://davadwi.netlify.app/",
    img: web_profile_dava,
    alt: "Web Profile Dava Dwi",
    desc: "This web profile project is a digital platform designed with the aim of introducing and promoting a personal profile to the online world.",
  },
];

const Portofolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div id="portofolio" className="md:pt-60 pt-28">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            <span className="font-semibold text-primary">Portofolio</span>
          </h2>
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-2 w-11/12 md:pb-48 md:w-5/6 m-auto content-center gap-4 mt-4 p-4">
          {listPortofolio.map((item) => (
            <div key={item.name}>
              <div
                className="mt-4 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0 h-[640px] p-2"
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <a href={item.href}>
                  <img
                    className="rounded-t-lg w-[640px] h-[320px]"
                    src={item.img}
                    alt={item.alt}
                  />
                </a>
                <div className="p-6 overflow-y-scroll">
                  <h3 className="mb-2 text-xl font-medium leading-tight text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mb-4 text-light text-justify text-neutral-600 dark:text-neutral-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Portofolio;
