import React, { useContext } from "react"
import * as styled from "./Header.styles"
import {CurrPContext, ProjectsContext} from "../../App";

const Header: React.FC = () => {
    const projectsContext = useContext(ProjectsContext)
    const currPContext = useContext(CurrPContext)

    const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>): any => {
        e.preventDefault()

        const trackDisplayedProject = (id: string) => {
            for (let i = 0; i < projectsContext.projectsState.length; i++) {
                if (projectsContext.projectsState[i].id === id) {
                    const formatData = {
                        type: "switchCurr",
                        data: projectsContext.projectsState[i]
                    }
                   currPContext.currPDispatch(formatData)
                }
            }
        }
        trackDisplayedProject(e.target.value)
    }


    return (
        <styled.HeaderStyle>
            <div>
                <label htmlFor="projects">Select Project</label>
                <select name="projects"
                        onChange={handleSelectedChange}
                        value={currPContext.currPState.value}
                >
                    {projectsContext.projectsState.map( (project: any) => {
                        return (
                            <option key={project.id}
                                    value={project.id}
                            >
                                {project.title}
                            </option>
                        )
                    })}

                </select>
            </div>
            <h1>To Do-ify</h1>
        </styled.HeaderStyle>
    )
}

export default Header