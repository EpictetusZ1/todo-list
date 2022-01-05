import { Task } from "./Project.types";

export const TaskCard = ( {data}: {data: Task}) => {
    return (
        <li className={"taskCard"}>
            <h4>{data.title}</h4>
            <h6>Due: {data.dueDate}</h6>
            <p>{data.desc}</p>
            <p>Priority: {data.priority}</p>
        </li>
    )
}