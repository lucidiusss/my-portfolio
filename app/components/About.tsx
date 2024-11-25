import { IoLogoReact, IoLogoVue } from "react-icons/io5";
import Project from "./Project";

const PROJECTS = [
  {
    title: "Weather App",
    description: `A simple Weather App built with Vue and OpenWeather API. Allows you to check the weather in any city around the world.`,
    icon: <IoLogoVue className="text-[#43d192] transition w-32 h-32" />,
  },
  {
    title: "Kanban App",
    description:
      "Kanban App built with React, using local storage to store tasks. Allows you to create, edit and delete tasks.",
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
          Hello, I am a frontend developer from Saint-Petersburg, Russia.
          <br />I have been working in this field for 4 months. At the very
          start i learned Vue library. I created my first project - Weather App
          and also my first portfolio website. Although it was really
          easy-to-learn library, i found out there is a lack of powerful and
          useful libraries, so i decided to switch to React.
        </p>
        <p className="text-[#11111180] text-[20px] md:text-[25px] lg:text-[24px] font-medium mb-5">
          At first i considered React Hooks as something hard for me to
          understand, but in reality they turned out to be a very powerful
          features. With React i only built a Kanban App and Astronomy Picture
          of the Day App so far.
        </p>
        <p className="text-[#11111180] text-[20px] md:text-[25px] lg:text-[24px] font-medium">
          For now I am looking to dive more deep in React and its ecosystem
          while looking for a job. Really impressed about its benefits and eager
          to learn more about it.
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
        </div>
      </div>
    </section>
  );
}
