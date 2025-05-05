import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react"

function HomePage() {

  const { projects, setProjects } = useGlobalContext()
  useEffect(setProjects, []);

  return (
    <div>
      {projects?.map(project =>
        <h1 key={project.id}>{project.title}</h1>
      )}
    </div>
  );

}

export default HomePage