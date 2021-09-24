import GetStorage from "../typeController/storageController";
import Help from "../helper";
import GetTags from "./populateTags";

import GetTaskData from "./handleNewTask";

const AddContent = (()=> {

    // This is the only call to Board obj and its Tasks Obj
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
                    const noState = document.getElementById(`state-0-${targetProject.refNum}`)
                    const doingState = document.getElementById(`state-1-${targetProject.refNum}`)
                    const doneState = document.getElementById(`state-2-${targetProject.refNum}`)

                    const addTaskBtn = (state, stateID) => {

                        let plusSign = Help.makeEl("p", {
                            class: "plus-sign"
                        }, "+")

                        let taskText = Help.makeEl("p", {
                            class: "add-task"
                        }, "New")


                        let taskBtnContainer = Help.makeEl("span", {
                            class: "add-task-container",
                        }, taskText, plusSign)

                        taskBtnContainer.addEventListener("click", () => GetTaskData.showForm(stateID))

                        state.appendChild(taskBtnContainer)
                    }

                    const makeCard = (target) =>  {
                        let date = Help.makeEl("p",{
                            class: "date-title"
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

                        // Call return will array of task tags
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

                        return Help.makeEl("div", { // Return final Card
                            class: `task-card task-${target.taskID}`
                        }, titleContainer, tagContainer, descContainer, dateContainer)
                    }

                    const getTaskData = () => {
                        // Loop though the 3 possible task states
                        for (let x = 0; x < targetProject.taskState.length; x++) {
                            // Get sub-items from each Task State
                            for (let i = 0; i < targetProject.taskState[x].subItems.length; i++) {

                                let targetTask = targetProject.taskState[x].subItems[i]

                                switch (targetTask.progressState) {
                                    default:
                                    case 0:
                                        noState.appendChild( makeCard(targetTask) )
                                        break
                                    case 1:
                                        doingState.appendChild( makeCard(targetTask) )
                                        break
                                    case 2:
                                        doneState.appendChild( makeCard(targetTask) )
                                        break
                                }
                            }
                        }
                        addTaskBtn(noState, 0)
                        addTaskBtn(doingState, 1)
                        addTaskBtn(doneState, 2)
                    }

                    return {
                        getTaskData,
                    }
                }

                return {
                    addProjectData,
                    showStatusAreas,
                    popStatusBoards,
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

        // Loops through each project status, creates cards and adds them to HTML
        showBoard().project().pop().popStatusBoards().getTaskData()

        // Add the ADD BTN to tasks here as each status sections last child. ^^ Above

        // TODO: Add event listeners to DOM elements here AFTER they have been created
    }
    return {
     getBoard
    }

})()

export default AddContent