import React, {SetStateAction} from "react";

export interface IProjectType {
    title: string
    dateCreated: string
    items: Array<Task>
    id: string
}

export interface IProjects {
    projects: Array<IProjectType>
}

export interface IAppProps {
    localProjects: Array<IProjectType | undefined>
    usingFire?: boolean
    updateFire?: (updateFireObj: any) => void
}

export interface IAction {
    type: string,
    data: object | Task,
    payload?: object,
    taskID?: string,
    projectID?: string,
}

export interface ITaskFormProps {
    toggleForm: React.Dispatch<SetStateAction<boolean>>
}

export interface IHeaderProps {
    usingFire?: boolean
}

export interface ITaskCardProps {
    data: Task
}

export interface Task {
    status: "" | "noStatus" | "doing" | "done"
    id: string
    title: string
    desc: string
    dueDate: string
    priority:  "" | "Low" | "Medium" | "High"
}
