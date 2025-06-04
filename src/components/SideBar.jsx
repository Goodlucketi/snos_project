import { useState } from "react";
import { FaTachometerAlt, FaBell, FaSignOutAlt, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="relative md:h-screen">
            {/* Toggle Button for mobile */}
            <button onClick={toggleSidebar} className="md:hidden p-4 text-2xl">
                <FaBars />
            </button>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-full bg-slate-800/95 border-r transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}>
                {/* Close button in mobile */}
                <div className="flex justify-between items-center p-4 md:hidden">
                    <h2 className="text-2xl font-bold">SNOS</h2>
                    <button onClick={toggleSidebar} className="text-xl">
                        <FaTimes />
                    </button>
                </div>

                {/* Sidebar content */}
                <nav className="py-2 px-3 mt-4">
                    <h2 className="p-2 font-bold text-2xl mb-10 hidden md:block">SNOS</h2>
                    <ul className="links">
                        <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <FaTachometerAlt /> Dashboard
                        </li>
                        <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <FaBell /> Alerts
                        </li>
                        <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <FaUser /> Profile
                        </li>
                        <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <FaCog /> Settings
                        </li>
                        <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <FaSignOutAlt /> LogOut
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
