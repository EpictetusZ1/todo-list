import "./styles/style.css"
import InitView from "./modules/loadInitContent";
import GetItems from "./modules/storageController";

const loadDisplay = () => {

    const content = document.getElementById("content")

    const showContent = () => {
        // Load Nav into HTML
        InitView.loadNav(content)

        // Function that Loads 'Boards' onto screen
        let run = () => GetItems
    }

    return {
        showContent
    }
}

window.onload = () => loadDisplay().showContent()