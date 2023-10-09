import ig from "../assets/instagram.webp";
import linkedin from "../assets/linkedin.webp";
import github from "../assets/github.webp";
import email from "../assets/email.webp";
import wa from "../assets/whatsapp.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div id="contact" className="text-center pt-36">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          <span className="font-semibold text-primary">Contact Me</span>
        </h2>
      </div>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 mb-64 p-4 w-11/12 m-auto content-center">
        <a href="https://www.instagram.com/davadwi/">
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="flex flex-row p-6">
              <img src={ig} className="rounded-md h-12 w-12" alt="Instagram" />
              <div className="flex flex-col ml-4">
                <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                  Instagram
                </h5>
                <p className="text-light text-gray-900 dark:text-neutral-200">
                  @davadwi
                </p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/muhamaddava/">
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="flex flex-row p-6">
              <img
                src={linkedin}
                className="rounded-md h-12 w-12"
                alt="LinkedIn"
              />
              <div className="flex flex-col ml-4">
                <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                  LinkedIn
                </h5>
                <p className="text-light text-gray-900 dark:text-neutral-200">
                  muhamaddava
                </p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/davadwis">
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="flex flex-row p-6">
              <img src={github} className="rounded-md h-12 w-12" alt="Github" />
              <div className="flex flex-col ml-4">
                <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                  Github
                </h5>
                <p className="text-light text-gray-900 dark:text-neutral-200">
                  davadwis
                </p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://mail.google.com/">
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="flex flex-row p-6">
              <img src={email} className="rounded-md h-12 w-12" alt="E-Mail" />
              <div className="flex flex-col ml-4">
                <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                  E-Mail
                </h5>
                <p className="text-light text-gray-900 dark:text-neutral-200">
                  davadwi123@gmail.com
                </p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://wa.link/woj6n3">
          <div
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div className="flex flex-row p-6">
              <img src={wa} className="rounded-md h-12 w-12" alt="Whatsapp" />
              <div className="flex flex-col ml-4">
                <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                  Whatsapp
                </h5>
                <p className="text-light text-gray-900 dark:text-neutral-200">
                  +62 87741593195
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default Contact;
