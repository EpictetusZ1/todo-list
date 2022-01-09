import React from "react";
import { TaskCardProps } from "../../types/Project.types";
import * as styled from "./TaskCard.styles";

export const TaskCard: React.FC<TaskCardProps> = ( {data} ) => {
    return (
        <styled.TaskCardStyle className={"taskCard"}>
            <h4>{data.title}</h4>
            <h6>Due: {data.dueDate}</h6>
            <p>{data.desc}</p>
            <p>Priority: {data.priority}</p>
        </styled.TaskCardStyle>
    )
}