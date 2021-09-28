import Test from "../fakeStorage";
import {ProjectBoard} from "../typeCreate/board";


const Storage = (() => {

    // Local Storage Needs to Hold a array of BOARD ITEMS.
    // Need to parse the boar items and sub items out of local storage

    const setLocal = () => {
        let testData = Test.alpha()

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

    const getLocal = () => {
        const parseLocal = () => {
            let keys = Object.keys(localStorage)
            let boardItem
            for (let i = 0; i < localStorage.length; i++) {
                boardItem = localStorage.getItem(keys[i])
            }
            return JSON.parse(boardItem)
        }

        const mapToClassBoard = (JSONData) => {
            let copy = Object.assign(JSONData, ProjectBoard)

            const deepClone = (copy) => {
                let title = copy.title
                let date = copy.dateCreated
                let refNum = copy.refNum
                let state = copy.taskState
                const description = copy.desc
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

            console.log(newProject)
            console.log(newProject instanceof ProjectBoard)
        }

        mapToClassBoard( parseLocal() )

    }

    if (localStorage.length !== 0) {
        getLocal()
        localStorage.clear()
    }

    return {
       setLocal
    }

})()

export default Storage