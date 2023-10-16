import AppWrapper from '../components/Others/AppWrapper'
import ProjectsContainer from '../components/Projects/components/ProjectsContainer'
import '../styles/Projects.css'

export const Projects = () => {
  return (
    <>
      <AppWrapper>
        <div className='projects__content'>
          <ProjectsContainer />
        </div>
      </AppWrapper>
    </>
  )
}
