export interface ProjectProps {
    data: ProjectType
}

export type ProjectType = {
    title: string,
    dateCreated: string,
    items: {
        noStatus: Array<Task>,
        doing: Array<Task>,
        done: Array<Task>,
    }
    id: string,
    isCurrProject: boolean,
    addTask: (task: Task) => any
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

export interface TaskFormProps {
    addTasksSetter: (task: Task) => any
}

