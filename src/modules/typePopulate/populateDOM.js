import GetStorage from "../typeController/storageController";
import Help from "../helper";
import GetTags from "./populateTags";

const AddContent = (()=> {

    // This is the only call to Board and Task items
    const elements = GetStorage

    // All DOM methods ref the below which is the ONE 'Project' Obj.
    let targetProject = elements[0]

    const showBoard = (content) => {
        const addBoardArea = () => {
            const projectView = Help.makeEl("div", {
                class: "board-container"
            })
            return content.appendChild(projectView)
        }

        const showProject = () => {
            const container = document.querySelector(".board-container")

            const selectProject = () => {
                let project = Help.makeEl("div", {
                    class: `project-container project-${targetProject.refNum}`
                })
                return container.appendChild(project)
            }

            const popProject = () => {
                const projectArea = document.querySelector(`.project-${targetProject.refNum}`)

                const addProjectData = () => {
                    let title = Help.makeEl("p", {
                        class: "project-title"
                    }, `${targetProject.title}`)
                    projectArea.appendChild(title)
                    let statusContainer = Help.makeEl("div", {
                        class: "status-container"
                    })
                    return projectArea.appendChild(statusContainer)
                }

                const showStatusAreas = () => {
                    const statusRef = document.querySelector(".status-container")
                    const designations = targetProject.taskState

                    for (let i = 0; i < designations.length; i ++) {
                        let statusID = designations[i].status

                        let statusTitle = Help.makeEl("p", {
                            class: "status-title"
                        }, statusID)

                        let statusSection = Help.makeEl("div", {
                            class: `status-section`,
                            id: `state-${i}-${targetProject.refNum}`
                        }, statusTitle)

                        statusRef.appendChild(statusSection)
                    }
                }

                const popStatusBoards = () => {

                    const getTaskData = () => {
                        const noState = document.getElementById(`state-0-${targetProject.refNum}`)
                        const doingState = document.getElementById(`state-1-${targetProject.refNum}`)
                        const doneState = document.getElementById(`state-2-${targetProject.refNum}`)

                        const getCard = (target) =>  {

                            let date = Help.makeEl("p",{
                                class: "date-text"
                            }, "Created: ")

                            let dateContainer = Help.makeEl("div", {
                                class: "date-container"
                            }, date)


                            let descText = Help.makeEl("p", {
                                class: "desc-text"
                            }, target.desc)

                            let descContainer = Help.makeEl("div", {
                                class: "desc-container"
                            }, descText)

                            // Call will be to an array of task tags
                            let tagContainer = Help.makeEl("div", {
                                class: "tag-container"
                            }, ...GetTags.createTag(target))

                            let unChecked = Help.makeEl("img", {
                                src: target.imgSrc,
                                class: "check"
                            })

                            let title =  Help.makeEl("p", {
                                class: "task-title"
                            }, target.name)

                            let titleContainer = Help.makeEl("div", {
                                class: "card-title-container"
                            }, unChecked, title)

                            return Help.makeEl("div", { // Card element
                                class: `task-card task-${target.taskID}`
                            }, titleContainer, tagContainer, descContainer, dateContainer)
                        }

                        // Loop though the 3 possible task states
                        for (let x = 0; x < targetProject.taskState.length; x++) {
                            // Get sub-items from each Task State
                            for (let i = 0; i < targetProject.taskState[x].subItems.length; i++) {

                                let targetTask = targetProject.taskState[x].subItems[i]

                                switch (targetTask.progressState) {
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
                    return {
                        getTaskData
                    }
                }
                return {
                    addProjectData,
                    showStatusAreas,
                    popStatusBoards
                    }
            }
            return {
                selectProject,
                pop: popProject,
            }
            }
        return {
            addBoardArea,
            project: showProject,
        }
    }

    const getBoard = (content) => { // Controller Function
        // Add project container
        showBoard(content).addBoardArea()

        // Select which project to view (Will be used later for diff. projects)
        showBoard().project().selectProject()

        // Populate all data from project
        showBoard().project().pop().addProjectData()
        showBoard().project().pop().showStatusAreas()
        showBoard().project().pop().popStatusBoards()
        showBoard().project().pop().popStatusBoards().getTaskData()
    }
    return {
     getBoard
    }

})()

export default AddContent