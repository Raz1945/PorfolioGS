import Project from "../Project"
import { images } from "../../../assets/images"

const ProjectsContainer = () => {
  return (
    <article className="projects__container">
      <ul className="projects__list-container">
        <Project
          imgSrc={images.project_0}
          alt={"Project 0"}
          title={"Testimonials grid section"}
          description={"This challenge is an excellent opportunity for those looking to hone their CSS Grid skills."}
          linkTo={"https://raz1945.github.io/Testimonials.github.io/"}
          linkToCode={"https://github.com/Raz1945/Testimonials.github.io"}
        />
        <Project
          imgSrc={images.project_1}
          alt={"Project 1"}
          title={"Interactive card"}
          description={"This project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test."}
          linkTo={"https://raz1945.github.io/Interactive-card.github.io/"}
          linkToCode={"https://github.com/Raz1945/Interactive-card.github.io"}
        />
        <Project
          imgSrc={images.project_2}
          alt={"Project 2"}
          title={"Fylo"}
          description={" "}
          linkTo={"https://fylo-vercel-app.vercel.app/"}
          linkToCode={"https://github.com/Raz1945/React-Portfolio#react-portfolio"}
        />
        <Project
          imgSrc={images.project_3}
          alt={"Project 3"}
          title={"React Portfolio"}
          description={"This project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test"}
          linkTo={"https://github.com/Raz1945/React-Portfolio#react-portfolio"}
        />
        <Project
          imgSrc={images.project_4}
          alt={"Project 4"}
          title={"React Portfolio"}
          description={"This project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test"}
          linkTo={"https://github.com/Raz1945/React-Portfolio#react-portfolio"}
        />
        <Project
          imgSrc={images.project_5}
          alt={"Project 5"}
          title={"React Portfolio"}
          description={"This project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test"}
          linkTo={"https://github.com/Raz1945/React-Portfolio#react-portfolio"}
        />


      </ul>
    </article>
  )
}

export default ProjectsContainer