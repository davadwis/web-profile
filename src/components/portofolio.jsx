import job_hunt from "../assets/job-hunt.png";
import web_profile_dava from "../assets/web-profile-dava.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portofolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div id="portofolio" className="text-center mt-10 pt-36">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          <span className="font-semibold text-primary">Portofolio</span>
        </h2>
      </div>
      <div className="grid-cols-1 sm:grid md:grid-cols-2 w-11/12 mb-64 md:w-5/6 m-auto content-center gap-4 mt-4">
        <div
          className="mt-4 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0 md:h-[620px]"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <a href="https://job-hunt-dava.netlify.app/">
            <img
              className="rounded-t-lg"
              src={job_hunt}
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900">
              Final Project Sanbercode Bootcamp ReactJs
            </h5>
            <p className="mb-4 text-light text-justify text-neutral-600 dark:text-neutral-200">
              This project is undertaken to fulfill the requirements for
              obtaining a certificate in the intensive Sanbercode bootcamp. This
              website provides information about available job vacancies, as
              well as those that are not available. Job vacancy data is
              retrieved using an API called using Axios. The website also
              includes configurations for creating an account, logging in, and
              resetting passwords. Every user with an account can manage job
              vacancy data, which can be viewed in the Vacancy menu.
            </p>
          </div>
        </div>
        <div
          className="mt-4 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0 md:h-[620px]"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <a href="http://davadwi.netlify.app/">
            <img
              className="rounded-t-lg"
              src={web_profile_dava}
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900">
              Web Profile Dava Dwi
            </h5>
            <p className="mb-4 text-light text-justify text-neutral-600 dark:text-neutral-200">
              This web profile project is a digital platform designed with the
              aim of introducing and promoting a personal profile to the online
              world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portofolio;
