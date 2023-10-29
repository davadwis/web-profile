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
import vue from "../assets/vue.webp";
import nextjs from "../assets/nextjs.webp";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const listSkill = [
  { name: "HTML5", img: html, alt: "HTML5", level: "Advanced" },
  { name: "CSS3", img: css, alt: "CSS3", level: "Advanced" },
  {
    name: "Javascript",
    img: js,
    alt: "Javascript",
    level: "Intermediate",
  },
  { name: "ReactJs", img: react, alt: "ReactJs", level: "Intermediate" },
  { name: "NextJs", img: nextjs, alt: "NextJs", level: "Intermediate" },
  { name: "VueJs", img: vue, alt: "VueJs", level: "Beginner" },
  {
    name: "TailwindCSS",
    img: tailwind,
    alt: "TailwindCSS",
    level: "Intermediate",
  },
  { name: "Axios", img: axios, alt: "Axios", level: "Intermediate" },
  { name: "MySQL", img: mysql, alt: "MySQL", level: "Intermediate" },
  { name: "Git", img: git, alt: "Git", level: "Beginner" },
  { name: "PHP", img: php, alt: "PHP", level: "Beginner" },
  { name: "Python", img: python, alt: "Python", level: "Beginner" },
  { name: "Java", img: java, alt: "Java", level: "Beginner" },
];

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div id="skills" className=" pt-28 md:pt-36">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            <span className="font-semibold text-primary">Skills</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 p-4 md:w-11/12 m-auto content-center md:pb-8">
          {listSkill.map((item) => (
            <div key={item.name}>
              <div
                className="mx-3 mt-6 md:flex md:flex-col flex-row self-start rounded-lg bg-white shadow-primary/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-900"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                <div className="md:flex flex-row p-4">
                  <img
                    src={item.img}
                    className="rounded-md h-8 w-8 md:h-12 md:w-12 m-auto md:m-0 md:mb-0 mb-4"
                    alt={item.alt}
                  />
                  <div className="flex flex-col m-0 md:ml-4 text-center md:text-start">
                    <h3 className="text-base md:text-lg font-semibold leading-tight text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-sm text-light text-gray-900 dark:text-neutral-200">
                      {item.level}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
