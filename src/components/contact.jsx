import ig from "../assets/instagram.webp";
import linkedin from "../assets/linkedin.webp";
import github from "../assets/github.webp";
import email from "../assets/email.webp";
import wa from "../assets/whatsapp.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const listContact = [
  {
    name: "Instagram",
    account: "@davadwi",
    img: ig,
    alt: "Instagram",
    href: "https://www.instagram.com/davadwi/",
  },
  {
    name: "LinkedIn",
    account: "muhamaddava",
    img: linkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/muhamaddava/",
  },
  {
    name: "GitHub",
    account: "davadwis",
    img: github,
    alt: "Github",
    href: "https://github.com/davadwis/",
  },
  {
    name: "E-Mail",
    account: "davadwi123@gmail.com",
    img: email,
    alt: "E-Mail",
    href: "https://mail.google.com/",
  },
  {
    name: "Whatsapp",
    account: "+62 87741593195",
    img: wa,
    alt: "Whatsapp",
    href: "https://wa.link/woj6n3/",
  },
];

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div id="contact" className=" md:pt-8 pt-28">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            <span className="font-semibold text-primary">Contact Me</span>
          </h2>
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 mb-40 md:mb-64 p-4 w-11/12 m-auto content-center">
          {listContact.map((item) => (
            <div key={item.name}>
              <a href={item.href}>
                <div
                  className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <div className="flex flex-row p-6">
                    <img
                      src={item.img}
                      className="rounded-md h-12 w-12"
                      alt={item.alt}
                    />
                    <div className="flex flex-col ml-4">
                      <h3 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-light text-gray-900 dark:text-neutral-200">
                        {item.account}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Contact;
