import './button.css'

export const Button = ({ text }) => {
  return (
    <>
      <div className='class-btn-container'>
        <button className="button-62" role="button">{text}</button>
      </div>
    </>
  )
}