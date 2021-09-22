
export class ProjectBoard {
    title = ""
    dateCreated
    refNum = 0
    items = []
    taskState = [
        {0: {status: "No Status", subItems: []}},
        {1: {status: "Doing", subItems: []}},
        {2: {status: "Done", subItems: []}},
        ]
    constructor(title, dateCreated, refNum) {
        this.title = title
        this.dateCreated = dateCreated
        this.refNum = refNum
    }

    assignState(item) {
        switch (item.progressState) {
            case 0:
                this.taskState[0][0].subItems.push(item)
                break
            case 1:
                this.taskState[1][0].subItems.push(item)
                break
            case 2:
                this.taskState[2][0].subItems.push(item)
        }
    }

    addItems(arr) { // Add tasks to their appropriate parent project
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].parentRef === this.refNum) {
                this.items.push(arr[i])

                // Assign Task Item a status state
                this.assignState(arr[i])
            } else {
                console.log("Error at: " + arr[i])
            }
        }
    }
}
