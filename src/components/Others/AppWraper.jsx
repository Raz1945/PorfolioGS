import './AppWraper.css'

const AppWraper = ({ children }) => {
  return (
    <section className='app__wraper'>
        {children}
    </section>
  );
}

export default AppWraper;