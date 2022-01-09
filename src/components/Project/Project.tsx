import { ProjectProps,  Task } from "../../types/Project.types";
import { TaskCard } from "../TaskCard/TaskCard";
import { TaskForm } from "../TaskForm/TaskForm";
import uniqid from "uniqid";
import React, {useEffect, useState} from "react";
import * as styled from "./Project.styles";

export const Project: React.FC<ProjectProps> = ( {data} ) => {

    const [showForm, setShowForm] = useState(false)
    const [currProject, setCurrProject] = useState(data)
    const { title, dateCreated } = data

    const testItem2: Task = {
        status: "doing",
        id: uniqid.time("task-"),
        title: "Test Bravo",
        desc: "Starting to work",
        dueDate: "Saturday",
        priority: "low",
        notes: "Not Really"
    }

    const testItem4: Task = {
        status: "done",
        id: uniqid.time("task-"),
        title: "Test I AM DONE",
        desc: "Starting IT WORKS????",
        dueDate: "Forever",
        priority: "low",
        notes: "WOOOOOOOOOO"
    }

    const addTask = (task: Task) => {
        setShowForm(prevState => !prevState)
        switch (task.status) {
            default: return currProject
            case "noStatus":
                 setCurrProject((prevState => ({
                    ...prevState,
                    items: {
                        ...prevState.items,
                        noStatus: prevState.items.noStatus.concat(task)
                    }
                })))
                break
            case "doing":
                 setCurrProject((prevState => ({
                    ...prevState,
                    items: {
                        ...prevState.items,
                        doing: prevState.items.doing.concat(task)
                    }
                })))
                break
            case "done":
                 setCurrProject((prevState => ({
                    ...prevState,
                    items: {
                        ...prevState.items,
                        done: prevState.items.done.concat(task)
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
                        {currProject.items.noStatus.map( (item: Task) => <TaskCard data={item} key={item.id} />)}
                    {toggleButtonForm(0)}
                </styled.StatusSection>

                <styled.StatusSection className={"doingStatus"}>
                    <styled.StatusHeader>Doing</styled.StatusHeader>
                        {currProject.items.doing.map( (item: Task) => <TaskCard data={item} key={item.id} />)}
                </styled.StatusSection>

                <styled.StatusSection className={"doneStatus"}>
                    <styled.StatusHeader>Done</styled.StatusHeader>
                        {currProject.items.done.map( (item: Task) => <TaskCard data={item} key={item.id} />)}
                </styled.StatusSection>

                </styled.StatusBoardStyle>
        )
    }

    const toggleButtonForm = (status: number) => {
        return (
            <styled.ButtonStyle
                onClick={ () => setShowForm(prevState => !prevState) }
                data-custom={status}
            >
                Add Item
            </styled.ButtonStyle>
        )
    }

    return (
        <styled.ProjectStyle>
            <h2>{title}</h2>
            <h6>Created on: {dateCreated}</h6>
            { makeCard() }
            { showForm && <TaskForm addTasksSetter={addTask} />}
        </styled.ProjectStyle>
    );
}

