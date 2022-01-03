
export interface ProjectInterface {
    data: {
        title: string,
        dateCreated: string,
        taskStates: Array<TaskState>,
        id: string,
        isCurrProject: boolean
    }
}

export interface TaskState {
    code: number,
    status: string,
    items: Array<Task>
}

export interface Task {
    title: string,
    desc: string,
    dueDate: string,
    priority: number,
    notes?: string,
    checklist?: Array<string>
}
