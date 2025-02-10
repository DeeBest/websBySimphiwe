import './home.css';
import Hero from '../../components/hero/Hero';
import ProjectsListing from '../../components/projectsListing/ProjectsListing';
import Skills from '../../components/skills/Skills';
import { useState, useContext } from 'react';
import { Context } from '../../context/context';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';

const Home = () => {
  const [isHome, setIsHome] = useState(true);
  const { isLoading } = useContext(Context);

  return (
    <main id="home">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Hero />
          <ProjectsListing isHome={isHome} />
          <Skills isHome={isHome} />
        </>
      )}
    </main>
  );
};
export default Home;
