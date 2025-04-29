import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../components/Theme'
import { loadTasksRequest, clearTaskRequest, toggleRequest, deleteTaskRequest, addTaskRequest, editTaskRequest } from '../store-saga/features/todos/todosSlice';

const TodoList = () => {



    const dispatch = useDispatch();
    const { theme } = useTheme()
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


    if (loading) return <div>Loading...</div>;


    return (
        <div>
            <h1 className='mt-10 mb-10 text-[40px] text-center'>Todo List</h1>
            <div className="flex mb-6">
                <input
                    type="text"
                    className={`w-[80%] rounded h-[50px] border pl-2 mr-6 ${theme === 'dark' ? 'border-white' : 'border-blue-900'}`}
                    placeholder="New Task"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <button
                    className={`rounded mr-4 w-[140px] hover:bg-blue-100  p-3 ${theme === 'dark' ? 'bg-white text-blue-900' : 'bg-[rgb(0,0,80)] text-white'}`}
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
                <button
                    className={`rounded w-[140px] p-3 hover:bg-blue-100  ${theme === 'dark' ? 'bg-white text-blue-900' : 'bg-[rgb(0,0,80)] text-white'}`}
                    onClick={handleClearTasks}
                >
                    Clear All
                </button>
                <button
                    className={`rounded ml-4 w-[140px] p-3 hover:bg-blue-100 ${theme === 'dark' ? 'bg-white text-blue-900' : 'bg-[rgb(0,0,80)] text-white'}`}
                    onClick={handleLoadTasks}
                >
                    load tasks                </button>
            </div>

            <ul className="mt-10 ">
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className={`flex justify-between items-center border mb-4 ${theme === 'dark' ? 'border-white' : 'border-blue-900'}  rounded p-4`}
                    >
                        <div className="flex items-center gap-4">

                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="text-lg">{task.todo}</span>
                            <button
                                className={`px-3 py-1 rounded ${theme === 'dark' ? 'bg-white text-blue-900' : 'bg-[rgb(0,0,80)] text-white'}`}
                                onClick={() => handleToggleCompleted(task)}
                            >
                                {task.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button
                                className={`px-3 py-1 rounded ${theme === 'dark' ? 'bg-white text-blue-900' : 'bg-[rgb(0,0,80)] text-white'}`}
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Delete
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Edit task"
                                className={`w-[200px] rounded h-[40px] border pl-2 ${theme === 'dark' ? 'border-white' : 'border-blue-900'}`}
                                value={editTexts[task.id] || ''}
                                onChange={e => handleEditTextChange(task.id, e.target.value)}
                            />
                            <button
                                className={`px-3 py-2 rounded ${theme === 'dark' ? 'bg-white text-blue-900' : 'bg-[rgb(0,0,80)] text-white'}`}
                                onClick={() => handleEditTask(task)}
                            >
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
