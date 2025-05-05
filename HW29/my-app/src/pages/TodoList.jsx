import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "../components/Theme";
import { addTask } from "../store/features/todolistSlice";
import { useSelector } from "react-redux";
const TodoList = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const [count, setCount] = useState(0);
    const [error,setError] = useState('')
    const { theme } = useTheme()
    const todos = useSelector((state) => state.todos.tasks);

    const handleSubmit=(e)=>{  
              e.preventDefault();

        if(value.trim()===''){
        setError('This field can not be empty')
        return
         }
        setError('')
        dispatch(addTask(value));
        setValue('');
        setCount((prev) => prev + 1)
    }
    return (
        <><div className="flex flex-col items-center justify-between">
            <h1 className={`text-[30px] text-center mb-[15px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>ToDoList</h1>
            <div className="min-w-[700px]">
                <form onSubmit={handleSubmit}
                    className="justify-center flex flex-col items-center ">
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={() => {
                            if (value.trim() !== '') {
                              setError('');
                            }
                          }}
                        placeholder="Enter task"
                        type="text"
                        className={`min-h-[25px]  p-[10px] w-full border border-solid ${theme === 'dark' ? 'bg-[#242424] text-white' : 'border border-black p-4 bg-gray-200 text-gray-900'}`}  />
                    <div className="w-full min-h-[20px] h-[20px] flex items-center">
                    {error && <p data-testid="error-message" className="text-red-500">{error}</p>}

                    </div> 

                    <button type="submit"
        
                        className={`bg-[#ffff] mt-2  text-black rounded-xl border-none cursor-pointer w-[200px] h-[50px] text-[20px] hover:font-bold ${theme === 'dark' ? 'text-black bg-gray-200 ' : 'bg-gray-800 border  border-gray-800 text-white'}`}
                    >Add</button>
                </form>
                <div className="text-[30px] ">Todos</div>
                <hr className="text-gray-600" />

                <ul className="mt-4">
                    {todos.map((task) => (
                        <li
                            key={task.id}
                            className={`flex p-2.5 rounded-xl text-center h-[40px] rounded-lg justify-between items-center mb-2.5 ${theme === 'dark' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}
                        >
                            {task.text}

                        </li>
                    ))}
                </ul>
            </div>
        </div>
            <div className="flex justify-center text-[30px]">
                Count:{count}
            </div></>
    )
}
export default TodoList

