import "./styles/style.css"
import InitView from "./modules/loadInitContent";


const loadDisplay = () => {

    const content = document.getElementById("content")

    const showContent = () => {
        // Load & Add Nav to DOM + Page
        InitView.loadNav(content)

    }

    return {
        showContent
    }
}

window.onload = () => loadDisplay().showContent()