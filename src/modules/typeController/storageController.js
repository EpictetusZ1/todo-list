import Storage from "./setLocalStore";

// Designed to Hold boards and tasks in local memory
const GetStorage = (() => {

    const loadDefaultView = () => {
        Storage.setLocal()
        let bravo
        if (localStorage.length > 0) {
            bravo = Storage.getLocal().getTasksInProject()
            localStorage.clear()
        }
        return bravo

    }


    return {
        loadDefaultView
    }

})()

export default GetStorage