import {IProjects, Task} from "../../types/Project.types";
import uniqid from "uniqid";

const testItem: Task = {
    status: "noStatus",
    id: uniqid.time("task-"),
    title: "Add your To-Dos here!",
    desc: "Add a description here",
    dueDate: "Friday",
    priority: "Medium"
}

export const initStateBlank: IProjects = {
    projects: [{
        title: "To Do",
        dateCreated: new Date().toDateString(),
        items: [testItem],
        id: uniqid.time("Project-")
    }]
}