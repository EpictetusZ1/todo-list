import Help from "../helper";

// Responsible for loading base background and Nav elements into DOM and HTML
const InitView = (()=> {

    const loadNav = (content) => {
        const hamburger = (() => {
            const showHam = () => {
                const hamBtn = Help.makeEl("div", {
                    class: "menu-btn-burger"
                })
                return Help.makeEl("div", {
                    class: "menu-btn",
                    id: "main-menu"
                }, hamBtn)
            }

            const animateHam = () => {
                const hamBtnDom = document.querySelector(".menu-btn")
                let active = false
                hamBtnDom.addEventListener("click", () => {
                    if (!active) {
                        hamBtnDom.classList.add("open")
                        active = true
                    } else {
                        hamBtnDom.classList.remove("open")
                        active = false
                    }
                })
            }
         return {
                showHam,
                animateHam
         }
        })()

        const loadTitle = (() => {
            const titleText = Help.makeEl("h1", {
                class: "main-title"
            }, "To Doify")
            return {
                titleText
            }
        })()

        // Create nav in DOM
        const navBar = Help.makeEl("div", {
            class: "nav-bar",
            id: "nav"
        }, hamburger.showHam(), loadTitle.titleText)

        // Add items to HTML
        const addItems = () => {
            content.appendChild(navBar)
            hamburger.animateHam()
        }

        const makeMenu = () => {
            let menu = Help.makeEl("div", {
                class: "menu",
                id: "menu-element"
            })
            content.appendChild(menu)
        }

        const setListener = () => {
            makeMenu()
            const mainMenu = document.getElementById("main-menu")
            const menuEl = document.getElementById("menu-element")

            const showMenu = () => {
                menuEl.classList.toggle("menu-active")
            }
            mainMenu.addEventListener("click", () => showMenu())
        }

        addItems()
        setListener()
    }

    return {
        loadNav
    }

})()

export default InitView