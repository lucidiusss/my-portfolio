"use client";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  demo: string;
  source: string;
};

export default function Project(project: ProjectProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="bg-white p-4 flex flex-col rounded-xl shadow-xl w-[300px] sm:w-[400px] md:w-[500px] lg:w-[350px] xl:w-[700px] h-fit">
      <div className="h-full flex flex-col">
        <div className="w-full h-[170px] sm:h-[220px] md:h-[270px] lg:h-[190px] xl:h-[370px] relative">
          {!loaded && <Skeleton className="w-full h-full rounded-xl" />}
          <Image
            className={`${
              loaded ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 rounded-xl h-full transition ease-in-out duration-500 w-full`}
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            unoptimized
            onLoad={() => setLoaded(true)}
            loader={({ src }) => src}
          />
        </div>
        <h1 className="text-[24px] md:text-[26px]  lg:text-[32px] text-[#111] font-semibold mt-5 mb-3">
          {project.title}
        </h1>
        <p className="text-[#11111180] text-[20px] md:text-[20px] lg:text-[24px] font-medium">
          {project.description}
        </p>
        <div className="flex flex-row gap-5 justify-center mt-auto">
          <Link
            className="text-[#247bff] hover:text-[#2b61b3] text-[18px] md:text-[20px] lg:text-[24px] font-medium mt-5"
            href={project.demo}
          >
            Demo
          </Link>
          <Link
            className="text-[#247bff] hover:text-[#2b61b3] text-[18px] md:text-[20px] lg:text-[24px] font-medium mt-5"
            href={project.source}
          >
            Source code
          </Link>
        </div>
      </div>
    </div>
  );
}
