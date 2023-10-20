import aboutData from "../../../assets/aboutData"

export const AboutHeading = () => {
  const { heading, subheading } = aboutData;

  return (
    <div className="about__heading-container">
      <h1 className="about__heading-name">{heading}</h1>
      <hr className="about-line" />
      <p className="about__heading-dev">{subheading}</p>
    </div>
  )
}
