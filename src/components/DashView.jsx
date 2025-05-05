import { useEffect, useState } from "react";
import sampleUserAlerts from '../sampleUserAlerts'

const DashView = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        setAlerts(sampleUserAlerts); // or setUsers(users)
      }, []);

    return ( 
        <main>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Your Alerts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {alerts.map((alert) => (
                    <div key={alert.id} className="border rounded-lg p-4 shadow">
                        <img src={alert.image_url} alt="Alert" className="w-full h-48 object-cover rounded relative object-top" />
                        <p className="mt-2 font-semibold">{alert.message}</p>
                        <p className="text-sm text-gray-600">{new Date(alert.timestamp).toLocaleString()}</p>
                    </div>
                    ))}
                </div>
            </div>
        </main>
     );
}
 
export default DashView;