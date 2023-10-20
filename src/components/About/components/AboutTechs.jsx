import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoNodejs, BiLogoPython, BiLogoFlask, BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';
import aboutData from '../../../assets/aboutData';

const iconMappings = {
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

export const AboutTechs = () => {
  return (
    <div className="about__technologies-container">
      <p className='about__technologies-title'>Core Technologies:</p>
      <ul className="about__technologies-list">
        {aboutData.technologies.map((tech, index) => (
          <li className="about__technologies" key={index}>
            {iconMappings[tech] || ''} {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

