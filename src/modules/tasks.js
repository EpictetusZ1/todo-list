import check from "../assets/icons/checkSVG/checked.svg"
import notCheck from "../assets/icons/checkSVG/unChecked.svg"

export class Task {
    name = ""
    desc = ""
    taskID= 0
    parentRef = 0
    progressState = 0
    imgSrc
    constructor(name, desc, ID, parentRef, progressState = 0, imgSrc = notCheck) {
        this.name = name
        this.desc = desc
        this.taskID = ID
        this.parentRef = parentRef
        this.imgSrc = imgSrc
    }

    updateState(int) {
        if (int === 0 || int === 1) {
            return this.progressState = int
        } else {
            this.imgSrc = check
            return this.progressState = int;
        }

    }

}