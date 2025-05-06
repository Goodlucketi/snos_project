/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { userDetailsMap } from '../sampleAdminData';

function UserDetails({ userId, onClose }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (userId && userDetailsMap[userId]) {
      setUserDetails(userDetailsMap[userId]);
    } else {
      setUserDetails(null);
    }
  }, [userId]);

  if (!userDetails) return null;

  const { user, alerts } = userDetails;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
        <p className="mb-1"><strong>Email:</strong> {user.email}</p>
        <p className="mb-4"><strong>Location:</strong> {user.location}</p>

        <h3 className="text-lg font-semibold mb-2">Sensor Alerts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="border rounded-lg p-3 bg-gray-50 shadow">
              <img
                src={alert.image_url}
                alt="Alert"
                className="w-full h-32 object-cover rounded"
              />
              <p className="mt-2 font-semibold">{alert.message}</p>
              <p className="text-sm text-gray-500">{new Date(alert.timestamp).toLocaleString()}</p>

              <div className="actions p-2 mx-auto">
                <button className="p-2 bg-cyan-400 transition-all duration-500 hover:bg-blue-500"> Take Action </button>
                <button className="p-2 bg-cyan-400 transition-all duration-500 hover:bg-blue-500"> Completed </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
