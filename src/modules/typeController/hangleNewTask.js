import {Task} from "../typeCreate/tasks";
import {ProjectBoard} from "../typeCreate/board";


import populateDOM from "../typePopulate/populateDOM";



const HandleTask = (() => {

    // Parameter 'values' is an array of Form data
    const makeTask = (formValue, stateID, projectRefNum) => {

        let formValues = new FormData(formValue)
        let values = [...formValues.values()]

        let newTask = new Task(values[0], values[1], projectRefNum, values[2], stateID)
        console.log(values[1], newTask)

        populateDOM.updateBoard(stateID,newTask)
    }


    return {
        makeTask
    }

})()

export default HandleTask