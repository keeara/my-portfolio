import Project from "@/components/project";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.name}
          className="bg-card-bg rounded-5xl p-4 sm:p-6 shadow-lg backdrop-blur-sm flex flex-col gap-4"
        >
          <h2 className="text-3xl font-bold px-2">{project.name}</h2>
          <div className="bg-inner-card-bg rounded-4xl p-4 sm:p-6">
            <Project
              tagline={project.tagline}
              href={project.href}
              links={project.links}
              description={project.description}
              tags={project.tags}
              images={project.images}
            />
          </div>
        </div>
      ))}
    </>
  );
}
