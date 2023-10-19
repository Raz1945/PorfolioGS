import './Project.css';
import { BiCodeBlock } from "react-icons/bi";

const Project = ({ imgSrc, title, description, linkTo, linkToCode }) => {
  const cardStyle = {
    backgroundImage: `url(${imgSrc})`,
  };

  return (
    <li className="projects__list-item">
      <div className="project__card" style={cardStyle}>
        <div className="project__overlay"></div>

        <div className='project__content'>
          <a
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer" 
            aria-label={`See more about ${title} in a new tab`}
            className="project__title"
          >
            {title}
          </a>
        </div>

        <div className='project__subcontent'>
          <p className="project__description">
            {description}
            <a
              href={linkToCode}
              target="_blank"
              rel="noopener noreferrer" 
              aria-label={`See more about the code for ${title} in a new tab`}
              className="project__description-link"
            >
              <BiCodeBlock size={17} title='View Code' />
              <span className="project__description-text">
                View code
              </span>
            </a>
          </p>
        </div>
      </div>
    </li>
  );
};

export default Project;
