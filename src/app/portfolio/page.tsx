// app/projects/page.tsx

import { projectData } from "@/app/data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="projectsWall">
      <section className="container py-5">

    {/* *~*~*~*~* PAGE TITLE CARD *~*~*~*~* */}
        <div className="titleCard text-center mb-5">
          <h1 className="display-4 cookie-regular">Portfolio</h1>
          <p className="lead">
            A collection of projects built through code, design, and a little bit of lore.
          </p>
        </div>


    {/* *~*~*~*~* PROJECT CARDS *~*~*~*~* */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div id="backToTop" className="text-center mt-5">
          <a href="#" className="btn btn-outline-light btn-edgar rounded-pill px-4">
            Back to Top
          </a>
        </div>
      </section>
    </main>
  );
}