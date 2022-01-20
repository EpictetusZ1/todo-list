import React, {useContext, useState} from "react";
import { ITaskCardProps } from "../../types/Project.types";
import * as styled from "./TaskCard.styles";
import { CurrPContext, ProjectsContext } from "../Main/Main";

export const TaskCard: React.FC<ITaskCardProps> = ({data} ) => {
    const currProjectContext = useContext(CurrPContext)
    const projectsContext = useContext(ProjectsContext)

    const [status, setStatus] = useState<string>(data.status)

    const removeItem = (): void => {
        const removeTask = {
            type: "removeTask",
            taskID: data.id,
        }
        currProjectContext.currPDispatch(removeTask) // Remove item from currProject

        const newProjectState = {
            type: "updateCurrInArr",
            data: currProjectContext.currPState,
            taskID: data.id
        }
        projectsContext.projectsDispatch(newProjectState) // Reflect change in project array
    }

    const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault()
        setStatus(e.target.value)

        const newStatusState = {
            type: "changeStatus",
            data: e.target.value,
            taskID: data.id
        }
        currProjectContext.currPDispatch(newStatusState)

        const newProjectState = {
            type: "updateStatus",
            data: e.target.value,
            taskID: data.id,
            projectID: currProjectContext.currPState.id
        }
        projectsContext.projectsDispatch(newProjectState) // Reflect change in project array
    }

    return (
        <styled.TaskCardStyle>
            <styled.CardHeader>
                <h4>{data.title}</h4>
                <button onClick={removeItem}>
                    X
                </button>
            </styled.CardHeader>
            <styled.CardSection>
                <h6><b>Due:</b><br/>{data.dueDate}</h6>
                <p><b>Description:</b> <br/>{data.desc}</p>
            </styled.CardSection>
            <p><b>Priority:</b><br/>{data.priority}</p>

            <styled.CardSection>
                <label htmlFor="taskStatus">Update Status: </label>
                <select name="taskStatus"
                        onChange={handleChangeStatus}
                        value={status}
                >
                    <option value={"noStatus"}>No Status</option>
                    <option value={"doing"}>Doing</option>
                    <option value={"done"}>Done</option>

                </select>

            </styled.CardSection>

        </styled.TaskCardStyle>
    )
}
