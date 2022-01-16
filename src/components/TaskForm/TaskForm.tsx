import React, {useContext, useEffect, useState} from "react";
import {Task, ITaskFormProps} from "../../types/Project.types";
import * as styled from "./TaskForm.styles";
import {CurrPContext, ProjectsContext} from "../../App";
import uniqid from "uniqid";

export const TaskForm: React.FC<ITaskFormProps> = ({toggleForm} ) => {
    const projectsContext = useContext(ProjectsContext)
    const currPContext = useContext(CurrPContext)

    const initFormState: Task = {
        status: "noStatus",
        id: uniqid.time("task-"),
        title: "",
        desc: "",
        dueDate: "",
        priority: "Low",
    }

    const [formPayload, setFormPayload] = useState(initFormState)

    useEffect(() => {
        setFormPayload(initFormState)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setFormPayload(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setFormPayload(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toggleForm((prevState: boolean) => !prevState)

        const dispatchAddTask = {
            type: "addTask",
            data: formPayload,
            projectID: currPContext.currPState.id
        }

        projectsContext.projectsDispatch(dispatchAddTask) // Reflect new task in projects arr
        currPContext.currPDispatch(dispatchAddTask) // Add item to currProject
    }

    return (
        <styled.TaskFormStyles >
            <styled.FormHeader>
                <p>Add A New Task:</p>
                <button onClick={() => toggleForm(false)}>
                    X</button>
            </styled.FormHeader>

            <form autoComplete="off"
                  onSubmit={handleSubmit}
            >
                <styled.FormElStyle>
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                           name="title"
                           value={formPayload.title}
                           required={true}
                           onChange={handleChange}
                    />
                </styled.FormElStyle>

                <styled.FormElStyle>
                    <label htmlFor="desc">Description:</label>
                    <input type="text"
                           name="desc"
                           value={formPayload.desc}
                           required={true}
                           onChange={handleChange}
                    />
                </styled.FormElStyle>

                <styled.FormElStyle>
                    <label htmlFor="dueDate">Due Date:</label>
                    <input type="text"
                           name="dueDate"
                           value={formPayload.dueDate}
                           onChange={handleChange}
                    />
                </styled.FormElStyle>

                <styled.FormElStyle>
                    <label htmlFor="status">Status:</label>
                    <select name="status"
                            value={formPayload.status}
                            onChange={handleSelectedChange}
                    >
                        <option value="noStatus">No Status</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </styled.FormElStyle>

                <styled.FormElStyle>
                    <label htmlFor="priority">Priority:</label>
                    <select name="priority"
                            value={formPayload.priority}
                            onChange={handleSelectedChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </styled.FormElStyle>

                <styled.FormElStyle>
                    <styled.SubmitButton type="submit">Add Task</styled.SubmitButton>
                </styled.FormElStyle>

            </form>
        </styled.TaskFormStyles>

    )
}