import { navLinks } from '@/components/layouts/mainLayout/config';
import clsx from 'clsx';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-white">
      <header className="bg-blue-800 px-6 py-4 shadow-md">
        <nav className="flex items-center justify-between max-w-5xl mx-auto">
          <h1 className="text-xl font-bold text-white-400">BookingApp</h1>
          <ul className="flex gap-6">
            {navLinks.map(({ name, to }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    clsx(
                      'text-blue-300 hover:text-gray-900 transition-colors',
                      isActive && 'text-yellow-500',
                    )
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="px-6 py-10 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;