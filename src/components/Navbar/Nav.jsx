import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { NavbarItemNav } from "./components/NavbarItemNav";

import '../../styles/Navbar.css'

const Navbar = () => {
  //...funciones
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "1":
          navigate("/main");
          break;
        case "2":
          navigate("/projects");
          break;
        case "3":
          navigate("/about_me");
          break;
        case "4":
          navigate('/resources');
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <nav aria-label="Menú de navegación principal" className="nav">
      <div className='nav__content'>
        <div className="nav__toggle">
          <ul className='nav__menu' id='nav-menu'>
            <NavbarItemNav route='main' num='01' text='home' />
            <NavbarItemNav route='projects' num='02' text='projects' />
            <NavbarItemNav route='about_me' num='03' text='about me' />
            <NavbarItemNav route='resources' num='04' text='resources' />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
