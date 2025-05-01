import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    loading: false,
    error: null,
}
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        loadTasksRequest: (state) => {
        },
        loadTaskSuccess: (state, action) => {
            state.tasks = action.payload;
            state.loading = false
        },
        loadTaskFailure: (state) => {
            state.loading = false;
            state.error = action.payload
        },

        addTaskSuccess: (state, action) => {
            state.tasks.push(action.payload);
            state.loading = false;
        },
        addTaskRequest: (state) => { },

        addTaskFailure: (state, action) => {
            state.error = action.payload
        },

        editTaskSuccess: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.todo = action.payload.todo
            }
        },
        editTaskFailure: (state, action) => {
            state.error = action.payload
        },
        editTaskRequest: () => { },

        deleteTaskSuccess: (state, action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload)
        },
        deleteTaskFailure: (state, action) => {
            state.error = action.payload
        },
        deleteTaskRequest: () => { },

        toggleRequest: (state) => { },

        toggleCompleted: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.completed = action.payload.completed;
            }
        },

        clearTasksSuccess: (state) => {
            state.tasks = [];
        },
        clearTaskRequest: (state) => { },
        clearTaskFailure: (state, action) => {
            state.error = action.payload
        },

    }
})

export const { deleteTaskRequest, editTaskRequest, toggleRequest, clearTaskRequest,
    clearTasksSuccess, addTaskRequest, clearTaskFailure, editTaskFailure, deleteTaskFailure,
    toggleCompleted, editTaskSuccess, deleteTaskSuccess, addTaskFailure, addTaskSuccess,
    loadTaskFailure, loadTaskSuccess, loadTasksRequest } = todosSlice.actions;
export default todosSlice.reducer;

