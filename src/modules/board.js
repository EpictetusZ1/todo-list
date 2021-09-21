
export class Project {
    items = []
    constructor(title, dateCreated, items, refNum) {
        this.title = title
        this.dateCreated = dateCreated
        this.items = items
        this.refNum = refNum
    }
    // Create methods for adding these fields

    // Static method for populating board items
    static getBoardItems() {
        // Return Each task in a project to its board element.
        // Then have this appended to the DOM
    }
}
