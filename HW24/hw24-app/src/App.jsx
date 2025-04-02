import { useState } from 'react'
import './App.css'
import lukeImg from './assets/star.jpg'
import starsImg from './assets/star-svgrepo-com.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="flex relative bg-gradient-to-br from-gray-900 to-gray-800 w-[90%] max-w-lg rounded-3xl shadow-2xl p-6 flex-col sm:flex-row sm:items-center gap-6 border border-gray-700">
        <img className="w-28 h-28 rounded-xl  shadow-md" src={lukeImg} alt="Luke Skywalker" />
        <img src={starsImg} className='w-4 absolute' alt="" />
        <img src={starsImg} className="w-4 absolute top-2 left-4 opacity-70" alt="" />
        <img src={starsImg} className="w-3 absolute top-8 right-6 opacity-60" alt="" />
        <img src={starsImg} className="w-5 absolute bottom-4 left-10 opacity-50" alt="" />
        <img src={starsImg} className="w-4 absolute bottom-2 right-12 opacity-80" alt="" />
        <img src={starsImg} className="w-3 absolute top-12 left-20 opacity-65" alt="" />
        <img src={starsImg} className="w-5 absolute bottom-10 right-20 opacity-55" alt="" />
        <img src={starsImg} className="w-4  absolute top-16 right-32 opacity-75" alt="" />

       
        <div className="space-y-4 text-center sm:text-left">
     
          <h2 className="text-2xl font-extrabold text-white tracking-wide">Luke Skywalker</h2>

       
          <div className="w-[260px] border text-[16px] border-blue-500 rounded-lg p-4 bg-gray-700 text-gray-300 text-sm font-medium shadow-md">

            <p className="flex justify-between"><span className="text-blue-400">Height:</span> <span className="text-white">172 cm</span></p>
            <p className="flex justify-between"><span className="text-blue-400">Mass:</span> <span className="text-white">77 kg</span></p>
            <p className="flex justify-between"><span className="text-blue-400">Hair:</span> <span className="text-white">Blond</span></p>
            <p className="flex justify-between"><span className="text-blue-400">Skin:</span> <span className="text-white">Fair</span></p>
            <p className="flex justify-between"><span className="text-blue-400">Eyes:</span> <span className="text-white">Blue</span></p>
            <p className="flex justify-between"><span className="text-blue-400">Gender:</span> <span className="text-white">Male</span></p>
            <p className="flex justify-between"><span className="text-blue-400">Birth Year:</span> <span className="text-white">19BBY</span></p>
          </div>
        </div>
      </div>

    </>
  )
  

}

export default App
