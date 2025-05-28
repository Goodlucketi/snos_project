import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import Button from "./Button";

const Footer = () => {
    return ( 
        <footer className="px-6 pt-6 bg-slate-50 text-blue-700 mt-10">
            <div className="footer md:flex justify-between">
                <div className="logo p-2 md:w-3/12">
                    <img src={logo} alt="Teledom Logo" className="w-6/12 md:w-10/12" />
                </div>
                <ul className="links list-none p-2">
                    <h3 className="font-bold text-lg">Links</h3>
                    <Link to=""><li>Home</li></Link>
                    <Link to=""><li>About</li></Link>
                    <Link to=""><li>Features</li></Link>
                    <Link to=""><li>Contact</li></Link>
                </ul>
                <div className="subscribe md:w-4/12">
                    <p className="p-2 text-lg font-bold">Subscribe to Our Newsletter</p>
                    <form className="border-2 rounded-md relative">
                        <input type="email" name="email" id="email" placeholder="Email" className="p-2 w-full" />
                        <div className="absolute right-0 top-0">
                            <Button type="submit" text="Subscribe" />
                        </div>
                    </form>
                </div>
            </div>

            <p className="p-2 bg-slate-900 text-white mt-10 text-center">Teledom Group</p>
        </footer>
     );
}
 
export default Footer;