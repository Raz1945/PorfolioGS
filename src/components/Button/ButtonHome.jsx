import './ButtonHome.css';

const ButtonHome = ({ text, linkTo }) => {
  return (
    <div className='class-btn-container'>
      <a href={linkTo} className="button-62" role="button">
        {text}
      </a>
    </div>
  );
};

export default ButtonHome;
