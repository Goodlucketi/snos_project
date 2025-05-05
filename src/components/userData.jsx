import { useState, useEffect } from 'react';
import { userDetailsMap } from '../sampleAdminData';

function UserDetails({ userId }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (userId && userDetailsMap[userId]) {
      setUserDetails(userDetailsMap[userId]);
    } else {
      setUserDetails(null);
    }
  }, [userId]);

  if (!userDetails) return (
    <div className="p-4 text-gray-600 italic">
      Select a user to view their details and alerts.
    </div>
  );

  const { user, alerts } = userDetails;

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-1">{user.name}</h2>
      <p className="mb-1"><strong>Email:</strong> {user.email}</p>
      <p className="mb-4"><strong>Location:</strong> {user.location}</p>

      <h3 className="text-lg font-semibold mb-2">Sensor Alerts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="border rounded-lg p-3 shadow-sm bg-gray-50">
            <img
              src={alert.image_url}
              alt="Alert"
              className="w-full h-16 object-cover rounded"
            />
            <p className="mt-2 font-semibold">{alert.message}</p>
            <p className="text-sm text-gray-500">{new Date(alert.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
