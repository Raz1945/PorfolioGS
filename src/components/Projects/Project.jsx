import './Project.css';
import { ProjectsContent } from './components/ProjectsContent';
import { ProjectsSubContent } from './components/ProjectsSubContent';

const Project = ({ imgSrc, title, description, linkTo, linkToCode }) => {
  const cardStyle = {
    backgroundImage: `url(${imgSrc})`,
  };

  return (
    <li className="projects__list-item">
      <div className="project__card" style={cardStyle}>
        <div className="project__overlay"></div>
        <ProjectsContent linkTo={linkTo} title={title} />
        <ProjectsSubContent description={description} linkToCode={linkToCode} title={title} />
      </div>
    </li>
  );
};

export default Project;
