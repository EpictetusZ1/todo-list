import React, { useReducer } from 'react';
import Main from "./components/Main";
import Header from "./components/Header/Header";
import { ProjectType } from "./types/Project.types";
import { initState, project2 } from "./components/mockStorage";

export const ProjectsContext = React.createContext<ProjectType | any >(undefined)
export const CurrPContext = React.createContext<ProjectType | any>(undefined)

const initialState = [initState, project2]

const reducer = (state: Array<ProjectType>, action: any) => {
    switch (action) {
        default:
            return state
    }
}

const reducerCurr = (state: ProjectType, action: any) => {
    //TODO: Add doing and done status calls
    switch (action.type) {
        default:
            return state
        case "noStatus":
            return {
                ...state,
                state: state.items.noStatus = [...state.items.noStatus, action.data]
            }
        case "switchCurr":
            return state = action.data
    }
}

const App = () => {
    const [currProject, dispatchCurr] = useReducer(reducerCurr, initState)
    const [projects, dispatch] = useReducer(reducer, initialState)

    return (
        <ProjectsContext.Provider value={ {projectsState: projects, projectsDispatch: dispatch} }>
            <CurrPContext.Provider value={ {currPState: currProject, currPDispatch: dispatchCurr} }>
                <div className="App">
                    <Header />
                    <Main />
                </div>
            </CurrPContext.Provider>
        </ProjectsContext.Provider>
    );
}

export default App;
