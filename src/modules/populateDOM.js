import GetStorage from "./storageController";
import Help from "../helper";

const AddContent = (()=> {

    // Importing made up array of items for development
    const elements = GetStorage

    const showBoards = (content) => {
        // Might want to add a switch handler here for diff project views
        const showBoardContainer = () => {
            const projectView = Help.makeEl("div", {
                class: "board-container"
            })
            content.appendChild(projectView)
        }

        const showProjectTitle = () => {
            const container = document.querySelector(".board-container")

            // Loop through all Projects
                for (let i = 0; i < elements.length; i++) {

                    // Get Project from Array in memory
                    let targetProject = elements[i]

                    let title = targetProject.title

                    let addItemBtn = Help.makeEl("span",{
                        class: "add-btn"
                    }, "+")
                    let addTitle = Help.makeEl("div", {
                        class: "project-title"
                    }, title, addItemBtn)

                    let board = Help.makeEl("div", {
                        class: `project-board project-${targetProject.refNum}`
                    }, addTitle)
                    container.appendChild(board)
                }
            }


        const populateTasks = () => {
            let tasks = elements[0]

            const targetBoard = document.querySelector(`.project-board`)


            // Loop through tasks in Project
            const addTaskContainer = () => {
                let taskContainer = Help.makeEl("div", {
                    class: `task-container task-${tasks.items[1].taskID}`
                })
                for (let i = 0; i < tasks.items.length; i++) {
                    // Add task data here
                    console.log(tasks.items[i])

                }
                let test =  Help.makeEl("p", {
                    class: "title"
                }, tasks.items[1].name,tasks.items[1].desc)


                taskContainer.appendChild(test)
                targetBoard.appendChild(taskContainer)
            }
            addTaskContainer()
        }

       // Append Elements Here with actual function calls
        return {
            showBoardContainer,
            showProjectTitle,
            populateTasks
        }
    }
    const getBoard = (content) => {
        showBoards(content).showBoardContainer()
        showBoards().showProjectTitle()
        showBoards().populateTasks()
    }

    return {
     getBoard
    }

})()

export default AddContent