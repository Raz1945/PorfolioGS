import homeData from '../../../assets/homeData';
import ButtonHome from '../../Button/ButtonHome';
import { HomeLink } from './HomeLink';

const HomeContext = () => {
  const { subtitle, name, title, paragraphs } = homeData; 

  return (
    <div className='home__text-wrapper'>
      <div className='home__subtitle'>
        {subtitle} <HomeLink text={name} />
      </div>

      <div className='home__title-wrapper'>
        <h1 className='home__title' id="main" role="main">
          {title}
        </h1>
      </div>

      <div className='home__text-container'>
        {paragraphs.map((text, index) => (
          <p className='home__text' key={index}>
            {text}
          </p>
        ))}
      </div>

      <ButtonHome text="Contact me" linkTo="https://www.linkedin.com/in/gs-sanchez" />
    </div>
  );
};

export default HomeContext;
