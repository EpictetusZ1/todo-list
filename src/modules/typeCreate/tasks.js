import check from "../../assets/icons/checkSVG/checked.svg"
import notCheck from "../../assets/icons/checkSVG/unChecked.svg"

let taskInc = 0

export class Task {
    name = ""
    desc = ""
    taskID = 0
    tags = []
    progressState = 0
    imgSrc = notCheck
    constructor(name, desc, parentRef, tags = [], progressState = 0, taskID = 0) {
        this.name = name
        this.desc = desc
        this.parentRef = parentRef
        this.tags = tags
        this.taskID = taskInc++
    }

    updateState(int) {
        if (int === 0 || int === 1) {
            return this.progressState = int
        } else {
            this.imgSrc = check
            return this.progressState = int;
        }
    }

    updateTags(newTag) {
        return this.tags.push(newTag)
    }

    get getTags() {
        return this.tags.split(',')
    }

}