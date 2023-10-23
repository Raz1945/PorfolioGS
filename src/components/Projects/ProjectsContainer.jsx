import projectsData from "../../assets/projectsData";
import { ProjectCard } from "./components/ProjectCard";

export const ProjectsContainer = () => {
  return (
    <div className='projects__content'>
      <article className="projects__container">

        <ul className="projects__list-container">
          {projectsData.map((project, index) => (

            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              alt={project.alt}
              title={project.title}
              description={project.description}
              linkTo={project.linkTo}
              linkToCode={project.linkToCode}
            />

          ))}
        </ul>
      </article>
    </div>
  );
};