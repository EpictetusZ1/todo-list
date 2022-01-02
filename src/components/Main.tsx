import React, {useEffect, useState} from "react";
import uniqid from 'uniqid';

const Main = () => {

    const [projects, setProjects] = useState<Array<Project>>([])

    const initState: Project = {
        title: "My To Do List",
        dateCreated: "2 January 2022",
        items: [],
        id: uniqid.time("project-"),
        currProject: true
    }

    useEffect(() => {
        //TODO: Check for project in local storage here
        setProjects([initState])
        console.log(projects)
    }, [])

    interface Project {
        title: string,
        dateCreated: string,
        items: Array<object>,
        id: string,
        currProject: boolean
    }

    return (
       <div>
           <div>
               Menu
               ...
           </div>
       </div>
   )
}

export default Main