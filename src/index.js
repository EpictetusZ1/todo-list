import "./styles/style.css"
import MainInitView from "./modules/loadInitContent";


const loadDisplay = (() => {

    const content = document.getElementById("content")

    const showContent = () => MainInitView(content)

    return {
        showContent
    }
})

window.onload = () => loadDisplay().showContent()