import React, {useEffect, useState} from 'react';
import Main from "./Main/Main";
import { IStorage, Task } from "../types/Project.types";
import uniqid from "uniqid";

const testItem: Task = {
    status: "noStatus",
    id: uniqid.time("task-"),
    title: "Add your to dos' here!",
    desc: "Add a description here",
    dueDate: "Friday",
    priority: "Low"
}

export const initStateBlank: IStorage = {
    projects: {
        title: "To Do",
        dateCreated: new Date().toDateString(),
        items: [testItem],
        id: ""
    }
}

const FetchData: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const [localProjects, setLocalProjects] = useState()

    useEffect(() => {
        const initProjectsState = {
            projects: [initStateBlank]
        }

        const makeCall = async() => {
            const response = await localStorage.getItem('projects')
            if (response !== null) {
                return {projects: JSON.parse(response)}
            } else {
                return initProjectsState
            }
        }

        makeCall().then( (r) => {
            // @ts-ignore
            setLocalProjects(r)
            setLoading(false)
        })
    }, [])

    return (
        <>
            { loading ? <div>Loading</div> : <Main localProjects={localProjects} />}
        </>
    );
};

export default FetchData;