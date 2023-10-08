import { Outlet } from 'react-router-dom';
import AppContainer from '../components/Others/AppContainer';
import Navbar  from '../components/Navbar/Nav';

const Root = () => {
  return (
    <>
      <AppContainer>
        <Navbar />
        <Outlet />
      </AppContainer>
    </>
  );
}

export default Root;