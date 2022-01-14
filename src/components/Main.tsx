import React, { useContext, useEffect } from "react";
import * as styled from "../styles/Main.styles";
import { Project } from "./Project/Project";
import Header from "./Header/Header";
import {ProjectType} from "../types/Project.types";
import uniqid from "uniqid";
import { ProjectsContext } from "../App";

const defaultProject: ProjectType = {
    title: "New Project",
    dateCreated: "2 January 2022",
    items: [],
    id: uniqid.time("Project-")
}

const Main: React.FC = () => {
    const projectsContext = useContext(ProjectsContext)

    useEffect(() => {
        const checkLocalStorage = () => {
            let isLocal = localStorage.getItem('projects')
            if ( isLocal !== null) {
                return JSON.parse(isLocal || "")  // Redundant variable - TypeScript being picky on string | null
            } else {
                return [defaultProject]
            }
        }
        const dispatchData = {
            type: "localStorageFound",
            data: checkLocalStorage()
        }
        projectsContext.projectsDispatch(dispatchData)

    }, [])

    return (
        <styled.MainStyles>
            <Header />
            <Project/>
        </styled.MainStyles>
    )
}

export default Main