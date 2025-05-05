import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [projects, setProjects] = useState([])
  const [project, setProject] = useState([])
  const apiUrl = 'http://127.0.0.1:8000/api/project'

  useEffect(() => {
    axios.get(apiUrl)
      .then(res => {
        console.log("Data from backend:", res.data);
        setProjects(res.data.data);
      })
      .catch(err => {
        console.error("Axios Error:", err);
      });
  }, []);

  const getProjectById = (id) => {
    axios.get(`${apiUrl}/${id}`)
      .then(res => {
        setProject(res.data.data);
      })
      .catch(err => {
        console.error("Error fetching project:", err);
      });
  }

  const value = {
    setProjects,
    projects,
    getProjectById,
    project,
    setProject
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  useGlobalContext,
  GlobalProvider
}