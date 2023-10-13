import { images } from "../../../assets/images"

export const HomeImg = () => {
  return (
    <picture className='home__picture'>
      <img className='home__picture-img' src={images.pictureOfMe} alt="Picture of Me" />
    </picture>
  )
}
