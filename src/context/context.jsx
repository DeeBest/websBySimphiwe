import { useEffect, useState, createContext } from 'react';

import axios from 'axios';

export const Context = createContext();

const ContextProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const backendUrl = 'http://localhost:5000/api/projects';

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${backendUrl}`);
      const data = await res.data.projects;
      setProjects(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const contextValue = {
    projects,
    isLoading,
    backendUrl,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
