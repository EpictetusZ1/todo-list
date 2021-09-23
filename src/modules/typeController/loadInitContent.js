import Help from "../helper";

// Responsible for loading the DOM el. to HTML, for initial page view
const InitView = (()=> {

    const loadNav = (content) => {
        // Create Hamburger Menu in DOM
        const hamburger = (() => {
            const showHam = () => {
                const hamBtn = Help.makeEl("div", {
                    class: "menu-btn-burger"
                })
                return Help.makeEl("div", {
                    class: "menu-btn"
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

        addItems()
    }

    return {
        loadNav
    }

})()

export default InitView