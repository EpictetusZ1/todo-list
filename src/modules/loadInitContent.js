import Help from "../helper";

// This will be responsible for loading the DOM related elements onto the page
const InitView = (()=> {

    const loadNav = (content) => {
        // Create Hamburger Menu
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

        const navBar = Help.makeEl("div", {
            class: "nav-bar",
            id: "nav"
        }, hamburger.showHam())

        content.appendChild(navBar)
        hamburger.animateHam()
    }

    return {
        loadNav
    }

})()

export default InitView