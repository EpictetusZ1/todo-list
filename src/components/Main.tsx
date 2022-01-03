import React, {useEffect, useState} from "react";
import { ProjectInterface, Task } from "./interfaces";
import Project from "./Project";
import { initState } from "./mockStorage";

const Main = () => {

    const [projects, setProjects] = useState<Array<ProjectInterface>>([])
    const [currProject, setCurrProject] = useState(initState)

    useEffect(() => {
        const sortItems = (currProject: ProjectInterface) => {
            currProject.items.map( (item) => {
                switch (item.status) {
                    case 0:
                        setCurrProject(prevState => ({
                            ...prevState, sorted: [...prevState["sorted"][0]]
                        }))
                        break
                    default: return currProject
                }

            })
        }
        sortItems(currProject)
    }, [])

    return (
       <div>
           <div>
               <Project data={currProject} />
           </div>
       </div>
   )
}

export default Main