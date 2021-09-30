let increment = 1

export class ProjectBoard {
    title = ""
    dateCreated
    items = []
    taskState = [
        {code: 0, status: "No Status", subItems: []},
        {code: 1, status: "Doing", subItems: []},
        {code: 2, status: "Done", subItems: []},
        ]
    constructor(title, dateCreated, refNum = increment) {
        this.title = title
        this.dateCreated = dateCreated
        this.refNum = increment++
        this.storageNum = increment
    }

    setLocalStorageKey() {
        increment--
        return this.storageNum
    }

    assignState(item) {
        // Assign task items to sub item arrays
        switch (item.progressState) {
            case 0:
                this.taskState[0].subItems.push(item)
                break
            case 1:
                this.taskState[1].subItems.push(item)
                break
            case 2:
                this.taskState[2].subItems.push(item)
                break
            default:
                console.log("Error at: ", this.taskState[0])
        }
    }

    addItems(arr) { // Add tasks to their appropriate parent project
        for (let i = 0; i < arr.length; i++) {
            this.items.push(arr[i])

            // Assign Task Item a status state
            this.assignState(arr[i])
        }
    }
}
