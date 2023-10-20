import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoNodejs, BiLogoPython, BiLogoFlask, BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi'
import aboutData from '../../../assets/aboutData'

export const AboutTechs = () => {
  return (
    <div className="about__technologies-container">
      <p className='about__technologies-title'>Core Technologies:</p>
      <ul className="about__technologies-list">
        {aboutData.technologies.map((tech, index) => (
          <li className="about__technologies" key={index}>
            {tech === "HTML" && <BiLogoHtml5 size={20} title={'HTML'} />}
            {tech === "CSS" && <BiLogoCss3 size={20} title={'CSS'} />}
            {tech === "JavaScript" && <BiLogoJavascript size={20} title={'JavaScript'} />}
            {tech === "TypeScript" && <BiLogoTypescript size={20} title={'TypeScript'} />}
            {tech === "React" && <BiLogoReact size={20} title={'React'} />}
            {tech === "Node.js" && <BiLogoNodejs size={20} title={'Node.js'} />}
            {tech === "Python" && <BiLogoPython size={20} title={'Python'} />}
            {tech === "Flask" && <BiLogoFlask size={20} title={'Flask'} />}
            {tech === "PostgreSQL" && <BiLogoPostgresql size={20} title={'PostgreSQL'} />}
            {tech === "MongoDB" && <BiLogoMongodb size={20} title={'MongoDB'} />}
            {tech}
          </li>
        ))}
      </ul>
    </div>)
}
