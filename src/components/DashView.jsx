import axios from "axios";
import { useEffect, useState, } from "react";
// import sampleUserAlerts from '../sampleUserAlerts'
import { useNavigate } from "react-router-dom";


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

    return ( 
        <main>
            <div className="w-11/12 mx-auto p-4 md:p-2">
                <p className="my-3 md:my-2 text-xl">Welcome <span className="font-bold">{user?.name}</span></p>
                <h2 className="text-xl font-bold mb-4">Your Alerts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {alerts.map((alert) => (
                    <div key={alert.id} className="border rounded-lg p-4 shadow">
                        <img src={alert?.image_url} alt="Alert" className="w-full h-72 object-cover rounded relative object-top" />
                        <p className="my-3 font-semibold">Message: <span className="font-normal">{alert?.message_text}</span></p>
                        <p className="text-sm text-gray-600 font-semibold">Time: <span className="font-normal">{new Date(alert?.timestamp).toLocaleString()}</span> </p>
                    </div>
                    ))}
                </div>
            </div>
        </main>
     );
}
 
export default DashView;