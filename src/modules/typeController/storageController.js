import Test from "../fakeStorage";
import Storage from "./setLocalStore";

// Designed to Hold boards and tasks in local memory
const GetStorage = (() => {
    // populateDOM file is set up to accept an Array of Board Objects

    Storage.setLocal()

    return Test.alpha()
})()

export default GetStorage