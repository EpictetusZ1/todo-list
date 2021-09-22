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
                            let statusID = designations[i][i].status

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

                            let title =  Help.makeEl("p", {
                                class: "task-title"
                            }, target.name)

                            return Help.makeEl("div", { // Card element
                                class: "task-card"
                            }, title)
                        }

                        for (let i = 0; i < targetProject.items.length; i++) {
                            let targetTask = targetProject.items[i]
                            let identifier = targetTask.progressState
                            switch (identifier) {
                                case 0:
                                    // Write Function to populate from the DOM here
                                    noState.appendChild(getCard(targetTask))
                                    break
                                case 1:
                                    doingState.appendChild(getCard(targetTask))
                                    break
                                case 2:
                                    doneState.appendChild(getCard(targetTask))
                            }
                        }
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