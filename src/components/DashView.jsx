import axios from "axios";
import { useEffect, useState, } from "react";
// import security_icon from '../assets/images/security_icon.png'
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { FaSearch } from "react-icons/fa";


const DashView = () => {
    const [user, setUser] = useState(null)
    const [alerts, setAlerts] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('user'))
        console.log(userData);
        
        if(!userData){
            navigate('/login')
        }else{
            setUser(userData)
            console.log(userData);
            
        }
    },[])

    useEffect(() => {
       const userAlerts = async() =>{
        try {
            const response = await axios.get(`https://app.snosfortress.com/api/alerts/read.php?user_id=${user.user_id}`)
            setAlerts(response.data)
            console.log(response.data);
            
        } catch (error) {
            console.error("Failed to fetch alerts", error)
        }
       }
       userAlerts()
      }, [user]);

      const sortAlerts = [...alerts].sort((a, b)=> new Date(b.timestamp) - new Date(a.timestamp)
  )
    return ( 
        <main className="bg-slate-800 text-white h-screen overflow-x-hidden">
            <div className="w-11/12 mx-auto md:py-8 bg-slate-800">
                <div className="content md:flex gap-10 justify-center">
                    <div className="sidebar w-5/12">
                        <SideBar />
                    </div> 
                    <div className="py-4">
                        <div className="info w-11/12 mx-auto md:w-full">
                            <p>Welcome <span className="font-bold text-lg">{user?.name}</span></p>
                            <h2 className="text-3xl  font-bold p-2">Alerts</h2>
                            <p className="p-2 mb-3 text-slate-400">View your Alerts</p>
                            <div className="seach relative mb-3">
                                <FaSearch className="absolute top-4 left-5" />
                                <input type="search" name="search" id="search" placeholder="Search Alerts" className="py-2 pl-12 bg-transparent border rounded-md w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-4 my-10">
                            {sortAlerts.map((alert) => (
                            <div key={alert.id} className="w-11/12 mx-auto md:w-full rounded-lg p-4 shadow-xl border">
                                <img src={alert.media_url} alt="Alert" className="w-full object-cover rounded relative object-top bg-slate-200 p-3" />
                                <p className="my-3 font-semibold">Message: <span className="font-thin">{alert?.message_text}</span></p>
                                <p className="text-sm text-slate-400 font-semibold">Time: <span className="font-normal">{new Date(alert?.timestamp).toLocaleString()}</span> </p>
                            </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
               
            </div>
        </main>
     );
}
 
export default DashView;