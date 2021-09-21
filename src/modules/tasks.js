export class Task {
    taskID= 0
    parentRef = 0
    desc = ""
    constructor(name, desc, ID, parentRef) {
        this.name = name
        this.desc = desc
        this.taskID = ID
        this.parentRef = parentRef
    }

}