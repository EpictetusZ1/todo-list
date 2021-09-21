
export class ProjectBoard {
    title = ""
    dateCreated
    refNum = 0
    items = []
    constructor(title, dateCreated, refNum) {
        this.title = title
        this.dateCreated = dateCreated
        this.refNum = refNum
    }
    addItems(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].parentRef === this.refNum) {
                this.items.push(arr[i])
            } else {
                console.log(arr[i])
            }
        }
    }
}
