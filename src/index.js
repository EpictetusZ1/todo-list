import "./styles/style.css"
import InitView from "./modules/loadInitContent";


const loadDisplay = () => {

    const content = document.getElementById("content")

    const showContent = () => {
        // Load Nav into HTML
        InitView.loadNav(content)

        // Function that Loads 'Boards' onto screen

    }

    return {
        showContent
    }
}

window.onload = () => loadDisplay().showContent()