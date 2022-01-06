import React, {useState} from "react";
import {TaskFormStyles, FormElStyle, SubmitButton} from "./TaskForm.styles";


interface ButtonProps {
    onSubmit: () => void;
}

const alertClicked = (e: React.SyntheticEvent) => {
    window.alert("you clicked the button")
}


export const TaskForm: React.FC = () => {
    const [formData, setFormData] = useState(null)

   return (
       <TaskFormStyles >
           <p>Add A New Task:</p>
           <form autoComplete="off">
               <FormElStyle>
                   <label htmlFor="name">Name:</label>
                   <input type="text"
                          name="Task Name" required={true} />
               </FormElStyle>
               <FormElStyle>
                   <label htmlFor="desc">Description:</label>
                   <input type="text" name="Task desc" required={true} />
                   </FormElStyle>
               <FormElStyle>
                   <label htmlFor="dueDate">Due Date:</label>
                   <input type="text" name="Due Date" />
               </FormElStyle>
               <FormElStyle>
                   <SubmitButton>Add Task</SubmitButton>
               </FormElStyle>
           </form>
       </TaskFormStyles>

   )
}