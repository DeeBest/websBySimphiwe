import { FaBars, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './header.css';

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
          <h1>Simphiwe Dladla</h1>
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>
        <ul id="nav-icons">
          <li>
            <Link to="mailto:simphiwedladla8@gmail.com">
              <FaEnvelope />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/DeeBest">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/">
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
