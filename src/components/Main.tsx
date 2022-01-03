import React, {useEffect, useState} from "react";
import uniqid from 'uniqid';
import { ProjectInterface } from "./interfaces";
import Project from "./Project";

const Main = () => {

    const [projects, setProjects] = useState<Array<ProjectInterface>>([])

    const initState: ProjectInterface = {
        data: {
            title: "My To Do List",
            dateCreated: "2 January 2022",
            taskStates: [
                {
                    code: 0,
                    status: "No Status",
                    items: [
                        {
                            title: "Test Task",
                            desc: "Testing done here",
                            dueDate: "friday",
                            priority: 1,
                            notes: "Not Really"
                        }
                    ]
                }
            ],
            id: uniqid.time("project-"),
            isCurrProject: true
        }
    }

    const [currProject, setCurrProject] = useState(initState)

    useEffect(() => {
        //TODO: Check for project in local storage here
        setProjects([initState]) // Adding default project
    }, [])
    // TODO: Add map function to show projects in menu

    return (
       <div>
           <div>
               <Project data={currProject} />

           </div>
       </div>
   )
}

export default Main