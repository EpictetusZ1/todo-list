import "./styles/style.css"
import InitView from "./modules/typeController/loadInitContent";
import AddContent from "./modules/typePopulate/populateDOM";


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