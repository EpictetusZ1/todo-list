import { useEffect, useState } from "react";
import {ProjectType, Task} from "./Project.types";
import { Project } from "./Project";
import uniqid from "uniqid";
import {initState} from "./mockStorage";

const Main = () => {
    const [projects, setProjects] = useState<Array<ProjectType>>([])
    const [displayedProject, setDisplayedProject] = useState(initState)

    // useEffect(() => {
    // TODO: add logic to check localStorage here
    // }, [])

    return (
       <div className={"main"}>
           <Project data={initState} />
       </div>
   )
}

export default Main