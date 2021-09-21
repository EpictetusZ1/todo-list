import Test from "./fakeStorage";

// Designed to Hold boards and tasks in local memory
// Will hold a test board and task for use in development

const GetStorage = (() => {
    return Test.alpha()
})()

export default GetStorage