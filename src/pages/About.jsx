import AppWraper from "../components/Others/AppWrapper"
import "../styles/About.css"

export const About = () => {
  return (
    <AppWraper>
      <div className="about__content">
        <div className="about__text-wrapper">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
      </div>
    </AppWraper>
  )
}
