import GetStorage from "./storageController";
import Help from "../helper";

const AddContent = ( ()=> {

    let elements = GetStorage

    const addBoards = (content) => {

        // Might want to add a switch handler here for diff project views
        const projectView = Help.makeEl("div", {
            class: "board-container"
        })

        content.appendChild(projectView)

        const populateBoards = () => {
            const container = document.querySelector(".board-container")

            const populateTask = (i) => {

            }
            // Loop through tasks in Project
            const addTaskContainer = () => {

                let taskContainer = Help.makeEl("div", {
                    class: "task-container"
                })
                return taskContainer

            }

            // Loop through all Projects
            const addTitle = () => {
                for (let i = 0; i < elements.length; i++) {
                    let targetProject = elements[i]
                    let title = targetProject.title

                    let addItemBtn = Help.makeEl("span",{
                        class: "add-btn"
                    }, "+")
                    let addTitle = Help.makeEl("div", {
                        class: "project-title"
                    }, title, addItemBtn)

                    let board = Help.makeEl("div", {
                        class: "project-board"
                    }, addTitle)

                    board.appendChild(addTaskContainer())
                    container.appendChild(board)

                }
            }

            addTitle()
        }
        populateBoards()


    }

    return {
        addBoards
    }

})()

export default AddContent