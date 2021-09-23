import Test from "../fakeStorage";

// Designed to Hold boards and tasks in local memory

const GetStorage = (() => {
    // populateDOM file is set up to accept an Array of Board Objects
    return Test.alpha()
})()

export default GetStorage