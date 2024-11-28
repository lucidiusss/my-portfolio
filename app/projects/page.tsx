import Project from "../components/Project";

const PROJECTS = [
  {
    title: "Vue Sneakers",
    description:
      "I built this project following the course on Youtube. It uses a local storage to store your orders, and also uses some mock APIs to fetch sneakers. Users allowed to add sneakers to the cart, remove them, and view their orders.",
    image: "/vue-sneakers.png",
    demo: "https://vue-sneakers-ruddy.vercel.app/",
    source: "https://github.com/lucidiusss/vue-sneakers",
  },
  {
    title: "Geek Blog",
    description:
      "An abandoned project where you can post your thoughts or ideas about anything you like - books, movies, music, etc. Built with Vue, Nuxt.JS Supabase, Prisma, Pinia. My very first full-stack application.",
    image: "/geek-blog.png",
    demo: "https://geek-blog-five.vercel.app/",
    source: "https://github.com/lucidiusss/geek-blog",
  },
  {
    title: "A Picture Of the Day",
    description:
      "NASA A Picture Of the Day app built with React and NASA API. It displays a random picture of the space each day with the deep description and explanation of what is seen.",
    image: "/apod-app.png",
    demo: "https://apod-project-jade.vercel.app/",
    source: "https://github.com/lucidiusss/APOD-Project",
  },
  {
    title: "Weather App",
    description: `A simple weather app built with Vue and OpenWeather API, allowing you to check the current weather conditions in any city in the world.`,
    image: "/weather-app.png",
    demo: "https://vue-weather-app-one-murex.vercel.app/",
    source: "https://github.com/lucidiusss/vue-weather-app",
  },
  {
    title: "Kanban App",
    description:
      "Kanban App is built with React and uses local storage to keep track of tasks. It allows users to create, edit, and delete tasks easily.",
    image: "/kanban-app.png",
    demo: "https://react-kanban-app-hazel.vercel.app/",
    source: "https://github.com/lucidiusss/react-kanban-app",
  },
  {
    title: "Vanilla JS todo-app",
    description:
      "Written with vanilla js, html and css. The title is pretty self-explanatory.",
    image: "/js-todo-app.png",
    demo: "https://js-todo-list-beta.vercel.app/",
    source: "https://github.com/lucidiusss/js-todo-list",
  },
];

export default function Projects() {
  return (
    <section className="py-[70px] gap-14 flex flex-col min-h-screen">
      <div className="flex mt-10">
        <h1 className="text-[36px] md:text-[56px]  text-center text-[#111] font-semibold">
          My Projects
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:flex-wrap gap-5 w-full">
        {PROJECTS.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
