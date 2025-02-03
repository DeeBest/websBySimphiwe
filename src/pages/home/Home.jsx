import './home.css';
import Hero from '../../components/hero/Hero';
import ProjectsListing from '../../components/projectsListing/ProjectsListing';

const Home = () => {
  return (
    <main id="home">
      <Hero />
      <ProjectsListing />
    </main>
  );
};
export default Home;
