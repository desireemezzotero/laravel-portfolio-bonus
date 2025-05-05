import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

function ProjectShow() {
  const { id } = useParams()
  const { project, getProjectById, setProject } = useGlobalContext()


  useEffect(() => {
    getProjectById(id)
  }, [])

  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto pt-6">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-center">Project {project?.title}</h1>

          <div className="max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-sm">
            <img className="rounded-t-lg w-full" src={project.image} alt="" />

            <div className="p-5">

              {project?.technologies?.length > 0 ?
                <div className="flex">
                  <p className="mb-3 text-gray-200 font-semibold">Technology:</p>
                  {project?.technologies?.map(tech =>
                    <p className="mb-3 text-gray-400 font-normal" key={project.id}>
                      {tech?.title_technology}
                    </p>
                  )}
                </div> : ''
              }

              <div className="flex">
                <p className="mb-3 text-gray-200 font-semibold">Type:</p>
                <p className="mb-3 text-gray-400 font-normal">{project?.type?.title_type} </p>
              </div>

              <div className="flex">
                <p className="mb-3 text-gray-200 font-semibold">Description:</p>
                <p className="mb-3 text-gray-400 font-normal">{project?.description} </p>
              </div>
            </div>
          </div >
        </div >
      </div >


    </>
  )
}

export default ProjectShow