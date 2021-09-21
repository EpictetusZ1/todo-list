// This module serves to emulate storage

import {Task} from "./tasks";
import {ProjectBoard} from "./board";

// Here will be where the objects are created from the DOM FORMDATA obj. later
const Test = (() => {
    const alpha = () => {
        let todos = []

        let taskOne = new Task("Test One", "Pretty Good", 55, 1)
        let taskTwo = new Task("Test Two", "Not Bad", 56, 1)

        let testBoard = new ProjectBoard("Project One", "September 21", 1)

        todos.push(taskOne, taskTwo)
        testBoard.addItems(todos)
        return testBoard
    }
    return {
        alpha
    }

})()

export default Test