import Button from '../../Others/Button'
import { HomeLink } from './HomeLink'

const HomeContext = () => {
  return (
    <div className='home__text-wraper'>

      <div className='home__subtitle'>
        Welcome! My name is
        <HomeLink text='Gonzalo' />
      </div>

      <div className='home__title-wraper'>
        <h1 className='home__title' id="#main" role="main">
          A Full Stack Web Developer
        </h1>
      </div>

      <p className='home__text'>
        With a passion for learning and creating things.
      </p>

      <p className='home__text'>
        I specialize in designing and building web applications that are not only functional but also visually appealing.
      </p>

      <p className='home__text'>
        I am always looking for new challenges and opportunities to grow and improve my skills.
      </p>
      <p className='home__text'>
        Thank you for visiting my website and I look forward to hearing from you.
      </p>

        <Button text={'Contact me'} />
    </div>)
}

export default HomeContext