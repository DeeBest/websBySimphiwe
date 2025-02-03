import './home.css';
import Hero from '../../components/hero/Hero';
import ProjectsListing from '../../components/projectsListing/ProjectsListing';
import Skills from '../../components/skills/Skills';

const Home = () => {
  return (
    <main id="home">
      <Hero />
      <ProjectsListing />
      <Skills />
    </main>
  );
};
export default Home;
