import ProjectCard from '../projectCard/ProjectCard';
import './projectsListing.css';
import { useState, useContext } from 'react';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

const ProjectsListing = ({ isHome }) => {
  const { projects } = useContext(Context);

  // const [featuredProjects, setFeaturedProjects] = useState([]);

  // if (projects.length > 3 && isHome) {
  //   setFeaturedProjects(projects.slice(0, 3));
  // } else {
  //   setFeaturedProjects(projects);
  // }

  return (
    <section id="projects-listing-container">
      <div id="projects-listing-header">
        <h2>My Projects</h2>
        <hr />
        <p>
          Below are some of the projects that I worked on, there is a
          description for each project, a link to view the code on github and a
          link to the live project at the back of the card when you hover or
          click a project card.
        </p>
      </div>
      {projects.length <= 0 ? (
        <section id="no-projects-sec">
          <FaTriangleExclamation />
          <h1 id="no-projects-h1">
            There are currently no projects to display.
          </h1>
        </section>
      ) : (
        <section id="projects-container">
          {projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </section>
      )}
      {isHome && projects.length > 0 && (
        <button>
          <Link to="/projects">View All Projects</Link>
        </button>
      )}
    </section>
  );
};
export default ProjectsListing;
