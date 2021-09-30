import GetStorage from "../typeController/storageController";
import Help from "../helper";
import GetTags from "./populateTags";

import GetTaskData from "./populateForm";

const AddContent = (()=> {

    const elements = GetStorage.loadDefaultView()
    // All DOM methods ref the below which is the ONE 'Project' Obj.

    const popNavMenu = () => {
        const menu = document.getElementById("menu-element")
        menu.textContent = ""
        const populateMenu = (i) => {
            return Help.makeEl("p", {
                class: `menu-text`,
                data: `${elements[i].refNum}`
            }, elements[i].title)
        }
        for (let i = 0; i < elements.length; i++) {
            menu.appendChild( populateMenu(i) )
        }
    }

    const showBoard = (content) => {
        const addBoardArea = () => {
            const projectView = Help.makeEl("div", {
                class: "board-container"
            })
            return content.appendChild(projectView)
        }

        const showProject = () => {
            const container = document.querySelector(".board-container")

            const selectProject = (targetProject) => {
                let project = Help.makeEl("div", {
                    class: `project-container project-${targetProject.refNum - 1}`,
                    data: `${targetProject.refNum - 1}`
                })
                container.appendChild(project)
            }

            const popProject = (targetProject) => {
                const projectArea = document.querySelector(`.project-${targetProject.refNum - 1}`)

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

                    const addTaskBtn = (state, stateID, parentID) => {

                        let plusSign = Help.makeEl("p", {
                            class: "plus-sign"
                        }, "+")

                        let taskText = Help.makeEl("p", {
                            class: "add-task"
                        }, "New")

                        let taskBtnContainer = Help.makeEl("span", {
                            class: "add-task-container",
                        }, taskText, plusSign)

                        taskBtnContainer.addEventListener("click", () => GetTaskData.showForm(state, stateID, parentID))

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
                        addTaskBtn(noState, 0, targetProject.refNum)
                        addTaskBtn(doingState, 1, targetProject.refNum)
                        addTaskBtn(doneState, 2, targetProject.refNum)
                    }
                    return {
                        makeCard,
                        getTaskData,
                        noState,
                        doingState,
                        doneState
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

    const updateBoard = (id, newTask) => {

        let getRefNum = document.querySelector(".project-container").getAttribute("data")

        let targetIndex = elements.indexOf(elements[getRefNum])

        let targetProject = elements[targetIndex]

        let result = showBoard().project().pop(targetProject).popStatusBoards().makeCard(newTask)

        let noState = showBoard().project().pop(targetProject).popStatusBoards().noState
        let doingState = showBoard().project().pop(targetProject).popStatusBoards().doingState
        let doneState = showBoard().project().pop(targetProject).popStatusBoards().doneState

        let noStateRef = noState.querySelector(".add-task-container").closest("span")
        let doingStateRef = doingState.querySelector(".add-task-container").closest("span")
        let doneStateRef = doneState.querySelector(".add-task-container").closest("span")

        switch (id) {
            default:
            case 0:
                noState.insertBefore(result, noStateRef)
                break
            case 1:
                doingState.insertBefore(result, doingStateRef)
                break
            case 2:
                doneState.insertBefore(result, doneStateRef)
                break
        }
    }

    const getBoard = (content, targetProject = elements[0]) => {

        // Add project container
        showBoard(content).addBoardArea()

        // Select which project to view (Will be used later for diff. projects)
        showBoard().project().selectProject(targetProject)

        // Populate all data from project
        showBoard().project().pop(targetProject).addProjectData()
        showBoard().project().pop(targetProject).showStatusAreas()
        showBoard().project().pop(targetProject).popStatusBoards()

        // Loops through each project status, creates cards and adds them to HTML
        showBoard().project().pop(targetProject).popStatusBoards().getTaskData()

        // Populates Board Project Titles to Nav
        popNavMenu()
    }

    const updateBoardView = () => {
        const addListeners = () => {
            let menuItems = document.querySelectorAll(".menu-text")
            menuItems.forEach(item => {
                item.addEventListener("click", (e) => getData(e))
            })
        }
        addListeners()

        const showDiffBoard = (data) => {
            const content = document.getElementById("content")
            // loop through elements and find where element.refNum === data
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].refNum === parseInt(data)) {
                    return getBoard(content, elements[i])
                }
            }
        }

        const getData = (e) => {
            let menu = document.querySelector(".menu")
            menu.classList.remove("menu-active")
            let data = e.target.getAttribute("data")
            const boardContainer = document.querySelector(".board-container")
            boardContainer.remove()
            showDiffBoard(data)
            addListeners()
        }
    }

    return {
        getBoard,
        updateBoard,
        updateBoardView
    }

})()

export default AddContent