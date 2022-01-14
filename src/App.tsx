import React, { useReducer } from 'react';
import Main from "./components/Main";
import { ProjectType } from "./types/Project.types";
import { initState } from "./components/mockStorage";

export const CurrPContext = React.createContext<ProjectType | any>(undefined)
export const ProjectsContext = React.createContext<ProjectType | any >(undefined)

const reducer = (state: any, action: any) => {
    const myProjects = [...state.projects] // Copy of state as to not mutate

    switch (action.type) {
        default:
            return state
        case "localStorageFound":
            return {
                ...state,
                projects: action.data
            }
        case "addTask":
            const pIndex = state.projects.findIndex((item: ProjectType) => item.id === action.projectID)
            const arrWithNewItem = myProjects[pIndex].items.concat(action.data)
            myProjects[pIndex].items = arrWithNewItem

            return {
                ...state,
                projects: myProjects
            }
        case "updateCurrInArr":
            const index = state.projects.findIndex((item: any) => item.id === action.payload.id)
            const taskRemovedArr = myProjects[index].items.filter((item: any) => item.id !== action.taskID)

            myProjects[index].items = taskRemovedArr
            return {
                ...state,
                projects: myProjects
            }
    }
}

const reducerCurr = (state: any, action: any) => {
    switch (action.type) {
        default:
            return state
        case "addTask":
            return {
                ...state,
                items: [...state.items, action.data]
            }
        case "switchCurr":
            return state = action.data
        case "removeTask":
            return {
                ...state,
                items: state.items.filter((element: ProjectType) => element.id !== action.data)
            }
    }
}

const App = () => {
    const initProjects = { projects: []}

    const [currProject, dispatchCurr] = useReducer(reducerCurr, initState)
    const [projects, dispatch] = useReducer(reducer, initProjects)

    return (
        // @ts-ignore
        <ProjectsContext.Provider value={ {projectsState: projects, projectsDispatch: dispatch} }>
        {/* @ts-ignore */}
        <CurrPContext.Provider value={ {currPState: currProject, currPDispatch: dispatchCurr} }>
            <div className="App">
                <Main />
            </div>
        </CurrPContext.Provider>
        </ProjectsContext.Provider>
    );
}

export default App;
