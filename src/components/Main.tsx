import { useEffect, useState } from "react";
import {ProjectType, Task} from "../types/Project.types";
import { Project } from "./Project";
import {initState} from "./mockStorage";

import * as styled from "../styles/MainStyle";

const Main = () => {
    const [projects, setProjects] = useState<Array<ProjectType>>([])
    const [displayedProject, setDisplayedProject] = useState(initState)

    // useEffect(() => {
    // TODO: add logic to check localStorage here
    // }, [])

    return (
       <styled.MainStyle className={"main"}>
           <Project data={initState} />
       </styled.MainStyle>
   )
}

export default Main