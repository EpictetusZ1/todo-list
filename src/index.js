import "./styles/style.css"
import InitView from "./modules/loadInitContent";
import AddContent from "./modules/populateDOM";


const loadDisplay = () => {

    const content = document.getElementById("content")

    const showContent = () => {
        // Load Nav into HTML
        InitView.loadNav(content)

        // Function that Loads 'Boards' onto screen
        AddContent.getBoard(content)
    }

    return {
        showContent
    }
}

window.onload = () => loadDisplay().showContent()