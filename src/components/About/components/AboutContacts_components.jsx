import { FaFileDownload, FaGithub, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaMapMarkerAlt size={20} title={'map'} />,
    text: 'Montevideo, Uruguay',
    url: 'https://maps.app.goo.gl/pS9rTxDjksvDTvEw6',
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

export const ContactsWrapper = ({ children }) => {
  return (
    <div className="about__contact">
      <ul className="about__contact-list">
        {children}
      </ul>
    </div>
  );
};

export const SocialLinksList = () => {
  return (
    <>
      {socialLinks.map((link) => (
        <SocialLink key={link.item} {...link} />
      ))}
    </>
  );
};

export const SocialLink = ({ item, url, icon, text }) => {
  return (
    <li className="about__contact-item">
      <a className={`about__contact-icon ${item}`} target="_blank" rel="noopener noreferrer" href={url}>
        {icon}
        <span className="about__contact-text">{text}</span>
      </a>
    </li>
  );
};

export const DownloadLink = () => {
  return (
    <li className="about__contact-item">
      <a className="about__contact-icon download" href="public/Gonzalo_Sanchez_Cv.pdf" download>
        <FaFileDownload size={20} title="Download CV" />
        <span className="about__contact-text download">Download CV</span>
      </a>
    </li>
  );
};
