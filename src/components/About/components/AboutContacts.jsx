import { FaFileDownload, FaGithub, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaMapMarkerAlt size={20} title={'map'} />,
    text: 'Montevideo, Uruguay',
    url: '#',
    item: 'map',
  },
  {
    icon: <FaLinkedinIn size={20} title={'linkedin'} />,
    text: 'gs-sanchez',
    url: 'https://www.linkedin.com/in/gs-sanchez',
    item: 'linkedin',

  },
  {
    icon: <FaGithub size={20} title={'gitHub'} />,
    text: 'Raz1945',
    url: 'https://github.com/Raz1945',
    item: 'github',
  },
];

export const AboutContacts = () => {
  return (
    <div className="about__contact">
      <ul className="about__contact-list">
        {socialLinks.map((link, index) => (
          <li key={index} className="about__contact-item">
            <a className={`about__contact-icon ${link.item}`} target="_blank" rel="noopener noreferrer" href={link.url}>
              {link.icon}
              <span className="about__contact-text">{link.text}</span>
            </a>
          </li>
        ))}

        <li className="about__contact-item">
          <a className="about__contact-icon download" href="public/Gonzalo_Sanchez_Cv.pdf" download>
            <FaFileDownload size={20} title="Download CV" />
            <span className="about__contact-text download">Download CV</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

