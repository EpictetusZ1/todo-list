import { ProjectType, Task } from "../types/Project.types";
import uniqid from "uniqid";

const testItem: Task = {
    status: "noStatus",
    id: uniqid.time("task-"),
    title: "Test Task",
    desc: "Testing done here",
    dueDate: "Friday",
    priority: "low",
    notes: "Not Really"
}

const testItem3: Task = {
    status: "noStatus",
    id: uniqid.time("task-"),
    title: "Nope",
    desc: "Hello World",
    dueDate: "Someday over the rainbow",
    priority: "medium",
    notes: "Yes sir!"
}


const testItem2: Task = {
    status: "doing",
    id: uniqid.time("task-"),
    title: "Test Bravo",
    desc: "Starting to work",
    dueDate: "Saturday",
    priority: "low",
    notes: "Not Really"
}

const testItem4: Task = {
    status: "done",
    id: uniqid.time("task-"),
    title: "Test I AM DONE",
    desc: "Starting IT WORKS????",
    dueDate: "Forever",
    priority: "low",
    notes: "WOOOOOOOOOO"
}

export const initState: ProjectType = {
    title: "Test Project Alpha",
    dateCreated: "2 January 2022",
    items: [testItem, testItem3, testItem2, testItem4],
    id: uniqid.time("Project-")
}

const testItemBravo: Task = {
    status: "noStatus",
    id: uniqid.time("task-"),
    title: "Test Task for bravo project",
    desc: "Maybe it works",
    dueDate: "Summer solstice",
    priority: "low",
    notes: "Not Really"
}

const testItemCharlie: Task = {
    status: "done",
    id: uniqid.time("task-"),
    title: "Test Charlie for bravo project",
    desc: "Water Temple Difficulty TypeScript is - Yoda",
    dueDate: "Winter solstice",
    priority: "low",
    notes: "Not Really"
}


export const project2: ProjectType = {
    title: "Test Project Bravo",
    dateCreated: "20 December 2021",
    items: [testItemBravo, testItemCharlie],
    id: uniqid.time("Project-")
}
