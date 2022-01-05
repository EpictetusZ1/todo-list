import { TaskProps } from "../types/Project.types";
import * as styled from "../styles/TaskCardStyle";

export const TaskCard = ( {data}: TaskProps ) => {
    return (
        <styled.TaskCardStyle className={"taskCard"}>
            <h4>{data.title}</h4>
            <h6>Due: {data.dueDate}</h6>
            <p>{data.desc}</p>
            <p>Priority: {data.priority}</p>
        </styled.TaskCardStyle>
    )
}