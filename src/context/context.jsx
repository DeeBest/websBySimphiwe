import { useEffect, useState, createContext } from 'react';

import axios from 'axios';

export const Context = createContext();

const ContextProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const projectsBackendUrl = 'http://localhost:5000/api/projects';
  const skillsBackendUrl = 'http://localhost:5000/api/skills';

  const fetchResources = async () => {
    const urls = [projectsBackendUrl, skillsBackendUrl];
    try {
      const res = await Promise.all(urls.map((url) => axios.get(url)));
      const projectsData = await res[0].data.projects;
      const skillsData = await res[1].data.skills;
      setSkills(skillsData);
      setProjects(projectsData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const contextValue = {
    projects,
    setProjects,
    isLoading,
    skills,
    setSkills,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
