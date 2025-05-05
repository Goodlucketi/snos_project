import { useEffect, useState } from "react";
import sampleUserAlerts from '../sampleUserAlerts'

const DashView = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        setAlerts(sampleUserAlerts); // or setUsers(users)
      }, []);

    return ( 
        <main>
            <div className="w-11/12 mx-auto p-4 md:p-2">
                <p className="my-3 md:my-2">Hello Welcome Emmanuel Festus</p>
                <h2 className="text-xl font-bold mb-4">Your Alerts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {alerts.map((alert) => (
                    <div key={alert.id} className="border rounded-lg p-4 shadow">
                        <img src={alert.image_url} alt="Alert" className="w-full h-72 object-cover rounded relative object-top" />
                        <p className="my-3 font-semibold">Message: <span className="font-normal">{alert.message}</span></p>
                        <p className="text-sm text-gray-600 font-semibold">Time: <span className="font-normal">{new Date(alert.timestamp).toLocaleString()}</span> </p>
                    </div>
                    ))}
                </div>
            </div>
        </main>
     );
}
 
export default DashView;