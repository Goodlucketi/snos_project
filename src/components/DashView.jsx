import axios from "axios";
import { useEffect, useState, } from "react";
// import security_icon from '../assets/images/security_icon.png'
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";


const DashView = () => {
    const { user } = useAuth()
    const [alerts, setAlerts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user == null){
            return
        }
        if(!user){
            navigate('/login')
        }
        setIsLoading(false)
    },[user, navigate])

    useEffect(() => {
       const userAlerts = async() =>{
        try {
            if(user?.user_id){
                const response = await axios.get(`https://snos.teledominternational.net/alerts/read.php?user_id=${user.user_id}`)
                setAlerts(response.data)
                console.log(response.data);
            }  
        } catch (error) {
            toast.error("Failed to fetch alerts", error)
        }
       }
       userAlerts()
    }, [user]);

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center bg-slate-800 text-white">Loading...</div>;
    }
    const unreadCount = Array.isArray(alerts)  ? alerts.filter(alert=>alert.status === 'unread').length : 0;
    return ( 
        <main className="bg-slate-800 text-white h-screen overflow-x-hidden">
            <div className="w-11/12 mx-auto md:py-8 bg-slate-800">
                <div className="content md:flex gap-10 justify-center">
                    <div className="sidebar">
                        <SideBar
                            unreadCount={unreadCount}
                        />
                    </div>
                    <div className="views py-4 w-full">
                        <Outlet context={{ alerts, setAlerts, user }} />
                    </div> 
                </div>
               
            </div>
        </main>
     );
}
 
export default DashView;