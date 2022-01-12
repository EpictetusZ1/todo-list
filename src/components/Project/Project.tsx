import { ProjectType, Task} from "../../types/Project.types";
import { TaskCard } from "../TaskCard/TaskCard";
import { TaskForm } from "../TaskForm/TaskForm";
import uniqid from "uniqid";
import React, {useContext, useState} from "react";
import * as styled from "./Project.styles";
import {CurrPContext} from "../../App";

export const Project: React.FC = (  ) => {

    const [showForm, setShowForm] = useState(false)
    const currProjectContext = useContext(CurrPContext)


    const makeCard = (currProject: ProjectType) => {
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
            <h2>{currProjectContext.currPState.title}</h2>
            <h6>Created on: {currProjectContext.currPState.dateCreated}</h6>
            { makeCard(currProjectContext.currPState) }
            { showForm && <TaskForm  toggleForm={setShowForm}/>}
        </styled.ProjectStyle>
    );
}

