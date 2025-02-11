import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './header.css';
import ContactIcons from '../contact-icons/ContactIcons';

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleRemoveShowNavClass = () => {
    if (window.innerWidth > 530) {
      const header = document.querySelector('header');
      header.classList.remove('show-nav-links');

      const toggleNavBtn = document.getElementById('mobile-menu-btn');
      toggleNavBtn.classList.remove('rotate-mobile-nav-btn');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleRemoveShowNavClass);

    return () => {
      window.removeEventListener('resize', handleRemoveShowNavClass);
    };
  });

  const handleShowNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <header className={showNavLinks ? 'show-nav-links' : ''}>
      <div id="logo-bars-icon-div">
        <div id="logo-container">
          <div id="logo-img-container">
            <img
              src="src/assets/profile-pic.jpg"
              alt="logo image"
              width={100}
            />
          </div>
          <svg id="logo-text" viewBox="0 0 600 200">
            <text x="90%" y="70%" textAnchor="end" className="text-body">
              SimphiweDladla
            </text>
          </svg>
        </div>
        <FaBars
          id="mobile-menu-btn"
          className={showNavLinks ? 'rotate-mobile-nav-btn' : ''}
          onClick={handleShowNavLinks}
        />
      </div>
      <div id="links-contact-icons-div">
        <ul id="nav-links">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
        </ul>
        <ContactIcons />
      </div>
    </header>
  );
};
export default Header;
