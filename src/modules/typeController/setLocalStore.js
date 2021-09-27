import Test from "../fakeStorage";


const setStorage = (() => {

    // Local Storage Needs to Hold a array of BOARD ITEMS.
    // Need to parse the boar items and sub items out of local storage

    const setLocal = () => {
        let testData = Test.alpha()

        const setBoardItem = () => {
            const defineItem = (keyVAl, val) => {
                localStorage.setItem(keyVAl, val)
                console.log(localStorage)
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
    localStorage.clear()

    return {
       setLocal
    }
})()

export default setStorage