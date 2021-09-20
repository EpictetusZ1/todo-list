import Help from "../helper";

const getNav = (() => {

    const loadNav = (content) => {
        const navBar = Help.makeEl("div", {
            class: "nav-bar",
            id: "nav"
        })
        content.appendChild(navBar)
    }

    return {
        loadNav
    }
})()

export default getNav