import React, {useContext, useState} from 'react';
import * as styled from "./ProjectForm.styles"
import {IProjectType, ITaskFormProps} from "../../types/Project.types";
import uniqid from "uniqid";
import {ProjectsContext} from "../../App";

const ProjectForm: React.FC<ITaskFormProps> = ( {toggleForm} ) => {
    const projectsContext = useContext(ProjectsContext)

    const initFormState: IProjectType = {
        title: "",
        dateCreated: new Date().toDateString(),
        items: [],
        id: uniqid.time("Project-")
    }

    const [PFormPayload, setPFormPayload] = useState(initFormState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setPFormPayload(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toggleForm((prevState: boolean) => !prevState)

        const dispatchAddTask = {
            type: "addProject",
            data: PFormPayload
        }

        projectsContext.projectsDispatch(dispatchAddTask) // Reflect new task in projects arr
    }

    return (
        <styled.ProjectFormStyles >
            <styled.FormHeader>
                <p>Create A New Project:</p>
                <button onClick={() => toggleForm(false)}>
                    X</button>
            </styled.FormHeader>

            <form autoComplete="off"
                  onSubmit={handleSubmit}
            >
                <styled.FormElStyle>
                    <label htmlFor="title">Project Title:</label>
                    <input type="text"
                           name="title"
                           placeholder="New Project"
                           value={PFormPayload.title}
                           required={true}
                           onChange={handleChange}
                    />
                </styled.FormElStyle>

                <styled.FormElStyle>
                    <styled.SubmitButton type="submit">Add Project</styled.SubmitButton>
                </styled.FormElStyle>

            </form>
        </styled.ProjectFormStyles>
    );
};

export default ProjectForm;