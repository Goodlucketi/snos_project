import { FaTachometerAlt, FaBell, FaSignOutAlt, FaUser, FaCog } from "react-icons/fa";

const SideBar = () => {
    return ( 
        < main className="py-5">
            <h2 className="p-2 font-bold text-2xl">SNOS</h2>
            <nav className="py-2 border-r-2 h-screen px-3">
                
                <div className="links">
                    <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm"><FaTachometerAlt/> Dashboard</li>
                    <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm"><FaBell/> Alerts</li>
                    <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm"><FaUser /> Profile</li>
                    <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-sm"><FaCog /> Settings</li>
                    <li className="py-2 px-4 mb-5 list-none flex items-center gap-4 hover:bg-slate-200 transition-all duration-500 hover:text-slate-800 rounded-md"><FaSignOutAlt /> LogOut</li>
                </div>
            </nav>
        
        </ main>
     );
}
 
export default SideBar;