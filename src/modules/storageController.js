import Test from "./fakeStorage";

// Designed to Hold boards and tasks in local memory
// Will hold a test board and task for use in development

const GetItems = (() => {
    let myTest = Test.alpha()
    console.dir(myTest)
    return 1
})()

export default GetItems