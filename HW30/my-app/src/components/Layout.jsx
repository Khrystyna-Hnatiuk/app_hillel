import { Link, NavLink, Outlet } from "react-router-dom"

import { useTheme } from "./Theme"
const navLinks = [
    { to: '/', label: "Main" },
    { to: '/swapi', label: "Swapi" },
    { to: '/swapidetails', label: "Swapi Details" },
   


]

const Layout = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <><div className={`min-h-screen  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}  flex flex-col`}>
            <header className={`text-white w-full border h-30 ${theme === 'dark' ? 'border-[rgb(46,46,46)]' : ' border-gray-200'}  p-4 flex justify-between items-center`}>
                <h1 className={`${theme === 'dark' ? ' text-white' : ' text-black'} text-4xl pl-20 pt-10 font-bold`}>🚀SPA </h1>
                <nav className="space-x-6 pr-20 pt-10">
                    {navLinks.map(({ to, label }) => {
                        return (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    isActive
                                    ? `${theme === 'dark' ? 'text-white' : 'text-gray-900'} underline`
                                    : `${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:underline`
                                    }
                            >
                                {label}
                            </NavLink>)
                    })}
                    <button onClick={toggleTheme}
                        className={` px-4 py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}  text-black rounded hover:bg-gray-400`}
                    >  {theme === 'dark' ? '⚪️Light' : '⚫️Dark'}
                    </button>

                </nav>


            </header>

            <main className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} flew-grow px-8 pb-8`}>
                <Outlet />
            </main>      
             </div>
            <footer className={`w-full bg-[rgb(46,46,46)] ${theme === 'dark' ? 'bg-[#242424] text-white' : ' text-gray-900 bg-gray-100'} h-[100px] flex flex-col items-center justify-center text-center text-[20px] `}>
                All rights are protected
            </footer>
        </>

    )
}

export default Layout
