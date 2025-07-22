
// import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
    // const [navToggle, setNavToogle] = useState(false)
    return (
        <header className="sticky top-0 left-0 bg-slate-300">
            <nav className="md:w-10/12 z-[999] mx-auto p-4 px-6 flex justify-between items-center">
                <div className="logo">
                    <Link to="/"> <h2 className="font-bold text-2xl text-blue-700">SNOS</h2></Link>
                </div>
                <div className="links">
                    <Link to="/login"><Button text="Get Started" /></Link>
                </div>
            </nav>
        </header> 
        
     );
}
 
export default Navbar;