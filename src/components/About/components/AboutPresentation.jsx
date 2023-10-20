import aboutData from "../../../assets/aboutData"

export const AboutPresentation = () => {
  const { presentation } = aboutData

  return (
    <div className="about__presentation-container">
      <p className="about__subheading">Presentation</p>
      <p className="about__presentation">{presentation}</p>
    </div>

  )
}
