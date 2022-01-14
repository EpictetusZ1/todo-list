import React, {useContext } from "react"
import * as styled from "./Header.styles"
import { CurrPContext, ProjectsContext } from "../../App";


const Header: React.FC = () => {
    const projectsContext = useContext(ProjectsContext)
    const currPContext = useContext(CurrPContext)

    const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>): any => {
        e.preventDefault()

        const trackDisplayedProject = (id: string) => {
            for (let i = 0; i < projectsContext.projectsState.projects.length; i++) {
                if (projectsContext.projectsState.projects[i].id === id) {
                    const formatData = {
                        type: "switchCurr",
                        data: projectsContext.projectsState.projects[i]
                    }

                   currPContext.currPDispatch(formatData)
                }
            }
        }
        trackDisplayedProject(e.target.value)
    }


    return (
        <styled.HeaderStyle>
            <styled.ProjectSelectStyle>
                <label htmlFor="projects">Select A Project: </label>
                <select name="projects"
                        onChange={handleSelectedChange}
                        value={currPContext.currPState.id}
                >
                    {projectsContext.projectsState.projects.map( (project: any) => {
                        return (
                            <option key={project.id}
                                    value={project.id}
                            >
                                {project.title}
                            </option>
                        )
                    })}

                </select>
            </styled.ProjectSelectStyle>
            <h1>To Do-ify</h1>
        </styled.HeaderStyle>
    )
}

export default Header