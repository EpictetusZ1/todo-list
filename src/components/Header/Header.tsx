import React, {useContext, useState} from "react"
import { CurrPContext, ProjectsContext } from "../Main/Main";
import ProjectForm from "../ProjectForm/ProjectForm";
import {IHeaderProps, IProjectType} from "../../types/Project.types";
import * as styled from "./Header.styles"
import {SignOut} from "../Firebase/Firebase";

const Header: React.FC<IHeaderProps> = ({usingFire}) => {
    const projectsContext = useContext(ProjectsContext)
    const currPContext = useContext(CurrPContext)
    const [showPForm, setShowPForm] = useState<boolean>(false)

    const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault()
        const trackDisplayedProject = (id: string): void => {
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
            <div>
                <h1>To Do-ify</h1>
            </div>
            <styled.ProjectSelectStyle>
                <label htmlFor="projects">Select A Project: </label>
                <select name="projects"
                        onChange={handleSelectedChange}
                        value={currPContext.currPState.id}
                >
                    {
                        projectsContext.projectsState.projects.map( (project: IProjectType) => {
                            return (
                                <option key={project.id}
                                        value={project.id}
                                >
                                    {project.title}
                                </option>
                            )})
                    }
                </select>
                { showPForm ? <ProjectForm toggleForm={setShowPForm} />
                    :
                    <styled.AddProjectBtn  onClick={ () => setShowPForm(prevState => !prevState) }>
                        New Project
                    </styled.AddProjectBtn>
                }
            </styled.ProjectSelectStyle>
            <div>
                { usingFire && <SignOut /> }
            </div>
        </styled.HeaderStyle>
    )
}

export default Header