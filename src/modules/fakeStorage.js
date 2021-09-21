// This module serves to emulate storage

import {Task} from "./tasks";
import {ProjectBoard} from "./board";

// Here will be where the objects are created from the DOM FORMDATA obj. later
const Test = (() => {
    const alpha = () => {
        let todos = []
        let projects = []

        let taskOne = new Task("Test One", "Pretty Good", 55, 30)
        let taskTwo = new Task("Test Two", "Not Bad", 56, 30)

        let testBoard = new ProjectBoard("Default Project", "September 21", 30)


        todos.push(taskOne, taskTwo)
        testBoard.addItems(todos)

        projects.push(testBoard)

        return projects
    }
    return {
        alpha
    }

})()

export default Test