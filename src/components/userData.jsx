/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { userDetailsMap } from '../sampleAdminData';

function UserDetails({ userId, onClose, onUpdateStatus }) {
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

  const handleActionClick = () => {
    onUpdateStatus(userId, 'in-progress');
  };

  const handleCompletedClick = () => {
    onUpdateStatus(userId, 'completed');
  };

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
              <div className="my-3 message border p-3 rounded-md">
                <p><span className="font-semibold">Message:</span> {alert.message}</p>
                <p className="text-sm text-gray-700 my-2">
                  <span className="font-bold">Time:</span> {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>

              <div className="actions p-2 mx-auto text-center my-3">
                <button
                  onClick={handleActionClick}
                  className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700 rounded-md mx-2"
                >
                  Take Action
                </button>
                <button
                  onClick={handleCompletedClick}
                  className="p-2 bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 rounded-md mx-2"
                >
                  Completed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
