import React, { useContext, useEffect } from "react";
import * as styled from "../styles/Main.styles";
import { Project } from "./Project/Project";
import Header from "./Header/Header";
import {IProjectType} from "../types/Project.types";
import uniqid from "uniqid";
import { ProjectsContext } from "../App";

const defaultProject: IProjectType = {
    title: "New Project",
    dateCreated: new Date().toDateString(),
    items: [],
    id: uniqid.time("Project-")
}

const Main: React.FC = () => {
    // const projectsContext = useContext(ProjectsContext)
    //
    // useEffect(() => {
    //     const checkLocalStorage = () => {
    //         const isLocal = localStorage.getItem('projects')
    //         if ( isLocal !== null) {
    //             return JSON.parse(isLocal)
    //         } else {
    //             return [defaultProject]
    //         }
    //     }
    //     const dispatchData = {
    //         type: "localStorageFound",
    //         data: checkLocalStorage()
    //     }
    //     projectsContext.projectsDispatch(dispatchData)
    //
    // }, [])

    return (
        <styled.MainStyles>
            <Header />
            <Project/>
        </styled.MainStyles>
    )
}

export default Main