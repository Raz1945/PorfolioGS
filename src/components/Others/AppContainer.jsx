import './AppContainer.css'

const AppContainer = ({ children }) => {
  return (
    <div className='appContainer'>
      <div className='appContainer__content'>
        {children}
      </div>
    </div>
  );
}

export default AppContainer;