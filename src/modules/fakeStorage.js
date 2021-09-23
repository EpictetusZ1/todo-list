// This module serves to emulate storage

import {Task} from "./typeCreate/tasks";
import {ProjectBoard} from "./typeCreate/board";

// Here will be where the objects are created from the DOM FORMDATA obj. later
const Test = (() => {
    const alpha = () => {
        let todos = []
        let projects = []

        let oneTags = ["Illustrator", "Design"]
        let taskOne = new Task("Add Svgs to project", "Pretty Good", 55, 30, oneTags)

        let twoTags = ["Import", "Fun Work"]
        let taskTwo = new Task("Create controller module", "Not Bad", 56, 30, twoTags)

        let taskThree = new Task("Handle ALL the modules", "Could be worse", 57, 30)

        let taskFour = new Task("Get it done", "The best", 58, 30)

        let testBoard = new ProjectBoard("Default Project", "September 21", 30)


        todos.push(taskOne, taskTwo, taskThree, taskFour)
        testBoard.addItems(todos)

        projects.pusclh(testBoard)

        taskOne.updateState(1)
        taskOne.updateTags("Stylin")

        taskThree.updateState(0)
        taskFour.updateState(2)

        return projects
    }
    return {
        alpha
    }

})()

export default Test