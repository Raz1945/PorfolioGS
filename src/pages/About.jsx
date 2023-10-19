import aboutData from "../assets/aboutData"
import { AboutContacts } from "../components/About/components/AboutContacts"
import { AboutTechs } from "../components/About/components/AboutTechs"
import { AboutWrapper } from "../components/About/components/AboutWrapper"
import AppWraper from "../components/Others/AppWrapper"
import "../styles/About.css"

export const About = () => {
  return (
    <AppWraper>
      <AboutWrapper>
        <AboutContacts />

        <div className="about__heading-container">
          <h1 className="about__heading-name">{aboutData.heading}</h1>
          <hr className="about-line" />
          <p className="about__heading-dev">{aboutData.subheading}</p>
        </div>

        <div className="about__presentation-container">
          <p className="about__subheading">Presentation</p>
          <p className="about__presentation">{aboutData.presentation}</p>
        </div>

        <AboutTechs />

        <div className="about__education-container">
          <p className="about__subheading">Education</p>
          <ul className="about__education-list">
            {/* {aboutData.education.map((education, index) => (
              <ItemBox key={index} education={education}/>
              
            ))} */}
            <p className="about__presentation">{aboutData.presentation}</p>

          </ul>
        </div>

        {/* <p className="about__subheading">Experience</p> */}
      </AboutWrapper>
    </AppWraper>
  )
}
