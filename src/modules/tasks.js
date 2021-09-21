export class Task {
    #taskID     // This is private so that only the Task class can delete itself.
    parentRef = 0
    desc = ""
    constructor(name, desc, ID, parentRef) {
        this.name = name
        this.desc = desc
        this.#taskID = ID
        this.parentRef = parentRef
    }

}