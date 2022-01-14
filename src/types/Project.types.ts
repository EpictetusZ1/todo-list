import React, {SetStateAction} from "react";

export type ProjectType = {
    title: string,
    dateCreated: string,
    items: Array<Task>,
    id: string
}

export interface TaskFormProps {
    toggleForm: React.Dispatch<SetStateAction<boolean>>
}



export interface TaskCardProps {
    data: Task
}

export type Task = {
    status: "" | "noStatus" | "doing" | "done",
    id: string,
    title: string,
    desc: string,
    dueDate: string,
    priority:  "" | "low" | "medium" | "High"
    notes?: string,
    checklist?: Array<string>
}
