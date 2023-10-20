import aboutData from "../../../assets/aboutData"

export const AboutPresentation = () => {
  return (
    <div className="about__presentation-container">
      <p className="about__subheading">Presentation</p>
      <p className="about__presentation">{aboutData.presentation}</p>
    </div>

  )
}
