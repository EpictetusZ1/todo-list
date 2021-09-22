export class Task {
    name = ""
    desc = ""
    taskID= 0
    parentRef = 0
    progressState = 0
    constructor(name, desc, ID, parentRef, progressState = 0) {
        this.name = name
        this.desc = desc
        this.taskID = ID
        this.parentRef = parentRef
    }

}