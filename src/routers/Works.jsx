import AppWraper from '../components/Others/AppWraper'
import ProjectsContainer from '../components/Works/components/ProjectsContainer'
import '../styles/Works.css'

export const Works = () => {
  return (
    <>
      <AppWraper>
        <div className='works__content'>
          <ProjectsContainer />
        </div>
      </AppWraper>
    </>
  )
}
