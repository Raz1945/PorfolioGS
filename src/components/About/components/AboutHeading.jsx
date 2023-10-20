import aboutData from "../../../assets/aboutData"

export const AboutHeading = () => {
  return (
    <div className="about__heading-container">
      <h1 className="about__heading-name">{aboutData.heading}</h1>
      <hr className="about-line" />
      <p className="about__heading-dev">{aboutData.subheading}</p>
    </div>
  )
}
