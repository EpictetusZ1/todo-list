import {useEffect} from "react";
import {initState, project2} from "./components/mockStorage";

const MimicStorage = () => {
    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify([initState, project2]))

        return () => {
            localStorage.removeItem("projects")
        }
    }, [])
    return  (
        <div>
        </div>
    )
}

export default MimicStorage