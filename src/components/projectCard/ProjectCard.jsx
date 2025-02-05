import './projectCard.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-front">
        <div className="img-container">
          <img src={project.imgUrl} alt="project screenshot" />
        </div>
        <div className="project-name-container">
          <h3>{project.projectName}</h3>
          <hr />
        </div>
        <div className="project-desc">
          <p>{project.projectDesc.slice(0, 90)}...</p>
        </div>
      </div>
      <div className="card-back">
        <div className="card-back-header">
          <h1>{project.projectName}</h1>
          <p>{project.category}</p>
        </div>
        <div className="projectDesc-div">
          <hr />
          <p>{project.projectDesc}</p>
        </div>
        <div className="tech-div">
          <h3>Tech Stack:</h3>
          <ul>
            {project.usedTechStack.map((tech, index) => {
              return <li key={index}>{tech}</li>;
            })}
          </ul>
        </div>
        <div className="links-div">
          <Link to={project.codeReviewLink}>
            <FaGithub className="icon" />
          </Link>
          <Link to={project.livePreviewLink}>
            <FaExternalLinkAlt className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
