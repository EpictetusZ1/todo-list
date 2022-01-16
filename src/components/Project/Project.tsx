import { IProjectType, Task} from "../../types/Project.types";
import { TaskCard } from "../TaskCard/TaskCard";
import { TaskForm } from "../TaskForm/TaskForm";
import React, {useContext, useState} from "react";
import * as styled from "./Project.styles";
import {CurrPContext} from "../../App";

export const Project: React.FC = (  ) => {
    const [showForm, setShowForm] = useState(false)
    const currProjectContext = useContext(CurrPContext)

    const sortByStatus = (currProject: IProjectType) => {
        const noStatus = currProject.items.filter((obj) => obj.status === "noStatus")
        const doingStatus = currProject.items.filter((obj) => obj.status === "doing")
        const doneStatus = currProject.items.filter((obj) => obj.status === "done")
        return [
            noStatus,
            doingStatus,
            doneStatus
        ]
    }

    const makeCard = (currProject: IProjectType) => {
        const [noStatus, doing, done] =   sortByStatus(currProject)

        return (
            <styled.StatusBoardStyle>
                <styled.StatusSection>
                    <styled.StatusHeader>No Status</styled.StatusHeader>
                    {/* @ts-ignore*/}
                    {noStatus.map((item: Task) => <TaskCard data={item} key={item.id} />) }
                    {toggleButtonForm(0)}
                </styled.StatusSection>

                <styled.StatusSection>
                    <styled.StatusHeader>Doing</styled.StatusHeader>
                    {/* @ts-ignore*/}
                    {doing.map((item: Task) => <TaskCard data={item} key={item.id} />) }
                </styled.StatusSection>

                <styled.StatusSection>
                    <styled.StatusHeader>Done</styled.StatusHeader>
                    {/* @ts-ignore*/}
                    {done.map((item: Task) => <TaskCard data={item} key={item.id} />) }
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
            <h2>{currProjectContext.currPState.title}</h2>
            <h6>Created on: {currProjectContext.currPState.dateCreated}</h6>

            { makeCard(currProjectContext.currPState) }
            { showForm && <TaskForm  toggleForm={setShowForm}/>}
        </styled.ProjectStyle>
    );
}
