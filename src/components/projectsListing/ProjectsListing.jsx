import ProjectCard from '../projectCard/ProjectCard';
import './projectsListing.css';
import { useState } from 'react';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProjectsListing = ({ isHome }) => {
  const [projects, setProjects] = useState([
    {
      projectName: 'shopping cart',
      projectDesc: 'A react project with multiple pages',
      codeReviewLink: 'https://github.com/DeeBest/shopping-cart',
      livePreviewLink: 'https://deebest.github.io/shopping-cart/',
      imgUrl: 'src/assets/projects-images/shopping-cart.jpg',
      usedTechStack: ['reactJS', 'css', 'html', 'javascript'],
      category: 'frontend',
    },
    {
      projectName: 'shopping cart',
      projectDesc: 'A react project with multiple pages',
      codeReviewLink: 'https://github.com/DeeBest/shopping-cart',
      livePreviewLink: 'https://deebest.github.io/shopping-cart/',
      imgUrl: 'src/assets/projects-images/shopping-cart.jpg',
      usedTechStack: ['reactJS', 'css', 'html', 'javascript'],
      category: 'backend',
    },
    {
      projectName: 'shopping cart',
      projectDesc: 'A react project with multiple pages',
      codeReviewLink: 'https://github.com/DeeBest/shopping-cart',
      livePreviewLink: 'https://deebest.github.io/shopping-cart/',
      imgUrl: 'src/assets/projects-images/shopping-cart.jpg',
      usedTechStack: ['reactJS', 'css', 'html', 'javascript'],
      category: 'full-stack',
    },
    {
      projectName: 'shopping cart',
      projectDesc: 'A react project with multiple pages',
      codeReviewLink: 'https://github.com/DeeBest/shopping-cart',
      livePreviewLink: 'https://deebest.github.io/shopping-cart/',
      imgUrl: 'src/assets/projects-images/shopping-cart.jpg',
      usedTechStack: ['reactJS', 'css', 'html', 'javascript'],
      category: 'frontend',
    },
    {
      projectName: 'shopping cart',
      projectDesc: 'A react project with multiple pages',
      codeReviewLink: 'https://github.com/DeeBest/shopping-cart',
      livePreviewLink: 'https://deebest.github.io/shopping-cart/',
      imgUrl: 'src/assets/projects-images/shopping-cart.jpg',
      usedTechStack: ['reactJS', 'css', 'html', 'javascript'],
      category: 'backend',
    },
    {
      projectName: 'shopping cart',
      projectDesc: 'A react project with multiple pages',
      codeReviewLink: 'https://github.com/DeeBest/shopping-cart',
      livePreviewLink: 'https://deebest.github.io/shopping-cart/',
      imgUrl: 'src/assets/projects-images/shopping-cart.jpg',
      usedTechStack: ['reactJS', 'css', 'html', 'javascript'],
      category: 'full-stack',
    },
  ]);

  const [featuredProjects, setFeaturedProjects] = useState(
    isHome ? projects.slice(0, 3) : projects
  );

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
      {featuredProjects.length <= 0 ? (
        <section id="no-projects-sec">
          <FaTriangleExclamation />
          <h1 id="no-projects-h1">
            There are currently no projects to display.
          </h1>
        </section>
      ) : (
        <section id="projects-container">
          {featuredProjects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </section>
      )}
      {isHome && featuredProjects.length > 0 && (
        <button>
          <Link to="/projects">View All Projects</Link>
        </button>
      )}
    </section>
  );
};
export default ProjectsListing;
