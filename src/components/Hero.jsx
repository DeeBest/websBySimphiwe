const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="about-div">
        <h2>Hi, I'm Simphiwe.</h2>
        <hr />
        <h1 className="gradient-text">A Web Developer</h1>
        <p>
          I work with HTML, CSS, JavaScript, React, Node, Webpack, GIT, Github,
          Jest, Linux and NPM, I have built and deployed multiple projects, this
          is one of them.
        </p>
        <button className="hero-btn">
          <a href="#contact">Contact</a>
        </button>
      </div>
      <div className="hero-contact-icons-div">
        <div className="hero-img-div">
          <img src="profile-pic.jpg" alt="my picture" />
        </div>
        <div className="contact-icons">
          <a href="mailto:simphiwedladla8@gmail.com">
            <img
              className="contact-icon"
              src="src/assets/icons/contact-icons/gmail.png"
              alt="gmail-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/">
            <img
              className="contact-icon"
              src="src/assets/icons/contact-icons/linkedin.png"
              alt="linkedin-icon"
            />
          </a>
          <a href="https://github.com/DeeBest">
            <img
              className="contact-icon"
              src="src/assets/icons/contact-icons/github.webp"
              alt="github-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
