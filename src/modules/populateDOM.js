import GetStorage from "./storageController";
import Help from "../helper";

const AddContent = (()=> {

    // Importing made up array of items for development
    const elements = GetStorage
    let targetProject = elements[0]


    const showBoards = (content) => {
        const showBoardContainer = () => {
            const projectView = Help.makeEl("div", {
                class: "board-container"
            })
            content.appendChild(projectView)
        }

        const showProject = () => {
            const container = document.querySelector(".board-container")

            const getProject = () => {
                // Get Project from Array in memory
                console.log(targetProject)

                let project = Help.makeEl("div", {
                    class: `project-container project-${targetProject.refNum}`
                })
                container.appendChild(project)
            }
            getProject()

            const populateProject = () => {
                const projectArea = document.querySelector(`.project-${targetProject.refNum}`)

                const getProjectTitle = () => {
                    let title = Help.makeEl("p", {
                        class: "project-title"
                    }, `${targetProject.title}`)
                    projectArea.appendChild(title)
                }

                const showStatusBoards = () => {
                    let designations = targetProject.taskState

                    console.dir(designations)

                    let statusContainer = Help.makeEl("div", {
                        class: "status-container"
                    })
                    projectArea.appendChild(statusContainer)

                    const showStatusAreas = () => {
                        const statusRef = document.querySelector(".status-container")

                        for (let i = 0; i < designations.length; i ++) {
                            let statusArea = Help.makeEl("div", {
                                class: "project-status-section"
                            })
                            statusRef.appendChild(statusArea)
                        }

                    }
                    showStatusAreas()
                }

                return {
                    getProjectTitle,
                    showStatusBoards
                }
            }
            populateProject().getProjectTitle()
            populateProject().showStatusBoards()

            }


        // const populateTasks = () => {
        //     let tasks = elements[0]
        //
        //     const targetBoard = document.querySelector(`.project-board`)
        //
        //
        //     // Loop through tasks in Project
        //     const addTaskContainer = () => {
        //         let taskContainer = Help.makeEl("div", {
        //             class: `task-container task-${tasks.items[1].taskID}`
        //         })
        //         for (let i = 0; i < tasks.items.length; i++) {
        //             // Add task data here
        //
        //             console.log(tasks.items[i])
        //
        //         }
        //         let test =  Help.makeEl("p", {
        //             class: "title"
        //         }, tasks.items[1].name,tasks.items[1].desc)
        //
        //
        //         taskContainer.appendChild(test)
        //         targetBoard.appendChild(taskContainer)
        //     }
        //     addTaskContainer()
        // }

        return {
            showBoardContainer,
            showProject,
            // populateTasks
        }
    }

    const getBoard = (content) => { // Controller Function for calling the separate elements

        showBoards(content).showBoardContainer()
        showBoards().showProject()
        // showBoards().populateTasks()
    }

    return {
     getBoard
    }

})()

export default AddContent