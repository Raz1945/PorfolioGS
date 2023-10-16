import './AppWrapper.css'

const AppWraper = ({ children }) => {
  return (
    <section className='app__wrapper'>
        {children}
    </section>
  );
}

export default AppWraper;