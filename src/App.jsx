import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div className="grid-item skills-container" id="skills">
          <h2>Skills</h2>
          <p>
            Below are some of the tools and skill sets that I currently possess
            in my arsenal and I am still working on acquiring more, the journey
            is just beginning.
          </p>
          <hr />
          <div id="skills-div">
            <div className="skills-div-item">
              <h4>Linux</h4>
              <div className="skills-img-container">
                <img src="icons/linux-icon.svg" alt="linux-icon" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>Git</h4>
              <div className="skills-img-container">
                <img src="./icons/git-scm-icon.svg" alt="git-scm-icon" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>Github</h4>
              <div className="skills-img-container">
                <img src="./icons/icons8-github.svg" alt="icons8-github" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>HTML5</h4>
              <div className="skills-img-container">
                <img src="./icons/w3_html5-ar21.svg" alt="HTML5" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>CSS3</h4>
              <div className="skills-img-container">
                <img src="./icons/w3_css-ar21.svg" alt="w3_css-ar21" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>JavaScript</h4>
              <div className="skills-img-container">
                <img
                  src="./icons/icons8-javascript.svg"
                  alt="JavaScript-icon"
                />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>NPM</h4>
              <div className="skills-img-container">
                <img src="./icons/icons8-npm.svg" alt="npm-icon" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>Webpack</h4>
              <div className="skills-img-container">
                <img src="./icons/js_webpack-ar21.svg" alt="Webpack-icon" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>Jest</h4>
              <div className="skills-img-container">
                <img src="./icons/jest-js-icon.png" alt="Jest-icon" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>React</h4>
              <div className="skills-img-container">
                <img src="./icons/react-js-icon.png" alt="react-icon" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>NodeJS</h4>
              <div className="skills-img-container">
                <img src="./icons/nodejs_icon.png" alt="node-icon" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>ExpressJS</h4>
              <div className="skills-img-container">
                <img src="./icons/express-js.png" alt="express-icon" />
              </div>
            </div>
            <div className="skills-div-item">
              <h4>MongoDB</h4>
              <div className="skills-img-container">
                <img src="./icons/mongodb_icon.png" alt="mongodb-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item projects-div" id="projects">
          <h2>Projects</h2>
          <p>
            Below are some of the projects that I worked on, there's a button to
            view the github repository for each project and another button to
            view the live project.
          </p>
          <hr />
          <div className="projects-grid">
            <div className="projects-grid-item">
              <h4>Shopping Cart</h4>
              <div className="project-img-container">
                <img
                  src="./projects-images/shopping-cart.jpg"
                  alt="shopping-cart"
                />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/shopping-cart">
                    Code Review
                  </a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/shopping-cart/">
                    See It Live
                  </a>
                </button>
              </div>
            </div>
            <div className="projects-grid-item">
              <h4>CV Builder</h4>
              <div className="project-img-container">
                <img src="./projects-images/cv-builder.png" alt="cv builder" />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/cv-builder">
                    Code Review
                  </a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/cv-builder/">
                    See It Live
                  </a>
                </button>
              </div>
            </div>
            <div className="projects-grid-item">
              <h4>MrovaBizHub</h4>
              <div className="project-img-container">
                <img
                  src="./projects-images/mrovaBiz.jpg"
                  alt="MrovaBizHub-image"
                />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/mrova-biz-hub">
                    Code Review
                  </a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://mrova-biz-hub.onrender.com/">See It Live</a>
                </button>
              </div>
            </div>
            <div className="projects-grid-item">
              <h4>Memory Game</h4>
              <div className="project-img-container">
                <img
                  src="./projects-images/memory-game.jpg"
                  alt="shopping-cart"
                />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/memory-game">
                    Code Review
                  </a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/memory-game/">
                    See It Live
                  </a>
                </button>
              </div>
            </div>

            <div className="projects-grid-item">
              <h4>To-Do-App</h4>
              <div className="project-img-container">
                <img src="./projects-images/to-do.png" alt="To-Do-App" />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/to-do-app">Code Review</a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/to-do-app/">See It Live</a>
                </button>
              </div>
            </div>

            <div className="projects-grid-item">
              <h4>Restaurant Page</h4>
              <div className="project-img-container">
                <img
                  src="./projects-images/restaurant.jpg"
                  alt="restaurant-page-image"
                />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/restaurant-page">
                    Code Review
                  </a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/restaurant-page/">
                    See It Live
                  </a>
                </button>
              </div>
            </div>
            <div className="projects-grid-item">
              <h4>Library</h4>
              <div className="project-img-container">
                <img src="./projects-images/library.png" alt="Library-image" />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/library">Code Review</a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/library/">See It Live</a>
                </button>
              </div>
            </div>
            <div className="projects-grid-item">
              <h4>Calculator</h4>
              <div className="project-img-container">
                <img src="./projects-images/calculator.png" alt="calculator" />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/calculator">
                    Code Review
                  </a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/calculator/">
                    See It Live
                  </a>
                </button>
              </div>
            </div>
            <div className="projects-grid-item">
              <h4>Etch-A-Sketch</h4>
              <div className="project-img-container">
                <img
                  src="./projects-images/etchasketch.png"
                  alt="Etch-A-Sketch"
                />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/etch_a_sketch">
                    Code Review
                  </a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/etch_a_sketch/">
                    See It Live
                  </a>
                </button>
              </div>
            </div>

            <div className="projects-grid-item">
              <h4>Tic-Tac-Toe</h4>
              <div className="project-img-container">
                <img src="./projects-images/tictactoe.png" alt="Tic-Tac-Toe" />
              </div>
              <div className="projects-btns-div">
                <button className="code-review-btn projects-btn">
                  <a href="https://github.com/DeeBest/tic-tac-toe">
                    Code Review
                  </a>
                </button>
                <button className="see-it-live-btn projects-btn">
                  <a href="https://deebest.github.io/tic-tac-toe/">
                    See It Live
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item contact-div" id="contact">
          <h2>Get In Touch</h2>
          <p>
            Don't be a stranger, get in touch with me below. Looking forward
            hearing from you.
          </p>
          <hr />
          <div className="contact-icons">
            <a href="mailto:simphiwedladla8@gmail.com">
              <img
                className="contact-icon"
                src="./icons/contact-icons/gmail.png"
                alt="gmail-icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/">
              <img
                className="contact-icon"
                src="./icons/contact-icons/linkedin.png"
                alt="linkedin-icon"
              />
            </a>
            <a href="https://github.com/DeeBest">
              <img
                className="contact-icon"
                src="./icons/contact-icons/github.webp"
                alt="github-icon"
              />
            </a>
          </div>
        </div>
      </main>
      <footer>
        <p>
          Created by &copy;Simphiwe
          <script>document.write(new Date().getFullYear());</script>.
        </p>
      </footer>
    </div>
  );
};
export default App;
