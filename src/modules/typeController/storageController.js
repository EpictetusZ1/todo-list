import Storage from "./setLocalStore";

// Designed to Hold boards and tasks in local memory
const GetStorage = (() => {

    const loadDefaultView = (updated) => {

        if (!updated) {
            Storage.setLocal()
            return Storage.getLocal().getTasksInProject()
        } else if (updated) {
            console.log(Storage.addData())
            return Storage.addData()
        }
    }

    return {
        loadDefaultView
    }

})()

export default GetStorage