import { NavLink, Outlet } from "react-router-dom"

import { useTheme } from "./Theme"
const navLinks = [
    { to: '/', label: "Main" },
    { to: '/todolist', label: "To do" },
   


]

const Layout = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <><div className={`min-h-screen  ${theme === 'dark' ? 'bg-[rgb(0,0,35)] text-white' : 'bg-white text-[rgb(0,0,60)]'}  flex flex-col`}>
            <header className={`text-white w-full border h-30 ${theme === 'dark' ? 'border-[rgb(46,46,46)]' : ' border-gray-200'}  p-4 flex justify-between items-center`}>
                <h1 className={`${theme === 'dark' ? ' text-white' : ' text-[rgb(0,0,60)]'} text-4xl pl-20 pt-10 font-bold`}>🚀SPA </h1>
                <nav className="space-x-6 text-[20px] pr-20 pt-10">
                    {navLinks.map(({ to, label }) => {
                        return (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    isActive
                                    ? `${theme === 'dark' ? 'text-white' : 'text-[rgb(0,0,60)]'} underline`
                                    : `${theme === 'dark' ? 'text-gray-400' : 'text-[rgb(20,30,190)]'} hover:underline`
                                    }
                            >
                                {label}
                            </NavLink>)
                    })}
                    <button onClick={toggleTheme}
                        className={` px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[rgb(0,0,47)]' : 'text-[rgb(0,0,100)] hover:bg-[rgb(240,240,240)]'}   rounded `}
                    >  {theme === 'dark' ? '⚪️Light' : '⚫️Dark'}
                    </button>

                </nav>


            </header>

            <main className={`${theme === 'dark' ? 'bg-[rgb(0, 0, 77)] text-white' : 'bg-white text-[rgb(0,0,60)]'} flew-grow px-8 pb-8`}>
                <Outlet />
            </main>      
             </div>
            <footer className={`w-full bg-[rgb(0,0,30)] ${theme === 'dark' ? 'bg-[rgb(0, 0, 77)] text-white' : 'text-[rgb(0,0,60)] bg-gray-100'} h-[100px] flex flex-col items-center justify-center text-center text-[20px] `}>
                All rights are protected
            </footer>
        </>

    )
}

export default Layout
