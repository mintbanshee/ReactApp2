import { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
}

{/* Project card for portfolio page - pulls project information from an array in data/projects.ts  */}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="col">
      <div className="projectCard p-4 h-100 d-flex flex-column">

        {/* *~*~*~*~* THUMB TACKS *~*~*~*~* */}
          <div className="introPins col-12 col-md-5">
            <img
              src="/images/icons/pin.png"
              alt="Decorative pin element."
              className="projectPin img-fluid"
            />
          </div>

        {/* *~*~*~*~* PROJECT NAME *~*~*~*~* */}          
        <h3 className="projectTitle cookie-regular display-6 mb-1">{project.title}</h3>
        {project.subtitle && ( 
          <p className="text-muted b-3 fs-5">{project.subtitle}</p>
        )}

        {/* *~*~*~*~* IMAGE *~*~*~*~* */}
        <div className="mb-3">
          <img src={project.imageUrl} 
            alt={project.title} 
            className="projectImg img-fluid rounded" 
          />
        </div>

        {/* *~*~*~*~* DESCRIPTION *~*~*~*~* */}
        <div className="flex-grow-1">
        <p className="mb-4 fs-6">{project.description}</p>
        
        {/* *~*~*~*~* VIBE AND ROLE *~*~*~*~* */}        
        <div className="mb-3">
          {project.vibe && (
            <p className="mb-1">
              <strong>Vibe:</strong> {project.vibe}
            </p>
          )}
          {project.role && (
            <p className="mb-3">
              <strong>Role:</strong> {project.role}
            </p>
          )}
        </div>

        {/* *~*~*~*~* TECH STACK *~*~*~*~* */}
        <div className="mt-auto text-center">
          <h5 className="small fw-bold mb-3 text-uppercase letter-spacing-1">Tech Used:</h5>
            <div className="d-flex flex-wrap gap-2 text-center justify-content-center mb-3">
              {project.techStack.map((tech, index) => (
                <span key={tech} className="projectTech">
                  {tech}
                  {index < project.techStack.length - 1 && " • "}
                </span>
              ))}
            </div>
            </div>
        </div>

        {/* *~*~*~*~* BUTTONS *~*~*~*~* */}
        <a 
          href={project.projectUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline-light btn-edgar rounded-pill px-4 mt-2"
        >
          View Repo
        </a>

        {project.additionalUrl && (
          <a 
            href={project.additionalUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-edgar rounded-pill px-4 mt-2"
          >
            View Site
          </a>
        )}

      </div>
    </div>
  );
}

export default ProjectCard;