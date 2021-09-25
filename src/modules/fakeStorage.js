// This module serves to emulate storage

import {Task} from "./typeCreate/tasks";
import {ProjectBoard} from "./typeCreate/board";

// Here will be where the objects are created from the DOM FORMDATA obj. later
const Test = (() => {
    const alpha = () => {
        let todos = []
        let projects = []

        let testBoard = new ProjectBoard("Default Project", "September 21")

        let ref = testBoard.refNum

        let oneTags = ["Illustrator", "Design", "It's Lit", "Fitness"]
        let taskOne = new Task("Add Svgs to project", "Pretty Good", ref, oneTags)

        let twoTags = ["Import", "Fun Work"]
        let taskTwo = new Task("Create controller module", "Not Bad", ref, twoTags)

        let taskThree = new Task("Handle ALL the modules", "Could be worse", ref)

        let taskFour = new Task("Get it done", "The best",  ref)




        todos.push(taskOne, taskTwo, taskThree, taskFour)
        testBoard.addItems(todos)

        projects.push(testBoard)

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