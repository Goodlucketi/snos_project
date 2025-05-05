/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { users, userDetailsMap } from '../sampleAdminData';

const Admin = ({ onSelectUser, viewedUsers }) => {
  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    setUserLists(users);
  }, []);

  const hasUnreadAlerts = (userId) => {
    const userData = userDetailsMap[userId];
    return userData?.alerts?.some(alert => alert.unread);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userLists.map((user) => {
            const unread = hasUnreadAlerts(user.id) && !viewedUsers.includes(user.id);
            return (
          <div
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className={`bg-gradient-to-r from-cyan-300 to-blue-300 cursor-pointer p-10 border rounded-lg shadow hover:shadow-md hover:border-green-500 hover:border-1 transition-all duration-500 text-center ${unread ? 'ring-2 ring-red-500' : ''}`}
          >
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.location}</p>
            {unread && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  New
                </span>
            )}
          </div>
            )
        })}
      </div>
    </div>
  );
};

export default Admin;
