type ProjectProps = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export default function Project(project: ProjectProps) {
  return (
    <div className="group flex flex-row items-center gap-5">
      <div>{project.icon}</div>
      <div>
        <h1 className="text-[25px] md:text-[28px] lg:text-[32px] text-[#111] font-semibold mb-3">
          {project.title}
        </h1>
        <p className="text-[#11111180] text-[20px] md:text-[22px] lg:text-[24px] font-medium mb-5">
          {project.description}
        </p>
      </div>
    </div>
  );
}
