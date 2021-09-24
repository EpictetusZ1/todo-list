
export class Tag {
    tagName = ""
    tagId = 0
    relIDs = []
    constructor(tagName, tagId, relIDs = []) {
        this.tagName = tagName
        this.tagId = tagName
    }
}