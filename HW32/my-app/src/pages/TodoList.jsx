import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasksRequest, clearTaskRequest, toggleRequest, deleteTaskRequest, addTaskRequest, editTaskRequest } from '../store-saga/todos/todosSlice';
import { Box, Button, TextField, Typography, ListItem, List } from '@mui/material';
const TodoList = () => {



    const dispatch = useDispatch();
    const { tasks, loading } = useSelector(state => state.todos);
    const [newTask, setNewTask] = useState('');
    const [editTexts, setEditTexts] = useState({});

    const handleLoadTasks = () => {
        dispatch(loadTasksRequest())
    }

    const handleAddTask = () => {
        if (newTask.trim()) {
            dispatch(addTaskRequest(newTask));
            setNewTask('');
        }
    };
    const handleDeleteTask = (id) => {
        dispatch(deleteTaskRequest(id))
    }
    const handleClearTasks = () => {
        dispatch(clearTaskRequest())
    }
    const handleToggleCompleted = (task) => {
        dispatch(toggleRequest({ id: task.id, completed: !task.completed }))
    }

    const handleEditTask = (task) => {
        const editedText = editTexts[task.id];
        if (editedText && editedText.trim()) {
            dispatch(editTaskRequest({ id: task.id, todo: editedText }))
            setEditTexts(prev => ({
                ...prev, [task.id]: '',
            }))
        }
    }
    const handleEditTextChange = (id, value) => {
        setEditTexts(prev => ({ ...prev, [id]: value }));
    };


    if (loading) return <CircularProgress sx={{ color: 'gray', marginTop: 4 }} />;



    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
            width: '100%',


        }}>
            <Typography variant='h4' sx={{ paddingBottom: '20px' }}
            >Todo List</Typography>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gap: 2
                }}
            >
                <TextField
                    type="text"
                    placeholder="New Task"
                    sx={{
                        width: '65%',
                    }}
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <Button
                    variant='outlined'
                    sx={{ height: '55px', width: '10%' }}
                    onClick={handleAddTask}
                >
                    Add Task
                </Button>
                <Button
                    variant='outlined'
                    sx={{ height: '55px', borderColor: 'red', color: 'red' }}
                    onClick={handleClearTasks}
                >
                    Clear All
                </Button>
                <Button
                    variant='outlined'
                    sx={{ height: '55px', borderColor: 'green', color: 'green' }}
                    onClick={handleLoadTasks}
                >
                    load tasks                </Button>
            </Box>

            <List sx={{ marginTop: '30px', width: '90%' }}>
                {tasks.map(task => (
                    <ListItem sx={{ border: '1px solid darkblue', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', }}
                        key={task.id}
                    >
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
                        >

                            <Typography variant='h6' sx={{ fontSize: '14px', textDecoration: task.completed ? 'underline' : 'none', color: task.completed ? 'darkblue' : 'gray' }}
                            >{task.todo}</Typography>
                            <Button
                                variant='outlined'
                                onClick={() => handleToggleCompleted(task)}
                            >
                                {task.completed ? 'Undo' : 'Complete'}
                            </Button>
                            <Button
                                variant='outlined'
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Delete
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                        >
                            <TextField
                                type="text"
                                placeholder="Edit task"
                                value={editTexts[task.id] || ''}
                                onChange={e => handleEditTextChange(task.id, e.target.value)}
                            />
                            <Button variant='contained' sx={{ backgroundColor: 'lightcoral' }}
                                onClick={() => handleEditTask(task)}
                            >
                                Edit
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
