import { ProjectType, Task } from "./Project.types";
import { TaskCard } from "./TaskCard";
import uniqid from "uniqid";
import React, {useEffect, useState} from "react";

export const Project = ({data}: {data: ProjectType}) => {

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
            <div className={"statusContainers"}>
                <div className={"noStatus"}>
                    <h3>No Status</h3>
                    <ul>
                        {currProject.items.noStatus.map((item: Task) => <TaskCard data={item} key={item.id} />)}
                    </ul>
                    <button data-custom={0}>Add Item</button>
                </div>

                <div className={"doingStatus"}>
                    <h3>Doing</h3>
                    <ul>
                        {currProject.items.doing.map((item: Task) => <TaskCard data={item} key={item.id} />)}
                    </ul>
                    <button data-custom={1}>Add Item</button>
                </div>

                <div className={"doneStatus"}>
                    <h3>Done</h3>
                    <ul>
                        {currProject.items.done.map((item: Task) => <TaskCard data={item} key={item.id} />)}
                    </ul>
                    <button data-custom={2}>Add Item</button>
                </div>

            </div>
        )
    }

    return (
        <div className={"projectContainer"}>
            <h2>Project: {title}</h2>
            <h6>Created on: {dateCreated}</h6>

            { makeCard() }

        </div>
    );
}

