import html from "../assets/html-5.webp";
import css from "../assets/css-3.webp";
import js from "../assets/js.webp";
import react from "../assets/react.webp";
import tailwind from "../assets/tailwindcss.webp";
import axios from "../assets/axios.webp";
import mysql from "../assets/mysql.webp";
import git from "../assets/git.webp";
import php from "../assets/php.webp";
import python from "../assets/python.webp";
import java from "../assets/java.webp";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="text-center pt-36" id="skills">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          <span className="font-semibold text-primary">Skills</span>
        </h2>
      </div>
      <div className="grid-cols-1 sm:grid md:grid-cols-4 mb-64 p-4 w-11/12 m-auto content-center">
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={html} className="rounded-md h-12 w-12" alt="HTML" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                HTML5
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Advanced
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={css} className="rounded-md h-12 w-12" alt="CSS" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                CSS3
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Advanced
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={js} className="rounded-md h-12 w-12" alt="Javascript" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                Javascript(ES6)
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Intermediate
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={react} className="rounded-md h-12 w-12" alt="ReactJs" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                ReactJs
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Intermediate
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img
              src={tailwind}
              className="rounded-md h-12 w-12"
              alt="TailwindCSS"
            />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                Tailwindcss
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Intermediate
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={axios} className="rounded-md h-fit w-12" alt="Axios" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                Axios
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Intermediate
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={mysql} className="rounded-md h-12 w-12" alt="MySQL" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                MySQL
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Intermediate
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={git} className="rounded-md h-12 w-12" alt="Git" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                Git
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Beginner
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={php} className="rounded-md h-12 w-12" alt="PHP" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                PHP
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Beginner
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={python} className="rounded-md h-12 w-12" alt="Python" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                Phyton
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Beginner
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900 sm:shrink-0 sm:grow sm:basis-0"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row p-6">
            <img src={java} className="rounded-md h-12 w-12" alt="Java" />
            <div className="flex flex-col ml-4">
              <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                Java
              </h5>
              <p className="text-light text-gray-900 dark:text-neutral-200">
                Beginner
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
