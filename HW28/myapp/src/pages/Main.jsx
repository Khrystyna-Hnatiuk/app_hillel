import { useEffect } from "react";
import React from "react";
import { useTheme } from "../components/Theme";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import FormSchema from "../forms/FormSchema";



const Main = () => {
  const { theme } = useTheme()
  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      resolver: zodResolver(FormSchema),
      mode: "onTouched"
    }
  )
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('todos')) || [];
    setTasks(savedTasks)
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks))
  }, [tasks])


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const onSubmit = (data) => {
    const newTask = {
      text: data.element,
      id: Date.now(),

    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    reset()
  }




  return (
    <>

      <div className={`w-full mx-auto max-w-[55%]  ${theme === 'dark ? text-white: text-black'} p-[10px] mt-[25px] mb-[25px] flex flex-col justify-center`}>
        <h1 className={`text-[30px] text-center mb-[15px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>ToDoList</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="justify-center flex flex-col items-center ">
          <input {...register('element', )}
            type="text"
            className={`min-h-[25px]  p-[10px] w-full border border-solid ${theme === 'dark' ? 'bg-[#242424] text-white' : 'border border-black p-4 bg-gray-200 text-gray-900'}`} required />
       
          <div className="w-full min-h-[20px] h-[20px] flex items-center">
            <p className="text-red-500 text-sm">
              {errors.element?.message ?? ''}
            </p>
          </div>

          <button type="submit"
            className={`bg-[#ffff] mt-2  text-black rounded-xl border-none cursor-pointer w-[200px] h-[50px] text-[20px] hover:font-bold ${theme === 'dark' ? 'text-black bg-gray-200 ' : 'bg-gray-800 border  border-gray-800 text-white'}`}
          >Додати</button>
        </form>
        
        <ul className="mt-10">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex p-2.5 rounded-xl text-center h-[40px] rounded-lg justify-between items-center mb-2.5 ${theme === 'dark' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'}`}
            >
              {task.text}
              <button
                onClick={() => deleteTask(task.id)}
                className={`w-[100px] text-[16px]  ${theme === 'dark' ? 'text-[#df3b3b]' : 'bg-white text-red-900 text-center rounded-xl'}`}>
                Delete</button>
            </li>
          ))}
        </ul>
      </div>



    </>
  );
}


export default Main;