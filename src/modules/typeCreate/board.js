
export class ProjectBoard {
    title = ""
    dateCreated
    refNum = 0
    items = []
    taskState = [
        {code: 0, status: "No Status", subItems: []},
        {code: 1, status: "Doing", subItems: []},
        {code: 2, status: "Done", subItems: []},
        ]
    constructor(title, dateCreated) {
        this.title = title
        this.dateCreated = dateCreated
        this.refNum = this.assignRefNum()
    }

    getStuff() {
        return this.title + "Called from class method"
    }

    assignRefNum() {
       return Math.floor(100 + (Math.random() * 100) + 1)
    }

    setLocalStorageKey() {
        return this.refNum
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
                console.log(this.taskState[0])
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
