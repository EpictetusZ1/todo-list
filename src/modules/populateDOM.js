import GetStorage from "./storageController";
import Help from "../helper";

const AddContent = (()=> {

    // This is the only call to Board and Task items
    const elements = GetStorage

    // All DOM methods ref the below which is the ONE 'Project' Obj.
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

                    let statusContainer = Help.makeEl("div", {
                        class: "status-container"
                    })
                    projectArea.appendChild(statusContainer)

                    const showStatusAreas = () => {
                        const statusRef = document.querySelector(".status-container")

                        for (let i = 0; i < designations.length; i ++) {
                            let statusID = designations[i].status

                            let statusTitle = Help.makeEl("p", {
                                class: "status-title"
                            }, statusID)

                            let statusSection = Help.makeEl("div", {
                                class: `status-section`,
                                id: `state-${i}`
                            }, statusTitle)

                            statusRef.appendChild(statusSection)
                        }
                    }
                    showStatusAreas()

                    const populateStatusAreas = () => {
                        const noState = document.getElementById("state-0")
                        const doingState = document.getElementById("state-1")
                        const doneState = document.getElementById("state-2")

                        const getCard = (target) =>  {

                            let unChecked = Help.makeEl("img", {
                                src: target.imgSrc,
                                class: "check"
                            })

                            let title =  Help.makeEl("p", {
                                class: "task-title"
                            }, target.name)

                            return Help.makeEl("div", { // Card element
                                class: `task-card task-${target.taskID}`
                            }, unChecked,title)
                        }

                        const getTaskData = () => {
                            // Loop though the 3 possible task states
                            for (let x = 0; x < targetProject.taskState.length; x++) {

                                // Look at what sub items are in each task state and return it to the DOM
                                for (let i = 0; i < targetProject.taskState[x].subItems.length; i++) {

                                    // Get task status from object
                                    let targetTask = targetProject.taskState[x].subItems[i]

                                    // Update board in DOM
                                    let identifier = targetTask.progressState

                                    switch (identifier) {
                                        default:
                                        case 0:
                                            noState.appendChild(getCard(targetTask))
                                            break
                                        case 1:
                                            doingState.appendChild(getCard(targetTask))
                                            break
                                        case 2:
                                            doneState.appendChild(getCard(targetTask))
                                            break
                                    }
                                }
                            }
                        }
                        getTaskData()
                    }
                    populateStatusAreas()
                }
                return {
                    getProjectTitle,
                    showStatusBoards
                }
            }
            populateProject().getProjectTitle()
            populateProject().showStatusBoards()
            }

        return {
            showBoardContainer,
            showProject,
        }
    }

    const getBoard = (content) => { // Controller Function for calling the separate elements
        showBoards(content).showBoardContainer()
        showBoards().showProject()
    }
    return {
     getBoard
    }

})()

export default AddContent