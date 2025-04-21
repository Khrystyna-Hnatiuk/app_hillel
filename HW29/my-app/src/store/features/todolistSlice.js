import { createSlice } from "@reduxjs/toolkit";

const storedTasks = JSON.parse(localStorage.getItem('todos'))|| []
const initialState = {
    tasks: storedTasks
}
const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTask: (state, action) => {
           
            state.tasks.push({
                id:Date.now(),
                text:action.payload
            });
             localStorage.setItem('todos', JSON.stringify(
                state.tasks
            ))
        }
    }

})

export const { addTask } = todolistSlice.actions;
export default todolistSlice.reducer;