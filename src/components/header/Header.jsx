import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './header.css';
import ContactIcons from '../contact-icons/ContactIcons';
import resume from '../../../public/wSimphiwe-Dladla.pdf';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleRemoveShowNavClass = () => {
    if (window.innerWidth > 945) {
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

  const downloadPdf = () => {
    // Create an <a> element
    const link = document.createElement('a');
    link.href = `${resume}`;
    link.download = 'Simphiwe-Dladla-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
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
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="#"
              onClick={downloadPdf}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <FaDownload /> Resume
            </NavLink>
          </li>
        </ul>
        {/* <button onClick={downloadPdf}>Download Resume</button> */}
        <ContactIcons />
      </div>
    </header>
  );
};
export default Header;
