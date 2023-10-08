import { Link } from 'react-router-dom';

export const HomeLink = ({ text }) => {
  return (
    <div className='home__subtitle-name'>
      <Link className='home__link' to={"/about_me"}> {text} </Link>
    </div>
  )
}
