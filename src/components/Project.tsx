import { ProjectProps,  Task } from "../types/Project.types";
import { TaskCard } from "./TaskCard";
import uniqid from "uniqid";
import React, {useEffect, useState} from "react";

import * as styled from "../styles/Project";

export const Project = ({data}: ProjectProps) => {

    const [currProject, setCurrProject] = useState(data)
    const { title, dateCreated } = data

    const testItem2: Task = {
        status: 1,
        id: uniqid.time("task-"),
        title: "Test Bravo",
        desc: "Starting to work",
        dueDate: "Saturday",
        priority: 1,
        notes: "Not Really"
    }

    const testItem4: Task = {
        status: 2,
        id: uniqid.time("task-"),
        title: "Test I AM DONE",
        desc: "Starting IT WORKS????",
        dueDate: "Forever",
        priority: 1,
        notes: "WOOOOOOOOOO"
    }

    const addTask = (task: Task) => {
        switch (task.status) {
            default: return currProject
            case 0:
                 setCurrProject((prevState => ({
                    ...prevState,
                    items: {
                        ...prevState.items,
                        noStatus: currProject.items.noStatus.concat(task)
                    }
                })))
                break
            case 1:
                 setCurrProject((prevState => ({
                    ...prevState,
                    items: {
                        ...prevState.items,
                        doing: currProject.items.doing.concat(task)
                    }
                })))
                break
            case 2:
                 setCurrProject((prevState => ({
                    ...prevState,
                    items: {
                        ...prevState.items,
                        done: currProject.items.done.concat(task)
                    }
                })))
                break
        }
    }

    useEffect(() => {
        addTask(testItem2)
        addTask(testItem4)
    }, [])


    const makeCard = () => {
        return (
            <styled.StatusBoardStyle>
                <styled.StatusSection className={"noStatus"}>
                    <styled.StatusHeader>No Status</styled.StatusHeader>
                        {currProject.items.noStatus.map((item: Task) => <TaskCard data={item} key={item.id} />)}
                    <button data-custom={0}>Add Item</button>
                </styled.StatusSection>

                <styled.StatusSection className={"doingStatus"}>
                    <styled.StatusHeader>Doing</styled.StatusHeader>
                        {currProject.items.doing.map((item: Task) => <TaskCard data={item} key={item.id} />)}
                    <button data-custom={1}>Add Item</button>
                </styled.StatusSection>

                <styled.StatusSection className={"doneStatus"}>
                    <styled.StatusHeader>Done</styled.StatusHeader>
                        {currProject.items.done.map((item: Task) => <TaskCard data={item} key={item.id} />)}
                    <button data-custom={2}>Add Item</button>
                </styled.StatusSection>
                </styled.StatusBoardStyle>
        )
    }

    return (
        <styled.ProjectStyle>
            <h2>Project: {title}</h2>
            <h6>Created on: {dateCreated}</h6>
            { makeCard() }
        </styled.ProjectStyle>
    );
}

