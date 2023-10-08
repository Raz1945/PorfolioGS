import { HomeImg } from '../components/Home/components/HomeImg';
import HomeContext from '../components/Home/components/HomeContext';
import AppWraper from '../components/Others/AppWraper';
import '../styles/Home.css'

export const Home = () => {

  return (
    <>
      <AppWraper>
        <div className='home__content'>
          <HomeContext />
          <HomeImg />
        </div>
      </AppWraper>
    </>
  );
}
