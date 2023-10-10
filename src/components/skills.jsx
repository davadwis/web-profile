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

const listSkill = [
  { name: "HTML5", img: html, alt: "HTML5", level: "Advanced" },
  { name: "CSS3", img: css, alt: "CSS3", level: "Advanced" },
  {
    name: "Javascript(ES6)",
    img: js,
    alt: "Javascript",
    level: "Intermediate",
  },
  { name: "ReactJs", img: react, alt: "ReactJs", level: "Intermediate" },
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
      <div className="text-center pt-36" id="skills">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          <span className="font-semibold text-primary">Skills</span>
        </h2>
      </div>
      <div className="grid-cols-1 sm:grid md:grid-cols-4 mb-64 p-4 w-11/12 m-auto content-center">
        {listSkill.map((item) => (
          <div key={item.name}>
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
                  <h5 className="mb-1text-xl font-semibold leading-tight text-gray-900">
                    {item.name}
                  </h5>
                  <p className="text-light text-gray-900 dark:text-neutral-200">
                    {item.level}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Skills;
