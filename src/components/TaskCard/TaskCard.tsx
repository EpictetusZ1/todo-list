import React, {useContext } from "react";
import { ITaskCardProps } from "../../types/Project.types";
import * as styled from "./TaskCard.styles";
import { CurrPContext, ProjectsContext } from "../../App";

export const TaskCard: React.FC<ITaskCardProps> = ({data} ) => {
    const currProjectContext = useContext(CurrPContext)
    const projectsContext = useContext(ProjectsContext)

    const removeItem = () => {
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

    return (
        <styled.TaskCardStyle className={"taskCard"}>
            <styled.CardHeader>
                <h4>{data.title}</h4>
                <button onClick={removeItem}>
                    X
                </button>
            </styled.CardHeader>
            <h6>Due: {data.dueDate}</h6>
            <p>{data.desc}</p>
            <p>Priority: {data.priority}</p>
        </styled.TaskCardStyle>
    )
}
