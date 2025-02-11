//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

//pages
import Home from './pages/home/Home';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import SkillsPage from './pages/skillsPage/SkillsPage';
import ErrorPage from './pages/errorPage/ErrorPage';

import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';

const App = () => {
  return (
    <>
      <LoadingSpinner />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
