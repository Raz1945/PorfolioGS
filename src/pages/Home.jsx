import { HomeImg } from '../components/Home/components/HomeImg';
import HomeContext from '../components/Home/components/HomeContext';
import AppWrapper from '../components/Others/AppWrapper';
import '../styles/Home.css'

export const Home = () => {

  return (
      <AppWrapper>
        <div className='home__content'>
          <HomeContext />
          <HomeImg />
        </div>
      </AppWrapper>
  );
}
