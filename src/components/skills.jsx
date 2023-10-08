import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwindcss.png";
import axios from "../assets/axios.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
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
            <div className="h-12 w-12">
              <img src={html} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={css} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={js} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={react} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={tailwind} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={axios} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={mysql} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={git} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={php} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={python} className="rounded-md" />
            </div>
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
            <div className="h-12 w-12">
              <img src={java} className="rounded-md" />
            </div>
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
