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
        {/* decorative elements to make the cards feel like they are tacked on to the wall */}
          <div className="introPins col-12 col-md-5">
            <img
              src="/images/icons/pin.png"
              alt="Decorative pin element."
              className="projectPin img-fluid"
            />
          </div>

        {/* *~*~*~*~* PROJECT NAME *~*~*~*~* */}    
        {/* display the project name and subtitle(short description) */}      
        <h3 className="projectTitle cookie-regular display-6 mb-1">{project.title}</h3>
        {project.subtitle && ( 
          <p className="text-muted b-3 fs-5">{project.subtitle}</p>
        )}

        {/* *~*~*~*~* IMAGE *~*~*~*~* */}
        {/* 1 image per project to keep it consistent and calm */}
        <div className="mb-3">
          <img src={project.imageUrl} 
            alt={project.title} 
            className="projectImg img-fluid rounded" 
          />
        </div>

        {/* *~*~*~*~* DESCRIPTION *~*~*~*~* */}
        {/* the more detailed description of the project */}
        <div className="flex-grow-1">
        <p className="mb-4 fs-6">{project.description}</p>
        
        {/* *~*~*~*~* VIBE AND ROLE *~*~*~*~* */}        
        {/* what is the feeling of the project and what role(s) I played while working on it */}
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
        {/* pull data from project.techStack to display what I used to make the project */}
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

        {/* view the github repo */}
        <a 
          href={project.projectUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline-light btn-edgar rounded-pill px-4 mt-2"
        >
          View Repo
        </a>

        {/* when a project has a live site entered in the additionalUrl field */}
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