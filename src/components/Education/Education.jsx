import aboutData from "../../assets/aboutData"

export const Education = () => {
  const { presentation } = aboutData

  return (
    <div className="about__education-container">
      <p className="about__subheading">Education</p>
      <ul className="about__education-list">
        {/* {aboutData.education.map((education, index) => (
        <ItemBox key={index} education={education}/>
      ))} */}
        <p className="about__presentation">{presentation}</p>
      </ul>
    </div>

  )
}
