import { NavLink, useLocation } from "react-router-dom";

export const NavbarItemNav = ({ num, text, route }) => {
  const location = useLocation();
  const isActive = location.pathname === `/${route}`;

  return (
    <li className='nav__item'>
      <NavLink 
        to={`/${route}`} 
        className={isActive ? "nav__link nav__link-active" : "nav__link"}
        aria-current={isActive ? "page" : null} // Indica la página actual
        role="menuitem" // Indica que es un elemento de menú
      >
        <span className='nav__num' aria-hidden="true">{num}</span>
        <span className='nav__text' aria-hidden="true">{text}</span>
      </NavLink>
    </li>
  );
};
