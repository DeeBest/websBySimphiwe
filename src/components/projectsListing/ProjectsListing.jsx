import ProjectCard from '../projectCard/ProjectCard';
import './projectsListing.css';
import { useState, useContext, useEffect } from 'react';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

const ProjectsListing = ({ isHome }) => {
  const { projects } = useContext(Context);
  const [displayProjects, setDisplayProjects] = useState([...projects]);
  const categories = ['All'];

  function handleFilterCategories() {
    projects.filter((project) => {
      if (!categories.includes(project.category)) {
        categories.push(project.category);
        return categories;
      }
    });
  }
  handleFilterCategories();

  const handleFilterProjects = (projectCategory) => {
    const newList = projects.filter((project) => {
      if (project.category === projectCategory) {
        return project;
      }
      if (projectCategory === 'All') {
        return projects;
      }
    });
    setDisplayProjects(newList);
  };

  useEffect(() => {
    handleFilterProjects('All');
  }, [projects]);

  const limit = isHome ? 3 : projects.length;

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {!isHome && (
            <div id="filter-btns-container">
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleFilterProjects(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          )}
          <section id="projects-container">
            {displayProjects.slice(0, limit).map((project, index) => {
              return <ProjectCard project={project} key={index} />;
            })}
          </section>
        </div>
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
