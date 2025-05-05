import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"

function Table() {

  const { projects } = useGlobalContext()

  return (
    <>
      <div className="bg-black h-screen ">
        <div className="container mx-auto pt-6">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-center">All project</h1>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray">
              <thead className="text-xs uppercase bg-slate-300">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Technology
                  </th>
                  <th scope="col" className="px-6 py-3">
                    View
                  </th>
                </tr>
              </thead>

              <tbody>
                {projects?.map(project =>
                  <tr className="bg-gray-900 border-b border-gray-200" key={project.id} >

                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap" >
                      {project.title}
                    </th>


                    <td className="px-6 py-4 text-white">
                      {project.type.title_type}
                    </td>


                    <td className="px-6 py-4">

                      {project.technologies?.length > 0 ?
                        <div className="text-white">
                          <ul>
                            {project.technologies.map(tech =>
                              <li key={tech.id}>
                                {tech.title_technology}
                              </li>
                            )}
                          </ul>
                        </div> : ''
                      }
                    </td>


                    <td className="px-6 py-4">
                      <Link to={`project/${project.id}`} className="text-white ">
                        <svg className="w-[30px] fill-[#ffffff] hover:fill-lime-400 hover:scale-150 transition-transform duration-300" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                        </svg>
                      </Link>
                    </td>

                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div >

    </>
  )
}

export default Table