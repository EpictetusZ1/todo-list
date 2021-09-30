import Storage from "./setLocalStore";

// Designed to Hold boards and tasks in local memory
const GetStorage = (() => {

    const loadDefaultView = () => {
        Storage.setLocal()
        if (localStorage.length > 0) {
             return  Storage.getLocal().getTasksInProject()
        }
    }

    return {
        loadDefaultView
    }

})()

export default GetStorage