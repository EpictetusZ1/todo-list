// This module serves to emulate storage

import {Task} from "./tasks";
import {ProjectBoard} from "./board";

// Here will be where the objects are created from the DOM FORMDATA obj. later
const Test = (() => {
    const alpha = () => {
        let todos = []
        let projects = []

        let taskOne = new Task("Add Svgs to project", "Pretty Good", 55, 30)

        let taskTwo = new Task("Create controller module", "Not Bad", 56, 30)
        let taskThree = new Task("Handle switch case more elegantly", "Could be worse", 57, 30)

        let testBoard = new ProjectBoard("Default Project", "September 21", 30)


        todos.push(taskOne, taskTwo, taskThree)
        testBoard.addItems(todos)

        projects.push(testBoard)

        taskOne.updateState(1)
        taskThree.updateState(0)

        return projects
    }
    return {
        alpha
    }

})()

export default Test