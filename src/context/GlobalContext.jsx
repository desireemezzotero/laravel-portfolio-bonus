import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [projects, setProjects] = useState([])


  axios.get(`${import.meta.env.VITE_API_URL}`)
    .then(res =>
      setProjects(res.data.data)
    )
    .catch(error =>
      console.log(error)
    )

  const value = {
    setProjects,
    projects
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