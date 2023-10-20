import { AboutContacts } from "../components/About/components/AboutContacts"
import { AboutHeading } from "../components/About/components/AboutHeading"
import { AboutPresentation } from "../components/About/components/AboutPresentation"
import { AboutTechs } from "../components/About/components/AboutTechs"
import { AboutWrapper } from "../components/About/components/AboutWrapper"
import { Education } from "../components/Education/Education"
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

        {/* <Education /> */}
      </AboutWrapper>
    </AppWraper>
  )
}
