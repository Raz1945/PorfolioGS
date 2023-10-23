import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoNodejs, BiLogoPython, BiLogoFlask, BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';
import aboutData from '../../../assets/aboutData';

// Función que mapea el nombre de la tecnología a su icono correspondiente
const mapTechnologyToIcon = (tech) => {
  const icons = {
    'HTML': <BiLogoHtml5 size={20} title={'HTML'} />,
    'CSS': <BiLogoCss3 size={20} title={'CSS'} />,
    'JavaScript': <BiLogoJavascript size={20} title={'JavaScript'} />,
    'TypeScript': <BiLogoTypescript size={20} title={'TypeScript'} />,
    'React': <BiLogoReact size={20} title={'React'} />,
    'Node.js': <BiLogoNodejs size={20} title={'Node.js'} />,
    'Python': <BiLogoPython size={20} title={'Python'} />,
    'Flask': <BiLogoFlask size={20} title={'Flask'} />,
    'PostgreSQL': <BiLogoPostgresql size={20} title={'PostgreSQL'} />,
    'MongoDB': <BiLogoMongodb size={20} title={'MongoDB'} />,
  };
  return icons[tech] || null;
};

export const AboutTechsList = () => {
  return (
    <ul className="about__technologies-list">
      {aboutData.technologies.map((tech, index) => (
        <li className="about__technologies" key={index}>
          {mapTechnologyToIcon(tech)}
          <span className='about__technologies-tech'>
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
};