import React, {useState} from "react";
import {Task, TaskFormProps} from "../../types/Project.types";
import {TaskFormStyles, FormElStyle, SubmitButton} from "./TaskForm.styles";
import uniqid from "uniqid";

export const TaskForm: React.FC<TaskFormProps> = ({ addTasksSetter }) => {
    const initFormState: Task = {
        status: "noStatus",
        id: uniqid.time("task-"),
        title: "",
        desc: "",
        dueDate: "",
        priority: "low",
    }

    const [formPayload, setFormPayload] = useState(initFormState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setFormPayload(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setFormPayload(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addTasksSetter(formPayload)
    }

   return (
       <TaskFormStyles >
           <p>Add A New Task:</p>
           <form autoComplete="off"
                 onSubmit={handleSubmit}
           >
               <FormElStyle>
                   <label htmlFor="title">Title:</label>
                   <input type="text"
                          name="title"
                          value={formPayload.title}
                          required={true}
                          onChange={handleChange}
                   />
               </FormElStyle>
               <FormElStyle>
                   <label htmlFor="desc">Description:</label>
                   <input type="text"
                          name="desc"
                          value={formPayload.desc}
                          required={true}
                          onChange={handleChange}
                   />
                   </FormElStyle>
               <FormElStyle>
                   <label htmlFor="dueDate">Due Date:</label>
                   <input type="text"
                          name="dueDate"
                          value={formPayload.dueDate}
                          onChange={handleChange}
                   />
               </FormElStyle>
               <FormElStyle>
                   <label htmlFor="status">Status:</label>
                   <select name="status"
                           value={formPayload.status}
                           onChange={handleSelectedChange}
                   >
                       <option value="noStatus">No Status</option>
                       <option value="doing">Doing</option>
                       <option value="done">Done</option>
                   </select>
               </FormElStyle>
               <FormElStyle>
                   <label htmlFor="priority">Priority:</label>
                   <select name="priority"
                           value={formPayload.priority}
                           onChange={handleSelectedChange}
                   >
                       <option value="low">Low</option>
                       <option value="medium">Medium</option>
                       <option value="high">High</option>
                   </select>
               </FormElStyle>

               <FormElStyle>
                   <SubmitButton type="submit">Add Task</SubmitButton>
               </FormElStyle>

           </form>
       </TaskFormStyles>

   )
}