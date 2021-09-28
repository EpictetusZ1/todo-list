import Storage from "./setLocalStore";

// Designed to Hold boards and tasks in local memory
const GetStorage = (() => {

    const loadDefaultView = () => {
        Storage.setLocal()
        let bravo
        if (localStorage.length > 0) {
            bravo = Storage.getLocal().getTasksInProject()
        }
        return bravo

    }
    localStorage.clear()

    return {
        loadDefaultView
    }

})()

export default GetStorage