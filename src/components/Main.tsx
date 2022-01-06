import React, { useEffect, useState } from "react";
import { ProjectType, Task } from "../types/Project.types";
import { Project } from "./Project/Project";
import { initState } from "./mockStorage";

import * as styled from "../styles/Main.styles";

const Main: React.FC = () => {
    const [projects, setProjects] = useState<Array<ProjectType>>([])
    const [displayedProject, setDisplayedProject] = useState(initState)

    // useEffect(() => {
    // TODO: add logic to check localStorage here
    // }, [])

    return (
       <styled.MainStyles className={"main"}>
           <Project data={initState} />
       </styled.MainStyles>
   )
}

export default Main