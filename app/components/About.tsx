import { IoLogoReact, IoLogoVue } from "react-icons/io5";
import Project from "./Project";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import controller from "../../public/gamepad.svg";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Weather App",
    description: `A simple weather app built with Vue and OpenWeather API, allowing you to check the current weather conditions in any city in the world.`,
    icon: <IoLogoVue className="text-[#43d192] transition w-32 h-32" />,
  },
  {
    title: "Kanban App",
    description:
      "Kanban App is built with React and uses local storage to keep track of tasks. It allows users to create, edit, and delete tasks easily.",
    icon: <IoLogoReact className="text-[#61dafb] transition w-32 h-32" />,
  },
];
export default function About() {
  return (
    <section
      id="about"
      className="py-[70px] min-h-screen flex gap-10 flex-col xl:flex-row"
    >
      <div className="w-full xl:w-1/2">
        <h1 className="text-[48px] md:text-[56px] lg:text-[80px] text-center text-[#111] font-semibold mb-3">
          About me
        </h1>
        <p className="text-[#11111180] text-[20px] md:text-[25px] lg:text-[24px] font-medium mb-5">
          Hello, my name is Nikita and I am a frontend developer based in
          Saint-Petersburg, Russia. <br /> I have been working in the field of
          frontend development for the past 4 months, and during this time, I
          have learned the Vue library and created my first projects, including
          a Weather App and a portfolio website.
        </p>
        <p className="text-[#11111180] text-[20px] md:text-[25px] lg:text-[24px] font-medium mb-5">
          Although Vue is a relatively easy-to-learn library, I found that there
          is a lack of more powerful and useful libraries out there, so I
          decided to switch to React to expand my skills and explore other
          options.
        </p>
        <p className="text-[#11111180] text-[20px] md:text-[25px] lg:text-[24px] font-medium mb-5">
          My hobbies include playing video games , watching detective movies and
          series, and, of course, programming!
        </p>
        <p className="text-[#11111180] text-[20px] md:text-[25px] lg:text-[24px] font-medium">
          At the moment, I am looking to delve deeper into React and its
          ecosystem, while also searching for a job. I am really impressed by
          its benefits and eager to learn more about it.
        </p>
      </div>
      <div className="w-full xl:w-1/2">
        <h1 className="text-[48px] md:text-[56px] lg:text-[80px] text-center text-[#111] font-semibold mb-3">
          Projects
        </h1>
        <div className="flex flex-col">
          {PROJECTS.map((project) => (
            <Project key={project.title} {...project} />
          ))}
          <Link
            href="/projects"
            className="text-[#247bff] self-end group flex flex-row items-center text-[20px] md:text-[25px] lg:text-[24px] font-medium mt-5"
          >
            Check out more projects
            <IoIosArrowRoundForward className="group-hover:translate-x-2 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
}
