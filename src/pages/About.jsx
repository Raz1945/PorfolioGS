import aboutData from "../assets/aboutData"
import AppWraper from "../components/Others/AppWrapper"
import "../styles/About.css"
export const About = () => {
  return (
    <AppWraper>
      <div className="about__content">
        <div className="about__text-wrapper">
          <h1 className="about__heading">{aboutData.heading}</h1>
          <p className="about__subheading">{aboutData.subheading}</p>
          <p className="about__text">{aboutData.text}</p>
        </div>
      </div>
    </AppWraper>
  )
}
