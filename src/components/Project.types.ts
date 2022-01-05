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

export type Task = {
    status: number,
    id: string,
    title: string,
    desc: string,
    dueDate: string,
    priority: number,
    notes?: string,
    checklist?: Array<string>
}
