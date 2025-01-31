const Header = () => {
  return (
    <header>
      <div id="logo-div">
        <div className="logo-img-container">
          <img src="profile-pic.jpg" alt="my picture" />
        </div>
        <h1>
          <span className="gradient-text my-name">Simphiwe</span>
        </h1>
      </div>
      <section className="dark-mode-container">
        <input type="checkbox" name="dark-mode" id="dark-mode-input" />
        <label for="dark-mode-input" id="dark-mode-label">
          <div id="circle"></div>
        </label>
      </section>
      <nav className="navbar">
        <a href="#" className="toggle-btn">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

        <ul className="navbar-links desktop-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="navbar-links mobile-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
