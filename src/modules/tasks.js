export class Task {
    #taskID
    refBoard = 0
    constructor(name, desc, ID, parentRef) {
        this.name = name
        this.desc = desc
        this.#taskID = ID
        this.parentRef = parentRef
    }

}