import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}
const todolistSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
           
            state.tasks.push({
                id:Date.now(),
                text:action.payload
            });
 
        }
    }

})

export const { addTask } = todolistSlice.actions;
export default todolistSlice.reducer;