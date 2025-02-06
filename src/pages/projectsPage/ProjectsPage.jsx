import ProjectsListing from '../../components/projectsListing/ProjectsListing';
import './projectsPage.css';
import { useContext } from 'react';
import { Context } from '../../context/context';

const ProjectsPage = () => {
  return (
    <main id="project-page">
      <ProjectsListing />
    </main>
  );
};

export default ProjectsPage;
