import {Task} from "../typeCreate/tasks";

const HandleTask = (() => {

    // Parameter 'values' is an array of Form data
    const makeTask = (formValue) => {
        let newTask = new Task(...new FormData(formValue).values())
        console.log(newTask)
    }

    return {
        makeTask
    }

})()

export default HandleTask