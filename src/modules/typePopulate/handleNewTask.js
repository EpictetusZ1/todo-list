import Help from "../helper";

const GetTaskData = (() => {
    let formDisplayed = false

    const showForm = (parentDiv, stateID, projectRefNum) => {

        const populateForm = () => {
            // taskID, ParentRed (projectRefNum), progressState = STATEID

            const getBtn = () => {
                let btn = Help.makeEl("button", {
                    type: "submit",
                    id: "submit-btn"
                }, "Add Task")

                return Help.makeEl("div", {
                    class: "form-element"
                }, btn)
            }

            const getTags = () => {
                let tagsField = Help.makeEl("input", {
                    type: "text",
                    id: "tags",
                    name: "Task Tags",
                })

                let tagsLabel  = Help.makeEl("label", {
                    for: "tags"
                }, "Tags:")

                return Help.makeEl("div", {
                    class: "form-element"
                },  tagsLabel, tagsField)
            }

            const getDesc = () => {
                let descField = Help.makeEl("input", {
                    type: "text",
                    id: "desc",
                    name: "Task desc",
                    required: true
                })

                let descLabel = Help.makeEl("label", {
                    for: "desc"
                }, "Description:")


                return Help.makeEl("div", {
                    class: "form-element"
                },  descLabel, descField)
            }

            const getName = () => {
                let nameField = Help.makeEl("input", {
                    type: "text",
                    id: "name",
                    name: "Task Name",
                    required: true,
                })

                let nameLabel = Help.makeEl("label", {
                    for: "name"
                }, "Name:")

                return Help.makeEl("div", {
                    class: "form-element"
                },  nameLabel, nameField)
            }

            return Help.makeEl("form", {
                id: "taskForm",
                action: "index.html",
                method: "get",
                autocomplete: "off"
            }, getName(), getDesc(), getTags(), getBtn())
        }

        const formTitle = Help.makeEl("p", {
            class: "form-title"
        }, "Add A New Task:")

        const formContainer = Help.makeEl("div", {
            id: "form-container"
            }, formTitle, populateForm())

        const radioForm = (condition) => {
            const formEl = document.getElementById("form-container")
                if (!condition) {
                    formDisplayed = true
                    parentDiv.appendChild(formContainer)
                } else {
                    formEl.remove()
                    formDisplayed = false
                }
        }
        radioForm(formDisplayed)

    }
    return {
        showForm
    }
})()


export default GetTaskData