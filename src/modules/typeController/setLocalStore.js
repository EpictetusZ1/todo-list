import Test from "../fakeStorage";
import {ProjectBoard} from "../typeCreate/board";
import {Task} from "../typeCreate/tasks";

const Storage = (() => {

    let initMemory = [...Test.alpha()]
    let testData = []
    initMemory.forEach(item => testData.push(item))

    const setLocal = () => {
        const setBoardItem = () => {
            const defineItem = (keyVal, propVal) => {
                localStorage.setItem(keyVal, propVal)
            }
            const setKey = (board) => {
                return board.setLocalStorageKey()
            }
            const getBoards = () => {
                let board
                for (let i = 0; i < testData.length; i++) {
                    board = testData[i]
                    let key = setKey(board)
                    defineItem(key, JSON.stringify(board))
                }
            }
          getBoards()
        }
        setBoardItem()
    }

    const updateLocal = (task, ref) => {
        let tasks = [task]
        let targetBoard = testData[ref]

        targetBoard.addItems(tasks)
        testData.push(targetBoard)

        setLocal()
    }

    const getLocal = () => {

        const getStorageString = () => {
            let keys = Object.keys(localStorage)
            let boardArr = []
            let boardItem
            for (let i = 0; i < localStorage.length; i++) {
                boardItem = localStorage.getItem(keys[i])
                boardArr.push(JSON.parse(boardItem))
            }
            return boardArr.reverse()
        }

        const getProjectBoards = (JSONData) => {
            let copy = Object.assign(JSONData, ProjectBoard)

            const deepClone = (copy) => {
                let title = copy.title
                let date = copy.dateCreated
                let refNum = copy.refNum
                let state = copy.taskState
                let description = copy.desc
                return [title, date, refNum, state, description]
            }

            const mapItems = () => {
                let items = []
                for (let i = 0; i < copy.items.length; i++) {
                    items.push(copy.items[i])
                }
                return items
            }
            let newProject = new ProjectBoard(...deepClone(copy))
            newProject.addItems( mapItems() )

            return newProject
        }

        const getTasksInProject = () => {
            let boards = getStorageString()
            let storageArray = []
            for (let i = 0; i < boards.length; i++) {
                let targetProject = getProjectBoards(boards[i])


                const deepCloneTask = (copy) => {
                    let name = copy.name
                    let desc = copy.desc
                    let parentRef = targetProject.refNum
                    let taskID = copy.taskID
                    let tags = copy.tags
                    return [name, desc, parentRef, tags, taskID]
                }

                const checkTaskParent = () => {
                    let targetItems = targetProject.items
                    for (let i = 0; i < targetItems.length; i++) {
                        if (targetItems[i].parentRef === targetProject.refNum) {
                            let copy = Object.assign(targetProject.items[i], Task)
                            let newTask = new Task(...deepCloneTask(copy))
                            targetProject.assignState(newTask)
                        }
                    }
                }

                checkTaskParent()

                storageArray.push(targetProject)
            }
            return storageArray

        }
        return {
            getTasksInProject
        }
    }

    return {
        setLocal,
        getLocal,
        updateLocal
    }

})()

export default Storage