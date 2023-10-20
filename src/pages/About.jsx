import aboutData from "../assets/aboutData"
import { AboutContacts } from "../components/About/components/AboutContacts"
import { AboutHeading } from "../components/About/components/AboutHeading"
import { AboutPresentation } from "../components/About/components/AboutPresentation"
import { AboutTechs } from "../components/About/components/AboutTechs"
import { AboutWrapper } from "../components/About/components/AboutWrapper"
import AppWraper from "../components/Others/AppWrapper"
import "../styles/About.css"

export const About = () => {
  return (
    <AppWraper>
      <AboutWrapper>
        <AboutContacts />
        <AboutHeading />
        <AboutPresentation />
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

      </AboutWrapper>
    </AppWraper>
  )
}
