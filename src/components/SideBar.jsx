/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTachometerAlt, FaBell, FaSignOutAlt, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SideBar = ({ unreadCount }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth()

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
                        <li className="mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm ">
                            <NavLink 
                                to="userdash"
                                className={({isActive})=> `py-2 px-4 flex items-center gap-4 transition-all duration-500 hover:text-slate-800 rounded-sm ${isActive ? 'bg-slate-200 text-slate-800' : 'text-white'}`}
                                onClick={()=>setIsOpen(false)}
                                >
                                <FaTachometerAlt /> Dashboard
                            </NavLink>
                        </li>
                        <li className="mb-5 relative list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <NavLink 
                                to="alerts"
                                 className={({isActive})=> `py-2 px-4 flex items-center gap-4 transition-all duration-500 hover:text-slate-800 rounded-sm ${isActive ? 'bg-slate-200 text-slate-800' : 'text-white'}`}
                                 onClick={()=>setIsOpen(false)}
                                 >
                                <FaBell /> Alerts
                                {unreadCount > 0 && (
                                    <span className="absolute top-0 left-6 bg-red-500 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
                                        {unreadCount}
                                    </span>
                                )}
                            </NavLink>   
                        </li>
                        <li className="mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <NavLink 
                                to="profile"
                                className={({isActive})=> `py-2 px-4 flex items-center gap-4 transition-all duration-500 hover:text-slate-800 rounded-sm ${isActive ? 'bg-slate-200 text-slate-800' : 'text-white'}`}
                                 onClick={()=>setIsOpen(false)}>
                                <FaUser /> Profile
                            </NavLink>    
                        </li>
                        <li className="mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <NavLink 
                                to="settings"
                                className={({isActive})=> `py-2 px-4 flex items-center gap-4 transition-all duration-500 hover:text-slate-800 rounded-sm ${isActive ? 'bg-slate-200 text-slate-800' : 'text-white'}`}
                                 onClick={()=>setIsOpen(false)}>
                               <FaCog /> Settings
                            </NavLink>
                           
                        </li>
                        <li className="mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm">
                            <button
                                onClick={()=> {logout(); setIsOpen(false)}}
                                className="py-2 px-4 flex items-center gap-4 transition-all duration-500 hover:text-slate-800 rounded-sm text-white"
                            >
                                <FaSignOutAlt /> LogOut
                            </button>
                           
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
