import './home.css';
import Hero from '../../components/hero/Hero';
import ProjectsListing from '../../components/projectsListing/ProjectsListing';
import Skills from '../../components/skills/Skills';
import { useState } from 'react';

const Home = () => {
  const [isHome, setIsHome] = useState(true);

  return (
    <main id="home">
      <Hero />
      <ProjectsListing isHome={isHome} />
      <Skills isHome={isHome} />
    </main>
  );
};
export default Home;
