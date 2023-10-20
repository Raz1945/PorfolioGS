
export const ProjectsContent = ({linkTo, title}) => {
  return (
    <div className='project__content'>
    <a
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`See more about ${title} in a new tab`}
      className="project__title"
    >
      {title}
    </a>
  </div>

  )
}
