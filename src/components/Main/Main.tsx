import React, {useEffect, useReducer} from 'react';
import {IProjectType, Task, IProjects, IAction, IAppProps} from "../../types/Project.types";
import * as styled from "./Main.styles";
import Header from "../Header/Header";
import {Project} from "../Project/Project";

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
        case "updateStatus":
            let targetIndex: number
            const setIndex = () => {
                for (let i = 0; i < myProjects.length; i++) {
                    if (myProjects[i].id === action.projectID) {
                        targetIndex = i
                    }
                }
            }
            const updateItem = () => {
                setIndex()
                if (myProjects !== undefined) {
                    for (let i = 0; i < myProjects[targetIndex].items.length; i++) {
                        if (myProjects[targetIndex].items[i].id === action.taskID) {
                           myProjects[targetIndex].items[i].status = action.data
                        }
                    }
                }
            }
            updateItem()
            return {
                ...state,
                projects: myProjects
            }
    }
}

const reducerCurr = (state: IProjectType, action: IAction) => {
    const curr = {...state}
    switch (action.type) {
        default:
            return state
        case "addTask":
            const arrWithNewItem = curr.items.concat(action.data)
            const noDuplicates = (a: Array<Task>) => [...new Set(a)]
            curr.items = noDuplicates(arrWithNewItem)

            return curr
        case "switchCurr":
            return ({
                ...action.data
            })
        case "removeTask":
            return {
                ...state,
                items: state.items.filter((element: Task) => element.id !== action.taskID)
            }
        case "changeStatus":
            const targetTask: object | undefined = curr.items.find((item: Task) => item.id === action.taskID)
            const index = state.items.findIndex((item: Task) => item.id === action.taskID)
            const newTodos = [...state.items]
            // @ts-ignore
            targetTask.status = action.data
            newTodos[index] = targetTask as Task

            return {
                ...state,
                items: newTodos
            }
    }
}

const Main: React.FC<IAppProps> = ({localProjects, usingFire, updateFire}) => {
    // @ts-ignore
    const [projects, dispatch] = useReducer(reducer, localProjects)
    // @ts-ignore
    const [currProject, dispatchCurr] = useReducer(reducerCurr, localProjects.projects[0])

    useEffect(() => {
        const updateFirestore = () => {
            if (usingFire) {
                if (updateFire) {
                    updateFire(projects)
                }
            }
        }
        return () => {
            updateFirestore()
            localStorage.setItem("projects", JSON.stringify(projects))
        }
    }, [currProject])

    return (
        <ProjectsContext.Provider value={ {projectsState: projects, projectsDispatch: dispatch} }>
            <CurrPContext.Provider value={ {currPState: currProject, currPDispatch: dispatchCurr} }>
                <styled.MainStyles>
                    <Header usingFire={usingFire} />
                    <Project/>
                </styled.MainStyles>
            </CurrPContext.Provider>
        </ProjectsContext.Provider>
    )
}

export default Main;
