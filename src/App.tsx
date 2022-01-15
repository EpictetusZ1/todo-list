import React, { useReducer } from 'react';
import Main from "./components/Main";
import {IProjectType, Task, IProjects, IAction} from "./types/Project.types";
import { initState } from "./components/mockStorage";

export const CurrPContext = React.createContext<IProjectType | any>(undefined)
export const ProjectsContext = React.createContext<IProjectType | any >(undefined)

const reducer = (state: IProjects, action: any) => {
    const myProjects = [...state.projects]
    switch (action.type) {
        default:
            return state
        case "localStorageFound":
            return {
                ...state,
                projects: action.data
            }
        case "addTask":
            const pIndex = state.projects.findIndex((item: IProjectType) => item.id === action.projectID)
            const arrWithNewItem = state.projects[pIndex].items.concat(action.data)
            myProjects[pIndex].items = arrWithNewItem
            return {
                ...state,
                projects: myProjects
            }
        case "updateCurrInArr":
            const index = state.projects.findIndex((item: IProjectType) => item.id === action.data.id)
            const taskRemovedArr = myProjects[index].items.filter((item: Task) => item.id !== action.taskID)
            myProjects[index].items = taskRemovedArr
            return {
                ...state,
                projects: myProjects
            }
        case "addProject":
            return ({
                ...state,
                projects: [...state.projects, action.data]
            })
    }
}

const reducerCurr = (state: IProjectType, action: IAction) => {
    switch (action.type) {
        default:
            return state
        case "addTask":
            return {
                ...state,
                items: [...state.items, action.data]
            }
        case "switchCurr":
            return ({
                ...action.data
            })
        case "removeTask":
            return {
                ...state,
                items: state.items.filter((element: Task) => element.id !== action.taskID)
            }
    }
}

const App = () => {
    const initProjects = { projects: []}
    // @ts-ignore
    const [currProject, dispatchCurr] = useReducer(reducerCurr, initState)
    // @ts-ignore
    const [projects, dispatch] = useReducer(reducer, initProjects)

    return (
        <ProjectsContext.Provider value={ {projectsState: projects, projectsDispatch: dispatch} }>
        <CurrPContext.Provider value={ {currPState: currProject, currPDispatch: dispatchCurr} }>
            <div className="App">
                <Main />
            </div>
        </CurrPContext.Provider>
        </ProjectsContext.Provider>
    );
}

export default App;
