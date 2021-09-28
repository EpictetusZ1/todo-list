import Test from "../fakeStorage";
import Storage from "./setLocalStore";

// Designed to Hold boards and tasks in local memory
const GetStorage = (() => {
    if (localStorage.length === 0) {
        Storage.setLocal()
    }

    Storage.getLocal()


    return Test.alpha()
})()

export default GetStorage